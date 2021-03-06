const IntlRelativeFormat = require('intl-relativeformat');
const IntlMessageFormat = require('intl-messageformat');

const MESSAGES = {};
const es = require('./es');
const en = require('./en-US');

MESSAGES.es = es;
MESSAGES['en-US'] = en;

let locale = localStorage.locale || 'es';

module.exports = {
  message: function (text, opts) {
    opts = opts || {};
    const msg = new IntlMessageFormat(MESSAGES[locale][text], 'es', null);
    return msg.format(opts);
  }
}
