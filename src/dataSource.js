/*
* data source
*/
module.exports = {
  getData: function (sourceType,Selector) {
    if(sourceType==="mock"){
      return '<input type="search" id="main-q" data-qa="searchString" name="q" placeholder="Search" data-value="" value="" />'
    }else{
      return 'data source unknown'
    }

 }
  
};
