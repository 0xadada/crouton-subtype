export type ScannedFile = {
  name: string;
  device: string;
  path: string;
  status: 'available' | 'scheduled';
};

export type ScannedFiles = Array<ScannedFile>;
