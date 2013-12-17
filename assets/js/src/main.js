// Init fitVids
$('.blog-post-body').fitVids();

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