// YouTube Pause Add-on
// The MIT License
// Copyright (c) 2015 Nishanth Shanmugham


;(function() {  
  var a = document.getElementsByTagName("body")[0]; 
  a.onkeydown = responder;
  console.log("ffsdsdf");
  function responder(event) {
    if (event.which == 32 && ((event.target == document.body) || (event.target.className && event.target.classList.contains("yt-uix-button")))) { // spacebar and not inside a textarea, for instance
      var states = { 1: "playing", 2: "paused" };
      var p = window.document.getElementById("movie_player");
      var s = p && p.getPlayerState && states[p.getPlayerState()];
      
      if (s && s === "playing") {
        p.pauseVideo();
      } else {
        p.playVideo();
      }
      
      // playerState is automatically updated by an event elsewhere

      event.preventDefault();
      return false;
    }
  }
})();

