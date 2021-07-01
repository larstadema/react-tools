import fs from 'fs-extra';
import { paths } from '../constants';

export const cleanDistFolder = async () => {
  await fs.remove(paths.appDist);
};
