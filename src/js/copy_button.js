// Get all the copy button divs
const copyButtons = document.querySelectorAll(".copy-button");

// Loop through each copy button div and add a click event listener
copyButtons.forEach((copyButton) => {
  // parameter event: MouseEvent
  copyButton.addEventListener("click", (event) => {
    // Creating balloon div and adding it to the document for animation of the copy button
    {
      const balloon = document.createElement("div");
      balloon.classList.add("balloon");

      // Add the balloon div to the copy button div
      document.body.appendChild(balloon);

      // Set the initial position of the balloon
      balloon.style.top = event.target.offsetTop + "px";
      balloon.style.left = event.target.offsetLeft + "px";

      balloon.textContent = "Copied!";

      const balloonRisingInterval = setInterval(() => {
        balloon.style.top = parseInt(balloon.style.top) - 0.5 + "px";
        balloon.style.filter =
          "opacity(" + parseInt(balloon.style.top) / 1000 + "%)";
      }, 1000 / 60);

      // Animate the balloon
      setTimeout(() => {
        balloon.remove();
      }, 5000);
    }
    // Copying the text to the clipboard
    {
        const nextPre = event.target.parentElement.nextElementSibling;

        if (nextPre) {
            let result_text = nextPre.innerText;

            if(event.target.getAttribute("language") === "bash"){
                if(result_text.startsWith("$")){
                    result_text = result_text.substring(1);
                }
            }

            navigator.clipboard.writeText(result_text).then(() => {
                console.log("Copied to clipboard successfully!");
            }, () => {
                console.log("Failed to copy to clipboard!");
            });
        }


    }
  });
});
