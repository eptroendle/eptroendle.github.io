// ga.js
(function () {
  // Your Google Analytics Tracking ID
  var trackingId = 'G-77STZSMHK8'; // Replace with your tracking ID

  // Create a script element to load gtag.js
  var gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + trackingId;
  
  // Insert the script element before the first script on the page
  var firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(gaScript, firstScript);

  // Callback function once gtag.js is loaded
  gaScript.onload = function () {
    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', trackingId);
  };
})();
