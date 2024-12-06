// HTML ==> JavaScript
const timer = document.getElementById("timer");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
// Starting Pointa
let timerInterval;
let time_Seconds = 0;                                  // seconds
let isRunning = false;                                  // default
// Function to format time
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600).toString().padStart(2 , "0");
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2 , "0");
    const secondss = (seconds % 60).toString().padStart(2 , "0");
    return `${hours}:${minutes}:${secondss}`;
}
// Function to update timer
function updateTimerDisplay() {
    timer.textContent = formatTime(time_Seconds);
}
// Start the timer
startButton.addEventListener("click", () => {
    if (!isRunning) {
        isRunning = true;                                   // If false ==> then true
        timerInterval = setInterval(() => {
            time_Seconds++;
            updateTimerDisplay();
        }, 1000);
    }
});
// Pause the timer
pauseButton.addEventListener("click", () => {
    isRunning = false;                                      // Stop
    clearInterval(timerInterval);
});
// Reset the timer
resetButton.addEventListener("click", () => {
    isRunning = false;                                      // Stop
    clearInterval(timerInterval);                           // Clear time
    time_Seconds = 0;
    updateTimerDisplay();
});
// Initialize display
updateTimerDisplay();