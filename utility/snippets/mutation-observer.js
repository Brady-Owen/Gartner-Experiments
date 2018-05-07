// Configuration of the observer.  Not test specific.
var observerConfig = {
	attributes: true,
	childList: true,
	characterData: true,
	subtree: true
};

// Select the target node.  It may take trial and error to find the best target. It is simplest to then add an ID to it just for tracking it.
var observerTarget = document.getElementById('observe-react-changes');

// Observer function.  This can re-update test components after the oberved module changes.
// It may be necessary to make these same changes before the observer starts if Reacte has completed rendering before test changes are added.
var observer = new MutationObserver(function(mutations) {
    
    // Put test-specific code here
	if (!$('.Image-caption').hasClass('nearby-community')) {
		$('.Image-caption').addClass('nearby-community').append('<button class="nearby-pricing-cta">See Pricing</button>');
    }
    
});

// Start the observer
observer.observe(observerTarget, observerConfig);