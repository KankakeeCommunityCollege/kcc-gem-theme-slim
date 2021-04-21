document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementsByClassName('hero-slider__slider')) {
    import(/* webpackChunkName: 'sliders' */ './sliders').then(({ default: initSliders }) => {
      initSliders();
    }).then(() => {
      import(/* webpackChunkName: 'wrapPowerText' */ './wrapPowerText').then(({ default: wrapPowerText }) => {
        wrapPowerText();
      });
    }).then(() => {
      import( /* webpackChunkName: 'lazyLoad' */ './lazyLoad').then(({ default: lazyLoad }) => {
        lazyLoad();
      });
    }).then(() => {
      import(/* webpackChunkName: 'walkTex' */'./walkText').then(({ default: walkText }) => {
        walkText(document.body);
      });
    }).then(() => {
      import(/* webpackChunkName: 'footerDate' */'./footerDate').then(({ default: footerDate }) => {
        footerDate();
      });
    }).then(() => {
      import(/* webpackChunkName: 'addClassToOpenNavbar' */'./addClassToOpenNavbar').then(({ default: addClassToOpenNavbar }) => {
        addClassToOpenNavbar();
      });
    }).then(() => {
      if (document.getElementById('google_translate_element')) {
        import(/* webpackChunkName: 'translate' */'./translate').then(({ default: watchForMenuClicks }) => {
          watchForMenuClicks();
        });
      }
    });
  }
  //lazyLoad();
  //walkText(document.body);
  //footerDate();
  //watchForMenuClicks();
  //addClassToOpenNavbar();

  // polyfill for Element.closest() b/c IE can't handle an anchor.match() when the anchor has another element inside it (Like spans used for BS4 menu toggler)
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
      var el = this;

      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }
});
