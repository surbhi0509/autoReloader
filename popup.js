// const Start = document.getElementById("start");
// const Stop = document.getElementById("stop");


// Start.addEventListener("click", () => {
//     document.innerHTML("Stop");
//     const Duration = document.getElementById("duration");
//     const Value = Duration.value;
//     console.log("start working");
//     console.log(Value);
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         chrome.tabs.sendMessage(tabs[0].id, {
//             message: "startReload",
//         });
//     });

//     chrome.runtime.sendMessage({
//         message:"Reloading",
//         time: Value,
        
//     });

// });
// Stop.addEventListener("click",()=>{
//     console.log("stop working");
//     chrome.runtime.sendMessage({
//         messa: "stopping"
//     });
// });

const button = document.getElementById("toggle");

let isReloading = false;

button.addEventListener("click", () => {
  if (!isReloading) {
    startReloading();
  } else {
    stopReloading();
  }
});

function startReloading() {
  isReloading = true;
  button.textContent = "Stop";
  button.style.backgroundColor="rgb(198, 27, 27)";
  const duration = document.getElementById("duration").value;
  console.log("start working");
  console.log(duration);
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     chrome.tabs.sendMessage(tabs[0].id, {
//       message: "startReload",
//     });
//   });
  chrome.runtime.sendMessage({
    message: "Reloading",
    time: duration,
  });
}

function stopReloading() {
  isReloading = false;
  button.textContent = "Start";
  button.style.backgroundColor="rgb(104, 176, 104)";
  console.log("stop working");
  chrome.runtime.sendMessage({
    messa: "stopping",
  });
}



