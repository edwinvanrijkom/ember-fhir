import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import { run } from '@ember/runloop';

module('Unit | Serializer | Contract_ValuedItem1', function(hooks) {
  setupTest(hooks);

  test('it serializes records', function(assert) {
    const record = run(() => this.owner.lookup('service:store').createRecord('contract-valued-item-1')),
      serializeRecord = record.serialize();

    assert.ok(serializeRecord);
  });
});