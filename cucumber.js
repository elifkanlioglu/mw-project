const common = [
  'features/**/*.feature',
  '--require-module ts-node/register',
  '--require src/step-definitions/*.ts',
  '--format @cucumber/pretty-formatter',
  '--format json:reports/cucumber-report.json', // Cucumber JSON report
].join(' ');

module.exports = {
  default: common,
};
