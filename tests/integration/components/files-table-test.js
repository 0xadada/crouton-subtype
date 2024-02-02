import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | files-table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders an empty list', async function (assert) {
    this.set('files', []);
    await render(hbs`<FilesTable @files={{this.files}} />`);
    assert.dom().containsText('No files available');
  });

  test('it renders a list of files', async function (assert) {
    const testFile = {
      name: 'smss.exe',
      device: 'Stark',
      path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
      status: 'scheduled',
    };
    this.set('files', [testFile]);
    await render(hbs`<FilesTable @files={{this.files}} />`);
    assert.dom().containsText('smss.exe');
    assert.dom().containsText('Stark');
    assert.dom().containsText('Scheduled');
    assert.dom().containsText('HarddiskVolume2');
  });
});
