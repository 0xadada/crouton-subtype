import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | indeterminate', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders in an indeterminiate state', async function (assert) {
    this.set('testValue', true);
    await render(
      hbs`<input type="checkbox" {{indeterminate this.testValue}} />`,
    );
    const el = this.element.querySelector('input');
    assert.true(el.indeterminate);
  });

  test('it doesnt render in an indeterminiate state', async function (assert) {
    this.set('testValue', false);
    await render(
      hbs`<input type="checkbox" {{indeterminate this.testValue}} />`,
    );
    const el = this.element.querySelector('input');
    assert.false(el.indeterminate);
  });
});
