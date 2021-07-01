// Resolve symlinks based on: https://github.com/facebookincubator/create-react-app/issues/637
import fs from 'fs-extra';
import path from 'path';

export const appDirectory = fs.realpathSync(process.cwd());

export const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath);
