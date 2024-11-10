const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Any additional event listeners can go here if needed
    },
    // Reporter setup
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports', // Directory where the reports will be saved
      overwrite: true,              // Overwrite existing report files
      html: true,                   // Generate HTML report
      json: true                    // Generate JSON report (used for merging)
    }
  }
});
