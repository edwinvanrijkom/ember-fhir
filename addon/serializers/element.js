import FhirSerializer from 'ember-fhir/serializers/-fhir';

export default FhirSerializer.extend({
  attrs: { extension: { embedded: 'always' }
  }
});
