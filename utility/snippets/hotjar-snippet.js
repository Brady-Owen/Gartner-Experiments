/* _optimizely_evaluate=force */
(function(h,o,t,j,a,r){
	h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments);};
	h._hjSettings={hjid:77130,hjsv:5};
	a=o.getElementsByTagName('head')[0];
	r=o.createElement('script');r.async=1;
	r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
	a.appendChild(r);
})(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
/*_optimizely_evaluate=safe*/





// Tag a recording (recordings have to be running already to tag them)
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('tagRecording', [‘Exp# did this!’]);



// This is for use in Optimizely tests
// This is modified from the version on Hotjar, which omits the trailing semicolon
// after .push(arguments);
