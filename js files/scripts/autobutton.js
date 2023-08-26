// Function to "click" the refresh button
//works for both gpt4 and 3 (continue)

function clickRefreshButton() {
    // Get all buttons
    var buttons = document.querySelectorAll('button');
  
    // Iterate over buttons
    for (var i = 0; i < buttons.length; i++) {
      // Check if 'Continue' is included in the button text and if it has class "refresh"
      if (buttons[i].innerText.includes("Continue")) {
        buttons[i].click();
        console.log("Continued Pressed")
        break;
      }
      if(buttons[i].classList.contains("btn-primary") && buttons[i].innerText.includes("Regenerate")){
        buttons[i].click();
        console.log("Error Pressed")
        break;
      }
    }
  }
  
  // Set up the Mutation Observer to call the function whenever the DOM changes
var observer = new MutationObserver(clickRefreshButton);
  
  // Start observing the entire document
observer.observe(document, { childList: true, subtree: true });