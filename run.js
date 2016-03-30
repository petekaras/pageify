var Handlebars = require('handlebars');
var element = require('./src/element.js');
var tmplData = require('./src/templateData.js');
var dataSource = require('./src/dataSource.js');
var templateSource = require('./src/templateSource.js');
var config = require('./config.json')

console.log('RUNNING.........');

var source = dataSource.getData(config.dataSource,config.strategy.selector);
var data = tmplData.initialise();

for (var i = 0; i < source.length; i++) {
	var functionName = element.extractFunctionName(source[i],config.strategy.functionName); 
	var selector = element.extractAttribute(source[i],config.strategy.selectorAttribute);
	data.elements.push(tmplData.makeItem(functionName,selector));
}


var tmplSource = templateSource.getTemplate(config.pageObjectType);
var template = Handlebars.compile(tmplSource);
var result = template(data)
console.log(result);
