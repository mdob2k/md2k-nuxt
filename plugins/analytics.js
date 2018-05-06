/* eslint-disable */

export default ({ app }) => {
  /*
  ** Only run on client-side and only in production mode
  */
  if (process.env.NODE_ENV !== 'production') return
  /*
  ** Include Analytics Script
  */
  // prettier-ignore
  window._paq = [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  // prettier-ignore
  ;(function() {
    var u="//piwik.md2k.de/";
    window._paq.push(['setTrackerUrl', u+'piwik.php']);
    window._paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
  })();

  /*
  ** Every time the route changes (fired on initialization too)
  */
  app.router.afterEach((to, from) => {
    /*
    ** Add a `pageview`
    */
    window._paq.push([
      'setDocumentTitle',
      document.domain + '/' + document.title
    ])
    window._paq.push(['setCookieDomain', '*.md2k.de'])
    window._paq.push(['setDomains', ['*.md2k.de', '*.md2k.de']])
    window._paq.push(['trackPageView'])
    window._paq.push(['enableLinkTracking'])
  })
}
