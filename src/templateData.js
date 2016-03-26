/*
* prepeares a data object suitable for passing onto the handlebars template.
*/
module.exports = {
  initialise: function () {
      var object = new Object();
      object.elements = new Array();
      return object;
	
  },

  makeItem: function (functionName,selector) {
      var item = new Object();
      item.functionName = functionName;
      item.value = selector;
      return item;
  }
};