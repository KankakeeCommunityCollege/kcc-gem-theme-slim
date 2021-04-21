import initSearchToggle from './searchToggleMegaNav.js';

const FOCUSABLE_GOOGLE_CUSTOM_SEARCH_SELECTORS_ARR = [
  '#gsc-i-id1',
  '#gs_st50 .gsst_a',
  '.gsc-search-button .gsc-search-button.gsc-search-button-v2'
];

function checkXIcon() {
  const icon = document.getElementById('xIcon');
  const xIsHidden = icon.getAttribute('style') === 'display: none;';
  xIsHidden ? removeClear() : clearXIcon();
}

function clearXIcon() {
  const targetEl = document.querySelector('button.gsc-search-button-v2');
  targetEl.classList.add('gsc-overrides__clear-x');
}

function removeClear() {
  const targetEl = document.querySelector('button.gsc-search-button-v2');
  targetEl.classList.remove('gsc-overrides__clear-x');
}

function addId() {
  const xIcon = document.querySelector('.gsst_a');
  xIcon.id = 'xIcon';
}

function addAttribute(selector, attr, val) {
  const el = document.querySelector(selector);

  el.setAttribute(attr, val);
}

function gcsInit() {  // Init The GCS JS
  var cx = '006320264078644364913:sy48bet-lr8';
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
}

function googleCustomSearchInit() {
  gcsInit();
  const targetNode = document.getElementById('searchCollapse');
  const config = { attributes: true, childList: true, subtree: true };
  const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
      if (mutation.type == 'childList') {
        addId();
        for (let i = 0, len = FOCUSABLE_GOOGLE_CUSTOM_SEARCH_SELECTORS_ARR.length; i < len; i++) {
          addAttribute(FOCUSABLE_GOOGLE_CUSTOM_SEARCH_SELECTORS_ARR[i], 'tabindex', '-1'); // Make Elements initially unfocusable, so that screen readers don't pick up the hidden GCS
        }
        checkXIcon();
        initSearchToggle();
      }
    }
  };
  const observer = new MutationObserver(callback);  // Using a MutationObserver to watch for changes in the Google Custom Search Elements that got built into the page from `gcsInit()`
  observer.observe(targetNode, config);
}

export default googleCustomSearchInit;
