/* _optimizely_evaluate=force */
if (location.href.indexOf('exp') === -1) {
// redirect to same page with exp parameter
var _optly={redir:document.createElement("a")};
_optly.redir.href = window.location.href.split('?')[0];
_optly.cur=window.location.search;
if (_optly.cur) {_optly.redir.search = _optly.redir.search ? _optly.cur + "&" + _optly.redir.search.slice(1) : _optly.cur;}
window.location.replace(_optly.redir.href + "&exp=exp5v0");
}
/* _optimizely_evaluate=safe */

window.PAGE_LAYOUT_VARIATION = 'exp5v0';
setTimeout(function(){
	window.PAGE_LAYOUT_VARIATION = 'exp5v0';
},2000);

console.log('new');