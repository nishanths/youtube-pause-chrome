// YouTube Pause Add-on
// The MIT License
// Copyright (c) 2015 Nishanth Shanmugham


;(function() {
  var a = document.getElementsByTagName("body")[0];
  a.onkeydown = responder;
  function responder(event) {
      // spacebar and not inside a the search or comments boxes
      if (event.which == 32 && !((event.target.className.indexOf("search-term") !== -1) || (event.target.className.indexOf("yt-simplebox-text") !== -1))) {
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

