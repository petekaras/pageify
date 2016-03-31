# pageify
QA helper by generatig page objects

##Configuration
###Basic properties
| property  			| values 		|Comment|
| --------------------- | ------------- |-------------|
| datasource  			| mock or webdriver.io  	|the type of data source, this should refer to a implementation that returns an array of elements that will form the basis of the Page Object|
|pageObjectType| nightwatch | the type of page object that will be output|

###Strategy
The strategy with which to create the page object
| property  			| values 		|Comment|
| --------------------- | ------------- |-------------|
|selector|css selector|the selector that returns an array of elements that form the basis of the Page Object. this will usually be all elements that the user would interact with by clicking on, filling in or reading|
|functionName|any attribute|The attribute that the function name will be named after. for example `id='submit'` for a button input will return `submitButton()`| 
|selectorAttribute|attribute|The attribute which will for the basis of the css selector. usually `id` but can be any attricbute, even custom attributes like `qa-data`|
