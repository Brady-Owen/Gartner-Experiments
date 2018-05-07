// Will return params from the URL
// Returns 'null' if that param has no value

var _ = $.croUtility = {
	getParameterByName : function(name, url){
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
};

var foo = $.croUtility.getParameterByName('headline');

console.log(foo);