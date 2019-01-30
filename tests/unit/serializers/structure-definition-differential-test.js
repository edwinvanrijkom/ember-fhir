import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import { run } from '@ember/runloop';

module('Unit | Serializer | StructureDefinition_Differential', function(hooks) {
  setupTest(hooks);

  test('it serializes records', function(assert) {
    const record = run(() => this.owner.lookup('service:store').createRecord('structure-definition-differential')),
      serializeRecord = record.serialize();

    assert.ok(serializeRecord);
  });
});