import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import type { ScannedFile, ScannedFiles } from '../lib/data.json.d';

export interface FilesTableSignature {
  Args: {
    files: ScannedFiles;
  };
}

export default class FilesTable extends Component<FilesTableSignature> {
  @tracked selectedState = new Array(this.args.files.length).fill(false);

  isSelected = (index: string) =>
    this.selectedState[+index] ? 'selected' : '';

  isChecked = (index: number) => this.selectedState[index];

  get count() {
    return this.selectedState.reduce(
      (count, current) => count + (current ? 1 : 0),
      0,
    );
  }
  get areAllSelected() {
    return this.count === this.selectedState.length;
  }
  get areNoneSelected() {
    return this.count === 0;
  }
  get areSomeSelected() {
    return !this.areNoneSelected && !this.areAllSelected;
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

  @action
  download() {
    const selectedFiles: Array<string> = [];
    this.selectedState.forEach((value, index) => {
      const file = this.args.files[index] as ScannedFile;
      if (value) {
        selectedFiles.push(`${file.device} ${file.path}`);
      }
      /* TODO: If Product wants only 'avilable' files to download
      if (value && file.status === 'available') {
        selectedFiles.push(`${file.device} ${file.path}`);
      }
       */
    });

    const message = selectedFiles.join('\n');
    alert(message);
  }
}
