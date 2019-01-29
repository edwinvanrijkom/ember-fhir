import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import { run } from '@ember/runloop';

module('Unit | Serializer | EligibilityResponse_Error', function(hooks) {
  setupTest(hooks);

  test('it serializes records', function(assert) {
    const record = run(() => this.owner.lookup('service:store').createRecord('eligibility-response-error')),
      serializeRecord = record.serialize();

    assert.ok(serializeRecord);
  });
});