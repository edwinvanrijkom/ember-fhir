import { moduleForModel, test } from 'ember-qunit';

moduleForModel('eligibility-response-error', 'Unit | Serializer | EligibilityResponse_Error', {
  needs: [
    'serializer:eligibility-response-error',
    'model:codeable-concept',
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it serializes records', function(assert) {
  const record = this.subject(),
    serializeRecord = record.serialize();

  assert.ok(serializeRecord);
});