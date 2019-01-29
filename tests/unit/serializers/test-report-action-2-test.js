import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import { run } from '@ember/runloop';

module('Unit | Serializer | TestReport_Action2', function(hooks) {
  setupTest(hooks);

  test('it serializes records', function(assert) {
    const record = run(() => this.owner.lookup('service:store').createRecord('test-report-action-2')),
      serializeRecord = record.serialize();

    assert.ok(serializeRecord);
  });
});