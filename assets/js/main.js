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



// Analytics Events
analytics.ready(function() {

  // Twitter Follow
  twttr.ready(function (twttr) {
    twttr.events.bind('follow', function(intent_event) {
      analytics.track('Twitter: Follow');
    });
  });

  // Form Subscription
  analytics.trackForm($('#sidebar-subscribe-form'), 'Subscribed Blog Newsletter');

  // Shop Visit
  analytics.trackLink($('.site-header-buy a'),  'Clicked Link: Store');
  analytics.trackLink($('.link-rss'),           'Clicked Link: RSS');
  analytics.trackLink($('.link-twitter'),       'Clicked Link: Twitter');

});