import FhirAdapter from 'ember-fhir/adapters/-fhir';
import FhirSerializer from 'ember-fhir/serializers/-fhir';

export const initialize = (application) => {
  application.register('adapter:-fhir', FhirAdapter);
  application.register('serializer:-fhir', FhirSerializer);
};

export default {
  name: 'application',
  initialize
};
