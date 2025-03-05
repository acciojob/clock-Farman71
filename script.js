// Function to update the timer every second
function updateTimer() {
    let timerElement = document.getElementById("timer");

    if (!timerElement) {
        // Create the timer element if it doesn't exist
        timerElement = document.createElement("p");
        timerElement.id = "timer";
        document.body.appendChild(timerElement);
    }

    // Get current date and time
    const now = new Date();
    const formattedTime = now.toLocaleString(); // Formats date and time

    // Update the content of the timer element
    timerElement.innerText = formattedTime;
}

// Call updateTimer every second
setInterval(updateTimer, 1000);

// Call once to immediately display time without waiting for 1 second
updateTimer();
