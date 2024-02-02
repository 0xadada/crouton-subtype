import { modifier } from "ember-modifier";

function indeterminate(checkboxElement, [value]) {
  checkboxElement.indeterminate = value;
}

export default modifier(indeterminate);
