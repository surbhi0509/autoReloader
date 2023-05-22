console.log("this is background js");
var inter;
let isLoading = true;



chrome.runtime.onMessage.addListener(function (req, res) {
    console.log(req.message);
    if (isLoading) {
        if (req.message === "Reloading") {
            console.log("message for reload recieved");
            const interval = req.time;
            async function reloadPage() {
                try {
                    inter = setInterval(() => {
                    console.log("Started reload");
                    console.log(interval + "completed");
                    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                        var activeTab = tabs[0];
                        console.log(activeTab, "for activeTab")
                        // Reload the active tab
                            chrome.tabs.reload();
                        });
                    }, interval);
                } catch (err) {
                    console.log(err);
                }
            }
            reloadPage();
        }
        else if (req.messa === "stopping") {
            isLoading=false;
            clearInterval(inter);
        };
    };
})


// // background.js

// // Function to handle permission requests
// function handlePermissions(tabId) {
//     chrome.permissions.request({ permissions: ["tabs"], origins: ["<all_urls>"] }, (granted) => {
//       if (granted) {
//         reloadTab(tabId);
//       }
//     });
//   }
  
//   // Function to reload the tab
//   function reloadTab(tabId) {
//     chrome.tabs.reload(tabId);
//   }
  
//   // Listener for browser action click
//   chrome.browserAction.onClicked.addListener((tab) => {
//     handlePermissions(tab.id);
//   });
  