import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import { run } from '@ember/runloop';

module('Unit | Serializer | ValueSet_Parameter', function(hooks) {
  setupTest(hooks);

  test('it serializes records', function(assert) {
    const record = run(() => this.owner.lookup('service:store').createRecord('value-set-parameter')),
      serializeRecord = record.serialize();

    assert.ok(serializeRecord);
  });
});