//import toggleMenuOnWindowResize from './toggleMenuOnWindowResize.js';
//import googleCustomSearchInit from './googleCustomSearch.js';
//import closeMenuOnClick from './closeMegaNavOnClick.js';
//import underlineCurrentSite from './underlineCurrentSite.js';

document.addEventListener('DOMContentLoaded', () => {
  import(/* webpackChunkName: 'googleCustomSearch' */ './googleCustomSearch')
    .then(({ default: googleCustomSearchInit }) => {
      googleCustomSearchInit();
    })
    .then(() => {
      import(/* webpackChunkName: 'underlineCurrentSite' */ './underlineCurrentSite').then(({ default: underlineCurrentSite }) => {
        underlineCurrentSite();
      });
    })
    .then(() => {
      import(/* webpackChunkName: 'closeMegaNavOnClick' */ './closeMegaNavOnClick').then(({ default: closeMenuOnClick }) => {
        closeMenuOnClick();
      });
    })
    .then(() => {
      import(/* webpackChunkName: 'toggleMenuOnWindowResize' */ './toggleMenuOnWindowResize').then(({ default: toggleMenuOnWindowResize }) => {
        toggleMenuOnWindowResize();
      });
    })
});