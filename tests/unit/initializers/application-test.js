import Application from '@ember/application';
import { run } from '@ember/runloop';
import { initialize } from 'dummy/initializers/application';
import { module, test } from 'qunit';

module('Unit | Initializer | application', function(hooks) {
  hooks.beforeEach(function() {
    run(() => {
      this.application = Application.create();
      this.application.deferReadiness();
    });
  });

  hooks.afterEach(function() {
    run(() => {
      this.application.destroy();
    });
  });

  test('it works', function(assert) {
    initialize(this.application);
    assert.ok(true);
  });
});
