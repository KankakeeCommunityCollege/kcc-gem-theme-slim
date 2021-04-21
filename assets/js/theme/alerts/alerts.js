/*
// Custom JS | written by https://github.com/wdzajicek
// © 2020 Kankakee Community College
// =================================================== */
// See https://webpack.js.org/guides/code-splitting/ and https://webpack.js.org/guides/lazy-loading/ for info on
// Dynamic imports in Webpack 5
document.addEventListener('DOMContentLoaded', () => {
  import(/* webpackChunkName: 'checkForPrefersReducedMotion' */'./checkForPrefersReducedMotion')
  .then(({ default: checkForPrefersReducedMotion }) => {  // Webpack returns the module so the default function must be specified!
    checkForPrefersReducedMotion();
  }).then(() => {
    import(/* webpackChunkName: 'getCachedResponse' */ './getCachedResponse')
    .then(({ default: getCachedResponse }) => {
      return getCachedResponse;
    }).then(getCachedResponse => {
      import(/* webpackChunkName: 'campusAlertsSheetsAPI' */ './campusAlertsSheetsAPI')
      .then(({ default: start }) => {
        ! window.sessionStorage.getItem('Alert-Content') ? // Checks if our cached alert is already in sessionStorage
          gapi.load('client', start) // If not, build the alert from a new Google API response
        : getCachedResponse(); // Otherwise, build the alert from our cached response
      });
    })
  }).catch(err => {
    throw new Error(`ERROR!!! \n${err.message}`)
  });

  //checkForPrefersReducedMotion();

  // ! window.sessionStorage.getItem('Alert-Content') ? // Checks if our cached alert is already in sessionStorage
  //   gapi.load('client', start) // If not, build the alert from a new Google API response
  // : getCachedResponse(); // Otherwise, build the alert from our cached response
});
