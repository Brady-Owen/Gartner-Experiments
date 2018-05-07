// This can be used to rapidly iterate CSS without needing to wait for Optimizely to save the CSS file
// Once development of the CSS snippet is complete, it can be merged into the main CSS file using this tool:
// http://www.cssportal.com/css-optimize/

var cssTransport = (function () {/*
	<style>
		.exp217-step-one {
			height: 100px;
			width: 100%;
			background: #faeaed;
		}
	</style>
	*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

$('body').append(cssTransport);