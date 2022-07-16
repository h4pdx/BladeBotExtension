function constructInput() {
  let input = document.getElementById("keyword")

  chrome.storage.sync.get("keywords", function(result) {
    if (result.keywords) {
      input.value = result.keywords;
    }
  });

  constructButton();
}

function constructButton() {
  let button = document.getElementById("button");
  button.addEventListener("click", handleInput);
}

function handleInput() {
  let keyword = document.getElementById("keyword").value;
  let keywords = keyword.split(",");

  chrome.storage.sync.set({ keywords: keywords });
  
  showSuccess();
  console.log('Keywords set to ' + keywords);
}

function showSuccess() {
  let success = document.getElementById("success");
  let successMsg = document.createElement("p");

  successMsg.setAttribute("class", "alert alert-success");
  successMsg.textContent = "Keywords saved!";
  success.appendChild(successMsg);

  setTimeout(() => {
    success.removeChild(successMsg);
  }, 4000);
}

constructInput();
