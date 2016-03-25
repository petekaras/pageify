var assert = require('chai').assert;
var element = require('../src/element.js');

  describe('BElement parsing', function () {
   
    it('should return a nice function name based on ID', function () {
		var source = '<input type="search" id="main-q" data-qa="searchString" name="q" placeholder="Search" data-value="" value="" />';
		
		var result = element.extractFunctionName(source,'id'); 
		assert.equal(result,'main-qSearch');
    })    
        it('should return a nice function name based on name', function () {
		var source = '<input type="search" id="main-q" data-qa="searchString" name="main" placeholder="Search" data-value="" value="" />';
		
		var result = element.extractFunctionName(source,'name'); 
		assert.equal(result,'mainSearch');
    })
        it('should report an unsupported element', function () {
		var source = '<html type="search"/>';
		
		var result = element.extractFunctionName(source,'data-qa'); 
		assert.equal(result,'element <html type="search"/> is unsupported.');
    })  
  });




