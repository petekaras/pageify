var cheerio = require('cheerio');
var s = require("underscore.string");

module.exports = {
  extractSelector: function (htmlElement, attribute) {
  	$ = cheerio.load(htmlElement);
  	if($('input').length){
      var attributeValue = $('input').attr(attribute);
      if(attribute==='id'){
         return "#"+attributeValue; 
      }else{
        return "[" + attribute +"='" + attributeValue + "']";
      }
  		
  	}else{
    	return 'element ' + htmlElement + ' is unsupported.'
	}
	
  },
  extractFunctionName: function (htmlElement, namingAttribute) {
  	$ = cheerio.load(htmlElement);
  	if($('input').length){
  		var type = $('input').attr('type');
  		var name = $('input').attr(namingAttribute);
  		return name + s.capitalize(type);
  	}else{
    	return 'element ' + htmlElement + ' is unsupported.'	
  	}
	
  }
};
