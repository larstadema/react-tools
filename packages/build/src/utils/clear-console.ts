// Copied from: https://github.com/facebook/create-react-app/blob/master/packages/react-dev-utils/clearConsole.js
export const clearConsole = () =>
  process.stdout.write(process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H');
