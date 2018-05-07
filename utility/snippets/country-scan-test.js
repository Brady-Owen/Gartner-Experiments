window.jQuery.getScript('https://cdn3.optimizely.com/js/geo.js', function () {
	var country = window.optimizelyGeo.country;
	if (country == 'US'){
		console.log('in USA');
	}
	if (country == 'CA'){
		console.log('in Canada');
		return true;
	}
});


window.jQuery.getScript('https://cdn3.optimizely.com/js/geo.js'), window.optimizelyGeo.country == 'US';

window.jQuery.getScript('https://cdn3.optimizely.com/js/geo.js'), window.optimizelyGeo.country == 'CA';


function location() {
	window.jQuery.getScript('https://cdn3.optimizely.com/js/geo.js');
	if (window.optimizelyGeo.country == 'US') {
		return true;
	} else {
		return false;
	}
}
location();


(function () {
	window.jQuery.getScript('https://cdn3.optimizely.com/js/geo.js');
	if (window.optimizelyGeo.country == 'US') {
		return true;
	} else {
		return false;
	}
})();

