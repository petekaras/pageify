var assert = require('chai').assert;
var Handlebars = require('handlebars');
var element = require('../src/element.js');
var tmplData = require('../src/templateData.js');

  describe('Basic handlebars', function () {
    it('should template a simple file', function () {
		 var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
		             "{{kids.length}} kids:</p>" +
		             "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
		var template = Handlebars.compile(source);
		var data = { "name": "Alan", "hometown": "Somewhere, TX",
		             "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
		var result = template(data);
		assert.equal(result,'<p>Hello, my name is Alan. I am from Somewhere, TX. I have 2 kids:</p><ul><li>Jimmy is 12</li><li>Sally is 4</li></ul>');
    });
    it('should write a single selector', function () {
		 var source = 'submitButton: function(){selector:"{{value}}"}';
		var template = Handlebars.compile(source);
		var data = { "value":"personal-info-submit-button"};
		var result = template(data);
		assert.equal(result,'submitButton: function(){selector:"personal-info-submit-button"}');
    });    
    it('should write two selectors', function () {
		var source = '{{#each elements}}{{this.functionName}}: function(){selector:"{{this.value}}"}{{#unless @last}},{{/unless}}{{/each}}';
		var template = Handlebars.compile(source);
		var data = { "elements":[{"functionName":"submitButton","value":"personal-info-submit-button"},{"functionName":"submitButton","value":"show-more-info-button"}]};
		var result = template(data);
		assert.equal(result,'submitButton: function(){selector:"personal-info-submit-button"},submitButton: function(){selector:"show-more-info-button"}');
    });
     it('should create data json', function () {
		var source = '<input type="search" id="main-q" data-qa="uid" name="q" placeholder="Search" data-value="" value="" />';
    	var functionName = element.extractFunctionName(source,'data-qa'); 
    	var selector = element.extractSelector(source,'id');

    	var object = tmplData.initialise();
    	object.elements.push(tmplData.makeItem(functionName,selector));
   		assert.equal(JSON.stringify(object),'{"elements":[{"functionName":"uidSearch","value":"#main-q"}]}');
    })   

    it('should work', function () {
		var source = '{{#each elements}}{{this.functionName}}: function(){selector:"{{this.value}}"}{{#unless @last}},{{/unless}}{{/each}}';
		var template = Handlebars.compile(source);
		var data = {"elements":[{"functionName":"main-qSearch","value":"searchString"}]};
		var result = template(data);
		assert.equal(result,'main-qSearch: function(){selector:"searchString"}');
    });
  });




