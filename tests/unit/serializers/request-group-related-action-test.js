import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import { run } from '@ember/runloop';

module('Unit | Serializer | RequestGroup_RelatedAction', function(hooks) {
  setupTest(hooks);

  test('it serializes records', function(assert) {
    const record = run(() => this.owner.lookup('service:store').createRecord('request-group-related-action')),
      serializeRecord = record.serialize();

    assert.ok(serializeRecord);
  });
});