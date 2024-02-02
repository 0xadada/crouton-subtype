import Component from '@glimmer/component';
import titleize from 'titleize';
import type { ScannedFile } from 'crouton-subtype/lib/data.json.d';

export interface FileStatusSignature {
  Args: {
    file: ScannedFile;
  };
}

export default class FileStatus extends Component<FileStatusSignature> {
  get status() {
    return titleize(this.args.file.status);
  }
}
