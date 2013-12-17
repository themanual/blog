// Checks whether a DOM click event should open a link in a new tab.
// https://github.com/segmentio/is-meta
function isMeta (e) {
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return true;

  // Logic that handles checks for the middle mouse button, based
  // on [jQuery](https://github.com/jquery/jquery/blob/master/src/event.js#L466).
  var which = e.which, button = e.button;
  if (!which && button !== undefined) {
    return (!button & 1) && (!button & 2) && (button & 4);
  } else if (which === 2) {
    return true;
  }

  return false;
}

$.fn.eventLink = function(category, action) {
  return this.each(function() {
    $(this).click(function(ev) {
      var el = this;
      // only act if triggered by user and analytics loaded
      if (ev.originalEvent && ga.create && el.href && el.target !== '_blank') {
        ev.preventDefault();
        ga('send', 'event', {
          'eventCategory':  category,
          'eventAction':    action,
          'hitCallback':    function() { window.location.href = el.href; }
        });
      }
    });
  });
};

$.fn.socialLink = function(network, action, target) {
  return this.each(function() {
    $(this).click(function(ev) {
      var el = this;
      // only act if triggered by user and analytics loaded
      if (ev.originalEvent && ga.create && el.href && el.target !== '_blank') {
        ev.preventDefault();
        ga('send', 'social', {
          'socialNetwork':  network,
          'socialAction':   action,
          'socialTarget':   target,
          'hitCallback':    function() { window.location.href = el.href; }
        });
      }
    });
  });
};



// Init fitVids
$('.blog-post-body').fitVids();



// Init GA
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-46481984-1', 'auto');
ga('send', 'pageview');



// Init Twitter
window.twttr = (function (d,s,id) {
  var t, js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
  js.src="https://platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
  return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f); } });
}(document, "script", "twitter-wjs"));


// Track twitter follows
twttr.ready(function (twttr) {
  twttr.events.bind('follow', function(intent_event) {
    ga('send', 'social', 'Twitter', 'Follow', '@themanual');
  });
});

// Track newsletter subscriptions
$('#sidebar-subscribe-form').submit(function() {
  ga('send', 'event', 'Newsletter - Blog', 'Subscribe');
});

// Track other interactions
$('.site-header-buy a').eventLink('Store', 'Visit');
$('.link-rss').eventLink('RSS', 'Subscribe');
$('.link-twitter').socialLink('Twitter', 'Visit Profile', '@themanual');