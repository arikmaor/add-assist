chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({
    minPercentage: 100,
    maxPercentage: 150,
  });
});

chrome.action.onClicked.addListener(async () => {
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  ['splitting.min.js', 'contentScript.js'].forEach((file) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: [file],
    });
  });
})
