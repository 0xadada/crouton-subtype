import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | file-icon', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a green circle', async function (assert) {
    this.set('file', { status: 'available' });
    await render(hbs`<FileIcon @file={{this.file}} />`);
    assert.dom('svg').hasAttribute('fill', '#74c840');
  });

  test('it renders a transparent circle', async function (assert) {
    this.set('file', { status: 'scheduled' });
    await render(hbs`<FileIcon @file={{this.file}} />`);
    assert.dom('svg').hasAttribute('fill', 'transparent');
  });
});
