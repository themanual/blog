/* global jQuery */
/* global analytics */

(function($) {
  $('.blog-post-body').fitVids();
})(jQuery);

// GA
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-46481984-1', 'auto');
ga('send', 'pageview');

// Twitter Init
window.twttr = (function (d,s,id) {
  var t, js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
  js.src="https://platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
  return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
}(document, "script", "twitter-wjs"));



// Analytics Events

// Twitter Follow
twttr.ready(function (twttr) {
  twttr.events.bind('follow', function(intent_event) {
    ga('send', 'social', 'twitter', 'follow');
  });
});

// Form Subscription
$('#sidebar-subscribe-form').submit(function() {
  ga('send', 'event', 'blog newsletter', 'subscribed');
});

// Shop Visit
// $('.site-header-buy a').click(function() { });
// $('.link-rss').click(function() { });
// $('.link-twitter').click(function() {});