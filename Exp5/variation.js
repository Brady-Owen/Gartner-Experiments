/* _optimizely_evaluate=force */

/* _optimizely_evaluate=safe */

$('body').addClass('exp1');
$('#already_use_option_yes').text('Yes');
$('#already_use_option_no').text('No');

// make sure it only grabs the first
var stepOneHeadline = $('h3.text-center.blue').first().detach();
$('.category__filter__header.category__filter__header--blue h2').html(stepOneHeadline);

setTimeout(function(){
    $('#step-1 .category__filter__header').after('<div class="row"><div class="prog-indicator"><div class="prog-color one">Step 1 of 5</div></div></div>');
    $('#step-2 .category__filter__header').after('<div class="row"><div class="prog-indicator"><div class="prog-color two">Step 2 of 5</div></div></div>');
    $('#step-3 .category__filter__header').after('<div class="row"><div class="prog-indicator"><div class="prog-color three">Step 3 of 5</div></div></div>');
  $('#step-4 .category__filter__header').after('<div class="row"><div class="prog-indicator"><div class="prog-color four">Step 4 of 5</div></div></div>');
  
  // add actual placeholders
  $('input#first_name').attr('placeholder', 'First Name');
  $('input#last_name').attr('placeholder', 'Last Name');
  $('input#company').attr('placeholder', 'Your Organization\' Name');
  $('input#email').attr('placeholder', 'Your email address');
  $('input#phone').attr('placeholder', 'Your Phone Number');
  
  $('.large-10 p.scale.text-center').css('display', 'none');
  var skipButton = $('.blue--light.underline.button-data-layer-push').detach();
  $('#next_step_4').after(skipButton);
  //var skipButtonTwo = $('.blue--light.underline.button-data-layer-push').clone().addClass('button radius secondary trackable').text('Next and Final Step!');
  //$('#next_step_4').before(skipButtonTwo);
}, 700);

$("#next_step_4, #skip_step_4").click(function() {
  setTimeout(function(){
    $('input#first_name').focus();
  },400);
});


window.PAGE_LAYOUT_VARIATION = 'exp1v1';   
console.log('windows');

