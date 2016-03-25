var assert = require('chai').assert;
var Handlebars = require('handlebars');
var element = require('../src/element.js');

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
		var source = '{{#each attributes}}submitButton: function(){selector:"{{this.value}}"}{{#unless @last}},{{/unless}}{{/each}}';
		var template = Handlebars.compile(source);
		var data = { attributes:[{"value":"personal-info-submit-button"},{"value":"show-more-info-button"}]};
		var result = template(data);
		assert.equal(result,'submitButton: function(){selector:"personal-info-submit-button"},submitButton: function(){selector:"show-more-info-button"}');
    });
    it('extract id from element', function () {
		var source = '<input type="search" id="main-q" name="q" placeholder="Search" data-value="" value="" />';
		
		var result = element.extract(source,'id'); 
		assert.equal(result,'main-q');
    })
  });




