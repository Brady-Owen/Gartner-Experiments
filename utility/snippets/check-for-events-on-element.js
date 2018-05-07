// Works in console or in a test
// This can help evaluate if there are events bound to an element
// Change the selector of 'var el = ' below to the element you want to check

var el = $('.button-active.sf-button-step-1-1');
var events = $._data( $(el)[0] ).events;
if (typeof events != 'undefined') {
	console.log(events);
} else {
	console.log('undefined');
}