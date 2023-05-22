console.log(" hello");

// chrome.runtime.onMessage.addListener(function (req) {
//   console.log(req);
//   if (req.message === "startReload") {
//     console.log("message for reload recieved");
//     const interval = req.time;
//     async function reloadPage() {
//       try {
//         console.log("Started reload");
//         setInterval(() => {
//           console.log(interval + "completed");
//           location.reload();
//         }, interval);
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     reloadPage();
//   }
// });
// localStorage.setItem("value", true);


// chrome.runtime.onMessage.addListener(function (req) {
//         if (req.message === "Reloading") {
//                 let value_data = localStorage.getItem("value");
//                 if (value_data==true) {
//                         let req_value = req.value;
//                         setInterval(() => {
//                                 location.reload()
//                         }, req_value);     
//                 }
               
                
//         }

//         else if (req.messa === "stopping") {

//                 let val_data = localStorage.getItem("value")
        
//                 if (val_data==false) {
//                         window.stop();
//                 }
                
//                 localStorage.setItem("value", false)
//         }
// })

// chrome.runtime.onMessage.addListener(function(req){
//         if (req.message11 ==="stoploading") {
//                 window.stop();  
//         }
// })