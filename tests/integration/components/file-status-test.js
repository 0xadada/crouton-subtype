import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | file-status', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a titleized status', async function (assert) {
    this.set('file', { status: 'available' });
    await render(hbs`<FileStatus @file={{this.file}} />`);
    assert.dom().containsText('Available');
  });
});
