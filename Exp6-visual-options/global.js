//* _optimizely_evaluate=force */

var $document = $(document);

function bindClick(selector, goal) {
  $document.delegate(selector, 'mousedown', function() {
    optimizely.push(['trackEvent', goal]);
  });
}

bindClick('#already_use_option_yes', 'Yes-clicks');

bindClick('#already_use_option_no', 'No-clicks');

bindClick('.button-field a', 'Company-size-buttons-clicks');

bindClick('#next_step_3', 'Next-three-clicks');

bindClick('#next_step_4', 'Next-four-clicks');

bindClick('#skip_step_4', 'Skip-four-clicks');

bindClick('.no-bullet.no-margin.checklist-column li input', 'Feature-checkbox-clicks');

bindClick('.button.secondary.submit_button', 'Submit-clicks');

bindClick('.white.small-only-text-center small a', 'Phone-button-clicks');

(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments);};
        h._hjSettings={hjid:125288,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
