// Array of predefined Magic 8-Ball responses
const responses = [
    "Yes, definitely!",
    "It is certain.",
    "Without a doubt.",
    "You may rely on it.",
    "Most likely.",
    "Outlook good.",
    "Yes!",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
    "No way!"
];

// Function to handle the user asking the question
// Function to handle the user asking the question
function askQuestion() {
    const question = document.getElementById("question").value;
    const answerElement = document.getElementById("answer");
    const magicSound = document.getElementById("magicSound");
    const magicBall = document.getElementById("magicBall");
    const ballText = document.getElementById("ballText");

    // If the user doesn't type anything, show an alert
    if (question.trim() === "") {
        alert("Please ask a question!");
        return;
    }

    // Play the magic sound effect (audio path should be correct in HTML)
    magicSound.play();

    // Add the rotating animation to the Magic 8-Ball
    magicBall.classList.add("rotating");

    // Randomly select an answer from the array
    const randomIndex = Math.floor(Math.random() * responses.length);
    const answer = responses[randomIndex];

    // After rotation is complete, display the answer
    setTimeout(() => {
        magicBall.classList.remove("rotating");
        ballText.textContent = "8";  // Reset ball text
        answerElement.textContent = `Magic 8-Ball says: ${answer}`;
        answerElement.style.display = "block"; // Show the answer
    }, 1000);  // Wait for the animation to finish (1 second)

    // Hide the answer after 5 seconds
    setTimeout(() => {
        answerElement.style.display = "none";
    }, 5000);  // Hide after 5 seconds
}


// Reset the page for another question
function resetPage() {
    document.getElementById("question").value = "";
    const answerElement = document.getElementById("answer");
    const magicBall = document.getElementById("magicBall");

    answerElement.style.display = "none"; // Hide the answer again
    magicBall.classList.remove("rotating"); // Remove the rotation
}
