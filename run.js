var Handlebars = require('handlebars');
var element = require('./src/element.js');
var tmplData = require('./src/templateData.js');
var dataSource = require('./src/dataSource.js');
var templateSource = require('./src/templateSource.js');
var config = require('./config.json')

console.log('RUNNING.........');

var source = dataSource.getData(config.dataSource,config.strategy.selector);
var functionName = element.extractFunctionName(source,config.strategy.functionName); 
var selector = element.extractAttribute(source,config.strategy.selectorAttribute);

//TODO: loop round an array of htmlelements
var data = tmplData.initialise();
data.elements.push(tmplData.makeItem(functionName,selector));


var tmplSource = templateSource.getTemplate(config.pageObjectType);
var template = Handlebars.compile(tmplSource);
var result = template(data)
console.log(result);
