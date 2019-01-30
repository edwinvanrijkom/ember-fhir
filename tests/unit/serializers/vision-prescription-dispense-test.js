import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import { run } from '@ember/runloop';

module('Unit | Serializer | VisionPrescription_Dispense', function(hooks) {
  setupTest(hooks);

  test('it serializes records', function(assert) {
    const record = run(() => this.owner.lookup('service:store').createRecord('vision-prescription-dispense')),
      serializeRecord = record.serialize();

    assert.ok(serializeRecord);
  });
});