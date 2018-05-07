// Troubleshooting a var or object
// Use this either in console or in the code

////////////////
// Returns a string of the object type
var toType = function(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

// Your object goes here, this is just an example
var Object = $('div#reviews .review').css('display') == 'block';

// Display
var whatTypeIsObject = toType(Object);
console.log('Object value: '+Object);
console.log('Type: '+whatTypeIsObject);


////////////////
// Console command to get .data() from a object:
JSON.stringify($('#w_51544').data('nextPageQsParams'), null, 4)
