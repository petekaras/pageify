var assert = require('chai').assert;
var element = require('../src/element.js');

  describe('BElement parsing', function () {
   
    it('should extract id from an input element', function () {
		var source = '<input type="search" id="main-q" name="q" placeholder="Search" data-value="" value="" />';
		
		var result = element.extractSelector(source,'id'); 
		assert.equal(result,'#main-q');
    })
        it('should extract data-qa from an input element', function () {
		var source = '<input type="search" id="main-q" data-qa="searchString" name="q" placeholder="Search" data-value="" value="" />';
		var result = element.extractSelector(source,'data-qa'); 
		assert.equal(result,"[data-qa='searchString']");
    })
    it('should report an unsupported element', function () {
		var source = '<html type="search"/>';
		
		var result = element.extractSelector(source,'data-qa'); 
		assert.equal(result,'element <html type="search"/> is unsupported.');
    })
  });




