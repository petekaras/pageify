const fs = require('fs');

/*
* template source
*/
module.exports = {
  getTemplate: function (sourceType) {
    if(sourceType==="nightWatch"){
    return fs.readFileSync('./template/nightWatch.hbs').toString();
      //return '';
    }else{
      return 'template type unknown'
    }

 }
  
}