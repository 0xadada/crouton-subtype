import { modifier } from "ember-modifier";

export default modifier(function indeterminate(checkboxElement, [value]) {
  checkboxElement.indeterminate = value;
});
