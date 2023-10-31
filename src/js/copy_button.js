// Get all the copy button divs
const copyButtons = document.querySelectorAll('.copy-button');

// Loop through each copy button div and add a click event listener
copyButtons.forEach(copyButton => {
    // parameter event: MouseEvent
    copyButton.addEventListener('click', (event) => {

        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        
        // Add the balloon div to the copy button div
        copyButton.appendChild(balloon);
        
        // Set the initial position of the balloon
        balloon.style.top = event.target.offsetTop + 'px';
        balloon.style.left = event.target.offsetLeft + 'px';

        balloon.textContent = 'Copied!';

        const balloonRisingInterval = setInterval(() => {
            balloon.style.top = (parseInt(balloon.style.top) - 0.5) + 'px';
            balloon.style.filter = 'opacity(' + (parseInt(balloon.style.top) / 1000) + '%)';
        }, 1000 / 60);
        
        // Animate the balloon
        setTimeout(() => {
            balloon.remove();
        }, 100000);
    });
});
