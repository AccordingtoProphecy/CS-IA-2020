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

// TODO follow dad's structure on Hangouts, comprehend it, ONE STEP AT A TIME
// Returns a randomized array
const randomizeArray = question => {
  let wrongAnswers = new Array();
  let correctIndex = Math.floor(Math.random() * 3 + 1);
  let wrongArrayIndex = Math.floor(Math.random() * 2 + 1);

  document
    .getElementById("answer" + correctIndex)
    .setAttribute("value", question.correctAnswer);
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
