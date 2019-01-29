import { A } from '@ember/array';
import { guidFor } from '@ember/object/internals';
import { merge } from '@ember/polyfills';
import { set, get } from '@ember/object';
import { capitalize, camelize } from '@ember/string';
import { typeOf, isPresent, isNone, isEmpty } from '@ember/utils';
import Ember from 'ember';
import DS from 'ember-data';
import coerceId from "ember-data/-private/system/coerce-id";
import { pluralize } from 'ember-inflector';

const reserved = [ 'data', 'container', 'trigger', 'type' ];

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: true,

  serialize(snapshot, options) {
    const hash = this._super(snapshot, options),
      resourceType = capitalize(camelize(get(snapshot, 'modelName')));

    set(hash, 'resourceType', resourceType);

    return hash;
  },

  serializeIntoHash(hash, typeClass, snapshot, options) {
    merge(hash, this.serialize(snapshot, options));
  },

  extractId(modelClass, resourceHash) {
    return get(resourceHash, 'id') ||
      guidFor(resourceHash);
  },

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let resourceArray = null,
      hash = {
        'meta': {},
      };

    if (isEmpty(get(payload, 'entry'))) {

      // This is a query where nothing was returned.
      // Create an empty array in the hash so that subsequent parsing doesn't complain that there are 0 expected objects
      if (payload.total === 0) {
        hash[pluralize(primaryModelClass.modelName)] = [];
        return this._super(store, primaryModelClass, hash, id, requestType);
      } else {
        resourceArray = [ payload ];
      }


    } else {
      resourceArray = get(payload, 'entry').mapBy('resource');
    }

    resourceArray.forEach((resource) => {
      // fix reserved names
      reserved.forEach((property) => {
        if (resource.hasOwnProperty(property)) {
          resource[`${property}_`] = resource[property];
          delete resource[property];
        }
      });

      const type = get(resource, 'resourceType').dasherize().pluralize();
      if (isEmpty(get(hash, type))) {
        set(hash, type, A());
      }

      hash[type].push(resource);
    });

    if (payload.link) {
      let meta = {};
      payload.link.forEach(link => { meta[link.relation] = link.url; });
      hash['meta']['pagination'] = meta;
    }

    if (payload.total) {
      hash['meta']['total'] = payload.total;
    }

    return this._super(store, primaryModelClass, hash, id, requestType);
  },

  normalizeArray(store, modelName, arrayHash, prop) {
    const documentHash = {
      data: A()
    };

    arrayHash.map((hash) => {
      const resource = get(hash, 'resourceType'),
        modelClass = store.modelFor(resource),
        serializer = store.serializerFor(resource),
        normalizedSerializer = serializer.normalize(modelClass, hash, prop),
        data = get(normalizedSerializer, 'data');

      get(documentHash, 'data').push(data);
    });

    return documentHash;
  },

  extractRelationship(relationshipModelName, relationshipHash) {
    if (isNone(relationshipHash)) {
      return null;
    }

    if (typeOf(relationshipHash) === 'object') {
      const id = get(relationshipHash, 'id');
      if (isPresent(id)) {
        set(relationshipHash, 'id', coerceId(id));
      }
      return relationshipHash;
    }

    return {
      id: this.extractId(relationshipHash),
      type: relationshipModelName
    };
  }
});
