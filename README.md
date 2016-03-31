# pageify
QA helper by generatig page objects

##Configuration
| property  			| values 		|Comment|
| --------------------- | ------------- |-------------|
| datasource  			| mock or webdriver.io  	|the type of data source, this should refer to a implementation that returns an array of elements that will form the basis of the Page Object|
|pageObjectType| nightwatch | the type of page object that will be output|
|**strategy**||the strategy to create the page object|
|selector|css selector|the selector that returns an array of elements that form the basis of the Page Object. this will usually be all elements that the user would interact with by clicking on, filling in or reading|
|functionName|any attribute|The attribute that the function name will be named after. for example `id='submit'` for a button input will return `submitButton()`| 
