/* _optimizely_evaluate=force */
if (location.href.indexOf('exp') === -1) {
// redirect to same page with exp parameter
var _optly={redir:document.createElement("a")};
_optly.redir.href= window.href;
_optly.cur=window.location.search;
if (_optly.cur) {_optly.redir.search=_optly.redir.search ? _optly.cur + "&" + _optly.redir.search.slice(1) : _optly.cur;}
window.location.replace(_optly.redir.href + "&exp=exp4v0");
}
/* _optimizely_evaluate=safe */
window.PAGE_LAYOUT_VARIATION = 'exp4v0';
setTimeout(function(){
  window.PAGE_LAYOUT_VARIATION = 'exp4v0';
},2000);

console.log('aaa');