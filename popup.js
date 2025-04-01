document.getElementById("start").addEventListener("click", async () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: () => { window.reportingActive = true; }
        });
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ["content.js"]
        });
    });
});

document.getElementById("stop").addEventListener("click", async () => {
    chrome.storage.local.set({ reportingActive: false }, () => {
        console.log("Reporting stopped.");
    });
});