var Handlebars = require('handlebars');
var element = require('./src/element.js');
var tmplData = require('./src/templateData.js');

console.log('RUNNING.........');

var source = '<input type="search" id="main-q" data-qa="searchString" name="q" placeholder="Search" data-value="" value="" />';
var functionName = element.extractFunctionName(source,'id'); 
var selector = element.extractAttribute(source,'data-qa');

//TODO: loop round an array of htmlelements
var data = tmplData.initialise();
data.elements.push(tmplData.makeItem(functionName,selector));
console.log("::::::::",data);

var source = '{{#each elements}}{{this.functionName}}: function(){selector:"{{this.value}}"}{{#unless @last}},{{/unless}}{{/each}}';
var template = Handlebars.compile(source);
var result = template(data)
console.log(">>>>>>",result);
