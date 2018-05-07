/* _optimizely_evaluate=force */
var oldurl = window.location.href + “?officev=1";
window.location.replace(oldurl);
/* _optimizely_evaluate=safe */

// Add this to all 100% audience SA and APFM
// Duplicate Audience and add this in new 100% audience replace exp68 with proper exp number
!(window.SA || {}).exp68;

// If optimizely param in URL debug code
// This is good so you don’t forget to remove the debugger before launch.
if (/optimizely_x/.test(location.href)) {
        //debugger; // jshint ignore:line
}

Load function first 
/* _optimizely_evaluate=force */
$.exp78 = {
  addMessage: function(e) { 
    if (!$(e.target).is('div')) {
     $('#progress-message').text('Please Complete Form First');
  }
 }
};
/* _optimizely_evaluate=safe */
$('#send').click($.exp78.addMessage);

// Custom JS Targeting
//More than 5 reviews
(window.datalayer || {}).reviews > 5;

// Not Bing, gclid or conv params
!/bing|gclid|conv/i.test(location.search);

if (window.datalayer.pagetype == 'industries/city_show'){
}

// Target NSRF page
!!/No Search Results Found/i.test($('title').text());


 //Custom & Click Goals
 // custom goals
  $('body').delegate('li a.price_filter', 'click', function () {
    optimizely.push(['trackEvent', 'exp83-price-range-clicks']);
  });

window.optimizely = window.optimizely || [];
window.optimizely.push(["trackEvent", "exp85-modal-triggered"]);


// Triggers goal after element is loaded
$('.').click(function (e) { e.preventDefault(); $('.opt-wait-container').css('display', 'block');
window.optimizely.push(['trackEvent', 'exp79-get-access-clickers']); });

// Timed Activation
setTimeout(function() { 
	window.optimizely = window.optimizely || [];
	window.optimizely.push(["activate", 5822271204]);
 }, 15000);


// Getting Started Test
// Only remove content if the utm_source is assistedlivingfacilities.org
if(window.location.href.toLowerCase().indexOf("utm_source=assistedlivingfacilities.org") > -1) {

}




// SA QlickView with Opt

/* _optimizely_evaluate=force */
window.datalayer = window.datalayer || {};
window.datalayer.leadsource = 'exp99v1'; 
$(window).load(function () {
  window.pjsAddLocation();
});
/* _optimizely_evaluate=safe */


// Console commands
optimizely.data
window.SA for test
optimizely.activeExperiments
optimizely.variationNamesMap

// SeniorHelp QlickView
var crid = jQuery('input[name="CreativeId"]').val();
crid = crid + 'exp132v0';
console.log(crid);
jQuery('input[name="CreativeId"]').val(crid);


// Debug Specific Function
debug(optimizely.$.exp104.updateModal);


// Console all SEM MKWIDs links
mkwids = ['3lGjfSVJ',
'kxOuoVPH',
'p2oncnf6',
'zwZ2LW8i',
'Tt6uQi1V',
'9CGD3Mwe',
'cPAKrYwZ',
'fU9sNBvU',
'OA8PJGk0',
'M2H9Rus5',
'w6PdLIyH',
'C6l7kI1A',
'kpNat7q1',
'gqKJIGNi',
'dEVNlIgp',
'SRmX8bnj',
'ZH6b85wu',
'afvU0ID1',
'5uSK6Gl5',
'wg4aHghP',
'Y7giFMKg',
'PIhs08h5',
'RRN1YgnI',
'xFIYh3xb',
'pDQacs7v',
'7GWHHvTW',
'yVQMY97M',
'CKswEe8T'];

var url = 'http://list.aplaceformom.com/?optimizely_x7973920617=1&mkwid=';

for (var i = 0; i < mkwids.length; i++) {
	console.log(url+mkwids[i]);
};
