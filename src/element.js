var cheerio = require('cheerio');
var s = require("underscore.string");

module.exports = {
  extractAttribute: function (htmlElement, attribute) {
  	$ = cheerio.load(htmlElement);
  	if($('input').length){
  		return $('input').attr(attribute);
  	}else{
    	return 'element ' + htmlElement + ' is unsupported.'
	}
	
  },
  extractFunctionName: function (htmlElement, namingAttribute) {
  	$ = cheerio.load(htmlElement);
  	if($('input').length){
  		var type = $('input').attr('type');
  		var id = $('input').attr(namingAttribute);
  		return id + s.capitalize(type);
  	}else{
    	return 'element ' + htmlElement + ' is unsupported.'	
  	}
	
  }
};
