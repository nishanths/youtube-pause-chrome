// YouTube Pause Add-on
// The MIT License
// Copyright (c) 2015 Nishanth Shanmugham


;(function() {
  var a = document.getElementsByTagName("body")[0];
  a.onkeydown = responder;
  function responder(event) {
      // spacebar and not inside a the search or comments boxes
      spacebar = (event.which == 32);
      clsName = event.target.className;
      textBox = (clsName.indexOf("search-term") >= 0
                 || clsName.indexOf("simplebox-text") >= 0);
      var videoPlayerSelected = (clsName.indexOf("html5-video-player") >= 0);
      if (spacebar && !textBox && !videoPlayerSelected) {
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

