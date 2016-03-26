var assert = require('chai').assert;
var tmplData = require('../src/templateData.js');

  describe('TemplateData creation', function () {
   
    it('should create a single data item', function () {
		var object = tmplData.initialise();
    	object.elements.push(tmplData.makeItem('uidSearch','main-q'));
   		assert.equal(JSON.stringify(object),'{"elements":[{"functionName":"uidSearch","value":"main-q"}]}');
    })

    it('should create a single data item', function () {
		var object = tmplData.initialise();
    	object.elements.push(tmplData.makeItem('uidSearch','main-q'));
    	object.elements.push(tmplData.makeItem('another','xxxx'));
   		assert.equal(JSON.stringify(object),'{"elements":[{"functionName":"uidSearch","value":"main-q"},{"functionName":"another","value":"xxxx"}]}');
    })

  });