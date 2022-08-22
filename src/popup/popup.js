// Initialize button with user's preferred color
// let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", ({ color }) => {
//     changeColor.style.backgroundColor = color;
// });

// // When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         function: setPageBackgroundColor,
//     });
// });
  
// // The body of this function will be executed as a content script inside the
// // current page
// function setPageBackgroundColor() {
//     chrome.storage.sync.get("color", ({ color }) => {
//         document.body.style.backgroundColor = color;
//     });
// }

function initLaunchButton() {
  let launchButton = document.getElementById("launch");
  launchButton.addEventListener("click", handleLaunch);
}

function handleLaunch() {
    let url = "https://youtu.be/Ns7Z8ag4oSY";
  console.log("launching" + url);
  window.location.replace(url);
//   chrome.tabs.create({ url: "https://youtu.be/Ns7Z8ag4oSY" });
}

initLaunchButton();