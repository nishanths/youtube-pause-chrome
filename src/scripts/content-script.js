// YouTube Pause Add-on
// This content script inlines the actual script to work around Chrome's sandboxing of content scripts
// From this SO answer: http://stackoverflow.com/a/9517879/3309046
// The MIT License
// Copyright (c) 2015 Nishanth Shanmugham

;(function(){
	var s = document.createElement('script');
	s.src = chrome.extension.getURL('src/scripts/youtube-pause-extension.js');
	s.onload = function() { this.parentNode.removeChild(this); };
	(document.head||document.documentElement).appendChild(s);
})();