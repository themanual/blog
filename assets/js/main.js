/* global jQuery */
/* global analytics */

(function($) {
  $('.blog-post-body').fitVids();
})(jQuery);

// Analytics Init
analytics.initialize({
  'Google Analytics': {
    trackingId: 'UA-46481984-1'
  }
});

// Twitter Init
window.twttr = (function (d,s,id) {
  var t, js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
  js.src="https://platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
  return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
}(document, "script", "twitter-wjs"));


