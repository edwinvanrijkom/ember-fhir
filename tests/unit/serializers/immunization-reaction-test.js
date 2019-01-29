import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import { run } from '@ember/runloop';

module('Unit | Serializer | Immunization_Reaction', function(hooks) {
  setupTest(hooks);

  test('it serializes records', function(assert) {
    const record = run(() => this.owner.lookup('service:store').createRecord('immunization-reaction')),
      serializeRecord = record.serialize();

    assert.ok(serializeRecord);
  });
});