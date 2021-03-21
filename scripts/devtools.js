//best doc here https://developer.chrome.com/docs/extensions/mv3/devtools/

chrome.devtools.network.onRequestFinished.addListener(
    function (request) {
        if ('xhr' === request._resourceType) {
            chrome.devtools.inspectedWindow.eval(
                'console.log("Network-Me: " , ' +
                JSON.stringify(request) + ')');
        }
    }
);

chrome.devtools.panels.create("Network-ME",
    "icons/16.png",
    "pages/panel.html"
);