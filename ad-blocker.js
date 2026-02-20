window.addEventListener('load', function() {
  const iframe = document.getElementById('ggflix-frame');
  const iframeWindow = iframe.contentWindow;
  
  // Function to block unwanted ads inside the iframe
  function blockAds() {
    // Common ad-related elements that need to be blocked
    const adSelectors = [
      'iframe[src*="ads"]',       // Block iframes containing ads
      'iframe[src*="advert"]',    // Block iframes with "advert" in URL
      'div[class*="ad"]',         // Block divs with "ad" in class
      'div[id*="ad"]',            // Block divs with "ad" in ID
      'div[id*="popup"]',         // Block popups
      '.ad-banner',               // Block elements with this class
      '.overlay',                 // Block overlays
      '.ads-container',           // Block any ad containers
      '[src*="googleads"]',       // Block Google ad elements
      '[src*="advertisement"]',   // Block ads with "advertisement"
    ];

    // Loop over each selector and remove or hide matching elements
    adSelectors.forEach(selector => {
      const elements = iframeWindow.document.querySelectorAll(selector);
      elements.forEach(element => {
        element.remove(); // Strictly remove ad elements
      });
    });
    
    // Block popup ads by intercepting popups and preventing them
    iframeWindow.addEventListener('beforeunload', function() {
      iframeWindow.location.reload();
    });

    // Block any dynamically loaded ad elements every 1 second
    setInterval(function() {
      adSelectors.forEach(selector => {
        const elements = iframeWindow.document.querySelectorAll(selector);
        elements.forEach(element => {
          element.remove(); // Remove any new ad that might be injected
        });
      });
    }, 1000); // Run every second to catch dynamically injected ads
  }

  // Run the blockAds function once the iframe content is loaded
  iframe.onload = function() {
    blockAds();
  };
});
