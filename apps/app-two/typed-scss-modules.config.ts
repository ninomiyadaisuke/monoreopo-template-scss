export const config = {
  implementation: 'sass',
  nameFormat: 'dashes',
  exportType: 'default',
  includePaths: ['../../packages/common/styles'],
  additionalData: `@use '../../packages/common/styles/variables.scss' as *;`,
  ignore: ['**/variables.scss', '**/variables/**'],
};
