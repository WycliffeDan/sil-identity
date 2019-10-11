const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.test') });
require('../support/server');

const Browser = require('zombie');
const PORT = 3000;

Browser.localhost('example.com', PORT);

describe('landing page', () => {

  let browser, document;
  beforeEach(done => {
    browser = new Browser({ waitDuration: '30s', loadCss: false });

    // Wait for React to execute and render
    browser.on('loading', (doc) => {
      document = doc;
      document.addEventListener("DOMContentLoaded", (event) => {
        done();
      });
    });

    browser.visit('/', (err) => {
      if (err) return done.fail(err);
    });
  });

  describe('unauthenticated', () => {
    it('renders the expected components', () => {
      browser.assert.element('button#home', 'SIL Identity');
      browser.assert.element('button#login', 'Login');
    });
  });
});
