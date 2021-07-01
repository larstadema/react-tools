import { resolveApp } from './utils';

export const paths = {
  appPackageJson: resolveApp('package.json'),
  tsconfigJson: resolveApp('tsconfig.json'),
  appRoot: resolveApp('.'),
  appSrc: resolveApp('src'),
  appDist: resolveApp('dist'),
};
