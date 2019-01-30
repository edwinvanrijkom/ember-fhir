import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import { run } from '@ember/runloop';

module('Unit | Serializer | AdverseEvent_SuspectEntity', function(hooks) {
  setupTest(hooks);

  test('it serializes records', function(assert) {
    const record = run(() => this.owner.lookup('service:store').createRecord('adverse-event-suspect-entity')),
      serializeRecord = record.serialize();

    assert.ok(serializeRecord);
  });
});