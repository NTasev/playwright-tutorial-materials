// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright config file
 * Defines 3 named projects: chromium, firefox, and webkit
 */
export default defineConfig({
  testDir: './tests',
  timeout: 10 * 1000,
  expect: {

    timeout: 2000

  },

  /* Automatically open HTML report after test run */
  reporter: [['html', { open: 'always' }]],

  use: {
    //video: 'on',
    //launchOptions: {
    //  slowMo: 1000
    //},
    
    actionTimeout: 0,
    trace: 'on-first-retry',
  },

  /* Define the projects */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

});
