const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      windowSize: '1200x900',
      waitForNavigation: ["domcontentloaded", "networkidle0"],
      waitForAction: 10000,
    }
  },
  include: {
    I: './steps_file.js',
    loginObjectPage: './pages/login_object.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Autopay',
  plugins: {
    // pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    // tryTo: {
    //   enabled: true
    // },
    screenshotOnFail: {
      enabled: true
    }
  }
}