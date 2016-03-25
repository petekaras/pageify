var cheerio = require('cheerio');

module.exports = {
  extract: function (htmlElement, attribute) {
  	$ = cheerio.load(htmlElement);
    return $('input').attr(attribute);
  }
};
