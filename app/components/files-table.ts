import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import type { ScannedFiles } from 'crouton-subtype/lib/data.json.d';

export interface FilesTableSignature {
  Args: {
    files: ScannedFiles;
  };
}

export default class FilesTable extends Component<FilesTableSignature> {
  @tracked selectedState = new Array(this.args.files.length).fill(false);

  isChecked(state: Array<boolean>, index: string) {
    return state[+index];
  }

  get count() {
    return this.selectedState.reduce(
      (count, current) => count + (current ? 1 : 0),
      0,
    );
  }

  get areAllSelected() {
    const allSelected = this.selectedState.every((value) => value === true);
    return allSelected;
  }
  get areNoneSelected() {
    const noneSelected = this.selectedState.every((value) => value === false);
    return noneSelected;
  }
  get areSomeSelected() {
    const areSome = !this.areNoneSelected && !this.areAllSelected;
    return areSome;
  }

  @action
  toggle(index: number) {
    const newState = [...this.selectedState];
    newState[index] = !newState[index];
    this.selectedState = newState;
  }

  @action
  toggleAll() {
    if (this.areAllSelected) {
      this.selectedState = new Array(this.args.files.length).fill(false);
    } else {
      this.selectedState = new Array(this.args.files.length).fill(true);
    }
  }
}