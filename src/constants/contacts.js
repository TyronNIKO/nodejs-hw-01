import path from 'node:path';
const pathToDB = {
  folder: 'src/db',
  file: 'db.json',
};
export const PATH_DB = path.resolve(pathToDB.folder, pathToDB.file);
