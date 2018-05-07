// This is the core function, added to SA August 2017

var thankYouModal = window.SA._components.ModalThankYou;
thankYouModal.init();

thankYouModal.beforeShow(function() {
  // make sure viewport is scrolled to top to prevent layout cutoff
  $("html, body").animate({ scrollTop: 0 });

  $('.servicelocator--tcpa').hide();

  // If tpst traffic, add tracking
  if(window.location.href.toLowerCase().indexOf('utm_source=tpst') !== -1 && window.location.href.toLowerCase().indexOf('service-locator') !== -1){
    $('body').prepend('<img src="http://click.clktraker.com/aff_l?offer_id=1503" width="1" height="1" />');
  }
});

// Redirect after user clicks the X
thankYouModal.beforeClose(function() {
  if(window.datalayer.cityPageUrl)
    window.location = window.datalayer.cityPageUrl;
  else 
    window.location = '/';
});

thankYouModal.show();

/*
From David Mann:
Here’s how we’re currently showing the Thank You modal. Depending on your needs you may not want all of that, at the very least you’ll need to call `.init()` and `.show()`

`beforeShow()` and `beforeClose()` are meant to be generic hooks, you can put anything in there (e.g. if you wanted a custom GTM event when they hit the close icon, you’d put it in beforeClose)

-------
Basic use:

window.SA._components.ModalThankYou.init();
window.SA._components.ModalThankYou.show();

*/