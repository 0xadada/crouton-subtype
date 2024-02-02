import Component from '@glimmer/component';
import type { ScannedFile } from 'crouton-subtype/lib/data.json.d';

export interface FileIconSignature {
  Args: {
    file: ScannedFile;
  };
}

const GREEN = '#74c840';
const TRANSPARENT = 'transparent';

export default class FileStatus extends Component<FileIconSignature> {
  get color() {
    return this.args.file.status === 'available' ? GREEN : TRANSPARENT;
  }
}
