import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | -fhir', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const adapter = this.owner.lookup('adapter:-fhir');
    assert.ok(adapter);
  });
});
