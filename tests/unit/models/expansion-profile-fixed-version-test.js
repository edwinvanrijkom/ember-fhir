import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import { run } from '@ember/runloop';

module('Unit | Model | ExpansionProfile_FixedVersion', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const model = run(() => this.owner.lookup('service:store').createRecord('expansion-profile-fixed-version'));
    assert.ok(!!model);
  });
});