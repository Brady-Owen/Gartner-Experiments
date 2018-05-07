/* _optimizely_evaluate=force */

/* _optimizely_evaluate=safe */

$('body').addClass('exp6');
$('#already_use_option_yes').text('Yes');
$('#already_use_option_no').text('No');

// BTF changes
$('#featured_module').addClass('medium-12').removeClass('medium-6');
$('.callouts-row-2 .medium-6').addClass('medium-12').removeClass('medium-6');

$('.button.submit_button').text('Unlock Pricing & Options');

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
  $('input#company').attr('placeholder', 'Company Name');
  $('input#email').attr('placeholder', 'Your email address');
  $('input#phone').attr('placeholder', 'Your Phone Number');
  
  // lead form changes
  $('#step-5 .medium-4.columns ').addClass('medium-6').removeClass('medium-4');
  $('#step-5 .medium-8.columns ').addClass('medium-6').removeClass('medium-8').prepend('<p class="form-label">Please send results to:</p>');
  //$('#step-5 .large-12.text-center img').attr('src', 'https://cdn.optimizely.com/img/96847758/d6e3cf12337e441ea6e2e81e6b525a72.jpg');
  
  $('#step-5 .large-12.text-center img').after('<div class=new-cta-left><p class=form-label>Results<div class="card card-one"><span>1</span><div class=logo></div><div class=details><img id=imgOne src=//cdn.optimizely.com/img/96847758/755a794908be4c73a87455530795406e.jpg></div></div><div class="card card-two"><span>2</span><div class=logo></div><div class=details><img id=imgTwo src=//cdn.optimizely.com/img/96847758/724c6ef25cc4440692a4ad75e0d9cb0a.jpg></div></div><div class="card card-three"><span>3</span><div class=logo></div><div class=details><img id=imgThree src=//cdn.optimizely.com/img/96847758/92262a728b354527a5940c1f9fb3ea39.jpg></div></div><div class="card card-four"><span>4</span><div class=logo></div><div class=details><img id=imgFour src=//cdn.optimizely.com/img/96847758/f25b6831eb3c43819abca02d4274a4f5.jpg></div></div><div class="card card-five"><span>5</span><div class=logo></div><div class=details><img id=imgFive src=//cdn.optimizely.com/img/96847758/65383aacf96048f4bf25939e4e2adca8.jpg></div></div></div>');

  var logoOne = $('#logos li:first-of-type img').detach();
  var logoTwo = $('#logos li:nth-of-type(2) img').detach();
  var logoThree = $('#logos li:nth-of-type(3) img').detach();
  var logoFour = $('#logos li:nth-of-type(4) img').detach();
  var logoFive = $('#logos li:nth-of-type(5) img').detach();

  $('.card-one .logo').html(logoOne);
  $('.card-two .logo').html(logoTwo);
  $('.card-three .logo').html(logoThree);
  $('.card-four .logo').html(logoFour);
  $('.card-five .logo').html(logoFive);
  
  $('#step-4 h3').append(' (optional)');
  
  $('.large-10 p.scale.text-center').css('display', 'none');
  var skipButton = $('.blue--light.underline.button-data-layer-push').detach();
  $('#next_step_4').after(skipButton);
  //var skipButtonTwo = $('.blue--light.underline.button-data-layer-push').clone().addClass('button radius secondary trackable').text('Next and Final Step!');
  //$('#next_step_4').before(skipButtonTwo);
}, 700);

$("#next_step_4, #skip_step_4, #step-5 .large-12.text-center img, .new-cta-left").click(function() {
  setTimeout(function(){
    $('input#first_name').focus();
  },400);
});

$(document).ready(function() { 
$('#next_step_3').click(function(){
  setTimeout(function(){
    if ($('#step-4').is(':visible')) {
      $('#step-4').hide();
      $('#step-5').show();
      $('#step-5 h3').text('5 software systems match your requirements!');
    }
  },50);
});
});

window.PAGE_LAYOUT_VARIATION = 'exp7v1';   
setTimeout(function(){
  window.PAGE_LAYOUT_VARIATION = 'exp7v1';
},500);

