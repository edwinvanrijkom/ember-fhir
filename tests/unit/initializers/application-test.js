import { initialize } from 'dummy/initializers/application';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';
import { run } from '@ember/runloop';
import Application from '@ember/application';

module('Unit | Initializer | application', function (hooks) {
  hooks.beforeEach(function () {
    run(() => {
      this.application = Application.create();
      this.application.deferReadiness();
    });
  });

  hooks.afterEach(function() {
    destroyApp(this.application);
  });

  test('it works', function(assert) {
    initialize(this.application);
    assert.ok(true);
  });
});
