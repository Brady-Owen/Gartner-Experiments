/* _optimizely_evaluate=force */
var isEditor = false;
/* _optimizely_evaluate=editor_only */
isEditor = true;
/* _optimizely_evaluate=end_editor_only */
if (!isEditor) {
  
		if (location.pathname.indexOf('/solutions-call') === -1) {
    var _optly = {
      redir: document.createElement("a")
    };  
    
    var url = window.location.pathname;
    var pathToAppend = url.replace('/price-quotes', '/solutions-call');
    
    // stop 404 based on only if single path just go to /price-quotes
    if ((pathToAppend.match(/\//g) || []).length === 1) {
      pathToAppend = '';
    }
    
    _optly.redir.href = "https://www.softwareadvice.com" + pathToAppend;
    _optly.cur = window.location.search;

    if (_optly.cur) {
      _optly.redir.search = _optly.redir.search ? _optly.cur + "&" + _optly.redir.search.slice(1) : _optly.cur;
    }
    window.location.replace(_optly.redir.href + "&exp=exp5v1");
  }
  
}
//www.softwareadvice.com/crm/price-quotes/?optimizely_x10597530536=1

/* _optimizely_evaluate=safe */

window.PAGE_LAYOUT_VARIATION = 'exp5v1';
setTimeout(function(){
	window.PAGE_LAYOUT_VARIATION = 'exp5v1';
},2000);