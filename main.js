// Define a variable for the user's name
let userName = "Rocco";

// Define a variable for the user's question
let userQuestion = "Test Question";

// Generate a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

// Variable to store the Magic Eight Ball's response
let eightBallRespones;

// Log the random number to the console for debugging
console.log(randomNumber);

// Greet the user by name if provided, otherwise just say "Hello!"
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

// Determine the Magic Eight Ball's response based on the random number
if (randomNumber === 0) {
  eightBallRespones = "It is certain";
} else if (randomNumber === 1) {
  eightBallRespones = "It is decidedly so";
} else if (randomNumber === 2) {
  eightBallRespones = "Reply hazy try again";
} else if (randomNumber === 3) {
  eightBallRespones = "Cannot predict now";
} else if (randomNumber === 4) {
  eightBallRespones = "Do not count on it";
} else if (randomNumber === 5) {
  eightBallRespones = "My sources say no";
} else if (randomNumber === 6) {
  eightBallRespones = "Outlook not so good";
} else {
  eightBallRespones = "Signs point to yes";
}

// Log the Magic Eight Ball's response, including the user's name if a question was asked
userQuestion
  ? console.log(`${userName}, ${eightBallRespones}`)
  : console.log("There is no Question, Please ask one.");

