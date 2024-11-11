function freezePage(info) {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.discard(tabs[0].id, () => {});
  });
}

chrome.contextMenus.removeAll(function() {
	let contextMenuItem = { 
        id: 'freezeText', 
        title: 'Freeze page', 
        contexts: ['page'],
    }
    chrome.contextMenus.create(contextMenuItem)
    chrome.contextMenus.onClicked.addListener((info) => {
    freezePage(info) 
	}) 
 })

chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.discard(tab.id, () => {});
});