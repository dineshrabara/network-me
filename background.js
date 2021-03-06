chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ color: '#3aa757' }, function () {
        console.log("The color is green.new");
    });
});
chrome.devtools.network.onNavigated.addListener(function(){
    alert("DevTools window opening.");
});
var openCount = 0;
chrome.runtime.onConnect.addListener(function (port) {
    alert("DevTools window opening.");
    if (port.name == "devtools-page") {
        if (openCount == 0) {
            alert("DevTools window opening.");
        }
        openCount++;

        port.onDisconnect.addListener(function (port) {
            openCount--;
            if (openCount == 0) {
                alert("Last DevTools window closing.");
            }
        });
    }
});