import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import { run } from '@ember/runloop';

module('Unit | Serializer | MeasureReport_Population1', function(hooks) {
  setupTest(hooks);

  test('it serializes records', function(assert) {
    const record = run(() => this.owner.lookup('service:store').createRecord('measure-report-population-1')),
      serializeRecord = record.serialize();

    assert.ok(serializeRecord);
  });
});