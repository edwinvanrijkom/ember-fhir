import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import { run } from '@ember/runloop';

module('Unit | Model | ExplanationOfBenefit_Information', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const model = run(() => this.owner.lookup('service:store').createRecord('explanation-of-benefit-information'));
    assert.ok(!!model);
  });
});