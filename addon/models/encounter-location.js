import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  location: belongsTo('reference', { async: false }),
  status: attr('string'),
  period: belongsTo('period', { async: false })
});