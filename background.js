document.addEventListener('DOMContentLoaded', function() {
  chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
      file: 'src/rulers.js'
    });
  });
});