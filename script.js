let questions = new Array();

questions.push({
  question: "How old are you?",
  correctAnswer: "17",
  wrongAnswers: ["10", "45", "100"],
  tag: "age"
});

questions.push({
  question: "What is your first name?",
  correctAnswer: "Orion",
  wrongAnswers: ["James", "Sam", "Max"],
  tag: "name"
});

questions.push({
  question: "What is your last name?",
  correctAnswer: "Capell",
  wrongAnswers: ["McCreery", "Morita-McVey", "Means"],
  tag: "name"
});

questions.push({
  question: "What is your favorite food?",
  correctAnswer: "Sushi",
  wrongAnswers: ["Brussel Sprouts", "Mushrooms", "Steak"],
  tag: "food"
});

questions.push({
  question: "What is your favorite drink?",
  correctAnswer: "Coke",
  wrongAnswers: ["Milk", "Sprite", "Pepsi"],
  tag: "food"
});

// TODO follow dad's structure on Hangouts, comprehend it, ONE STEP AT A TIME:

// first you pick a random number between 1 and 4
// thats the spot for your correct answer
// your incorrect answers are in an array of size 3
// copy those into a new array
// then pick a random number between 1 and 3
// take that one out of the array and put into a new array
// then pick a random number between 1 and 2
// and grab that one and put it in the new array
// then put the last one in your new array
// now you have a new array with the 3 wrong answers in a random order
// then youcan just pull them off the array in the order they happen to be in and put them in the remaining answer slots

// Returns a randomized array
const randomizeArray = question => {
  // Random number between 0 and 3
  let correctIndex = Math.floor(Math.random() * 3);
  // Set random button value to the correct answer
  document
    .getElementById("answer" + correctIndex)
    .setAttribute("value", question.correctAnswer);

  // New arrays of wrong answers and then randomized array
  let wrongAnswers = new Array();
  let randomizedWrong = new Array();
  wrongAnswers.push(question.wrongAnswers[0]);
  wrongAnswers.push(question.wrongAnswers[1]);
  wrongAnswers.push(question.wrongAnswers[2]);
  // Random number between 0 and 2
  let wrongArrayIndex1 = Math.floor(Math.random() * 2);
  // Push element at index from above onto new array
  randomizedWrong.push(wrongAnswers[wrongArrayIndex1]);
  // Get rid of element at that index for the future
  wrongAnswers.splice(wrongArrayIndex1, 1);
  // Random number between 0 and 1
  let wrongArrayIndex2 = Math.floor(Math.random());
  // Push element at index from above onto new array
  randomizedWrong.push(wrongAnswers[wrongArrayIndex2]);
  // Get rid of element at that index for the future
  wrongAnswers.splice(wrongArrayIndex2, 1);
  // Push final element onto array
  randomizedWrong.push(wrongAnswers[0]);
};

// Sets answers
const loadQuestion = question => {
  // Get question
  let activeQuestion = document.getElementById("question");

  // Get labels
  let answer1Label = document.getElementById("answer1Label");
  let answer2Label = document.getElementById("answer2Label");
  let answer3Label = document.getElementById("answer3Label");
  let answer4Label = document.getElementById("answer4Label");

  // Get radio buttons
  let answer1 = document.getElementById("answer1");
  let answer2 = document.getElementById("answer2");
  let answer3 = document.getElementById("answer3");
  let answer4 = document.getElementById("answer4");

  // Set question
  activeQuestion.innerHTML = question.question;

  // Set text to answers
  answer1Label.innerHTML = question.correctAnswer;
  answer2Label.innerHTML = question.wrongAnswers[0];
  answer3Label.innerHTML = question.wrongAnswers[1];
  answer4Label.innerHTML = question.wrongAnswers[2];

  // Set value of radio buttons to answers
  answer1.setAttribute("value", question.correctAnswer);
  answer2.setAttribute("value", question.wrongAnswers[0]);
  answer3.setAttribute("value", question.wrongAnswers[1]);
  answer4.setAttribute("value", question.wrongAnswers[2]);
};

// Gets a random index of questions array, then loads a question of that index
const loadRandomQuestion = () => {
  let randomIndex = Math.floor(Math.random() * questions.length);
  loadQuestion(questions[randomIndex]);
};

// Loads a question with a different tag
const loadDifferentTag = tag => {
  let notThisTag = questions.filter(tag => question.tag !== tag);
  let randomIndex = Math.floor(Math.random() * notThisTag.length);
  loadQuestion(notThisTag[randomIndex]);
};

// Loads a question with the same tag
const loadSameTag = tag => {
  let thisTag = questions.filter(tag => question.tag === tag);
  let randomIndex = Math.floor(Math.random() * thisTag.length);
  loadQuestion(thisTag[randomIndex]);
};

// Checks if the answer is correct or not and chooses new question based on it
const submitAnswer = () => {
  // Gets checked radio button
  let checkedRadio = document.querySelector('input[name="answer"]:checked');
  let correctAnswer = document.getElementById("answer1").getAttribute("value");

  // Checks if a radio button is actually checked
  if (checkedRadio !== null) {
    // If radio button is checked, then get the value
    let checkedRadioValue = document.querySelector(
      'input[name="answer"]:checked'
    ).value;
    // Compares button value to the correct answer
    if (checkedRadioValue === correctAnswer) {
      alert("You got it right!");
      loadRandomQuestion();
    } else {
      alert("You got it wrong!");
      loadRandomQuestion();
    }
    // If no button is checked, tells user to choose an answer
  } else {
    alert("Choose an answer to submit!");
  }
};

// Loads a random question when the page loads
window.addEventListener("DOMContentLoaded", event => {
  loadRandomQuestion();
});