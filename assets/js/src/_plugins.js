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