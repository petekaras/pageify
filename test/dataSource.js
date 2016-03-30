var assert = require('chai').assert;
var dataSource = require('../src/dataSource.js');

  describe('Datasource creation', function () {
   
    it('should read first item in array of elements', function () {
      var source = dataSource.getData('mock','tbc');
   		assert.equal(source[0],"<input type='search' id='main-q' data-qa='searchString' name='q' placeholder='Search' data-value='' value='' />");
    })
    it('should read second item in array of elements', function () {
      var source = dataSource.getData('mock','tbc');
      assert.equal(source[1],"<input type='something' id='main-q' data-qa='searchString' name='q' placeholder='Search' data-value='' value='' />");
    })

  });