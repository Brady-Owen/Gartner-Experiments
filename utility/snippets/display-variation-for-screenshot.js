// Script for use in console
// Adds an element to a page for marking variation, for screenshots.
// Purpose is to reduce time to create test screenshots

var variation = 'v1';
var container = '<div class="variant-display-container"></div>';
$('body').append($(container));
$('.variant-display-container').html(variation);
var style = '<style>.variant-display-container{position:absolute;width:60px;height:60px;background-color:#fff;color:red;font-size:45px;top:0;left:0;z-index:9999;border:1px solid red;text-align:center;opacity:.9;padding-top: 15px;}</style>';
$('body').append(style);

// position: fixed version (works better on some pages)
var variation = 'v1';
var container = '<div class="variant-display-container"></div>';
$('body').append($(container));
$('.variant-display-container').html(variation);
var style = '<style>.variant-display-container{position:fixed;width:60px;height:60px;background-color:#fff;color:red;font-size:45px;top:0;left:0;z-index:9999;border:1px solid red;text-align:center;opacity:.9;}</style>';
$('body').append(style);


/* ADD THIS TO BOOKMARKS TO MAKE FUNCTION A BOOKMARKLET */
javascript:var variation = 'v1'; var container = '<div class="variant-display-container"></div>'; $('body').append($(container)); $('.variant-display-container').html(variation); var style = '<style>.variant-display-container{position:absolute;width:60px;height:60px;background-color:#fff;color:red;font-size:45px;top:0;left:0;z-index:9999;border:1px solid red;text-align:center;opacity:.9}</style>'; $('body').append(style);