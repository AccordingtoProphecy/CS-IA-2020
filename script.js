// TODO get questions from Ms. Hardy

// Questions is an array of objects, where each question object has a question, correct answer, array of wrong answers, and a tag
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

// COMMENTED OUT, DOESN't WORK, KEEPING JUST IN CASE
// Returns a randomized array
// const randomizeArray = question => {
//   // Random number between 0 and 3
//   let correctIndex = Math.floor(Math.random() * 3);
//   // Set random button value to the correct answer
//   document
//     .getElementById("answer" + correctIndex)
//     .setAttribute("value", question.correctAnswer);

//   // New arrays of wrong answers and then randomized array
//   let wrongAnswers = new Array();
//   let randomizedWrong = new Array();
//   wrongAnswers.push(question.wrongAnswers[0]);
//   wrongAnswers.push(question.wrongAnswers[1]);
//   wrongAnswers.push(question.wrongAnswers[2]);
//   // Random number between 0 and 2
//   let wrongArrayIndex1 = Math.floor(Math.random() * 2);
//   // Push element at index from above onto new array
//   randomizedWrong.push(wrongAnswers[wrongArrayIndex1]);
//   // Get rid of element at that index for the future
//   wrongAnswers.splice(wrongArrayIndex1, 1);
//   // Random number between 0 and 1
//   let wrongArrayIndex2 = Math.floor(Math.random());
//   // Push element at index from above onto new array
//   randomizedWrong.push(wrongAnswers[wrongArrayIndex2]);
//   // Get rid of element at that index for the future
//   wrongAnswers.splice(wrongArrayIndex2, 1);
//   // Push final element onto array
//   randomizedWrong.push(wrongAnswers[0]);
// };

// TODO Something might be fucky with randomizing answers
// Randomizes the answers for a question
const randomizeAnswers = question => {
  // Put both correct and wrong answers into a single array
  let answers = question.wrongAnswers;
  answers.push(question.correctAnswer);
  let currentIndex = answers.length;
  let temporaryValue;
  let randomIndex;

  // While there are remaining answers in the array
  while (currentIndex !== 0) {
    // Pick a remaining answer
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Swap values
    temporaryValue = answers[currentIndex];
    answers[currentIndex] = answers[randomIndex];
    answers[randomIndex] = temporaryValue;
  }

  return answers;
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

  // Randomize the answers
  let answers = randomizeAnswers(question);

  // Set text to answers
  answer1Label.innerHTML = answers[0];
  answer2Label.innerHTML = answers[1];
  answer3Label.innerHTML = answers[2];
  answer4Label.innerHTML = answers[3];

  // Set value of radio buttons to answers
  answer1.setAttribute("value", answers[0]);
  answer2.setAttribute("value", answers[1]);
  answer3.setAttribute("value", answers[2]);
  answer4.setAttribute("value", answers[3]);
};

// Gets a random index of questions array, then loads a question of that index
const loadRandomQuestion = () => {
  let randomIndex = Math.floor(Math.random() * questions.length);
  loadQuestion(questions[randomIndex]);
};

// Loads a question with a different tag, for CORRECT ANSWERS
const loadDifferentTag = currentQuestion => {
  // Get the current tag
  let currentTag = currentQuestion.tag;
  // Get a new array of all questions with a different tag
  let notThisTag = questions.filter(question => question.tag !== currentTag);
  // Find a new question with a different tag
  let randomIndex = Math.floor(Math.random() * notThisTag.length);
  loadQuestion(notThisTag[randomIndex]);
};

// Loads a question with the same tag, for INCORRECT ANSWERS
const loadSameTag = currentQuestion => {
  // Get the current tag
  let currentTag = currentQuestion.tag;
  // Get a new array of all questions with the same tag
  let thisTag = questions.filter(question => question.tag === currentTag);
  // Find a new question with the same tag
  let randomIndex = Math.floor(Math.random() * thisTag.length);
  loadQuestion(thisTag[randomIndex]);
};

// Checks if the answer is correct or not and chooses new question based on it
const submitAnswer = () => {
  // Gets checked radio button
  let checkedRadio = document.querySelector('input[name="answer"]:checked');
  // Checking if answer is wrong
  let wrongCount = 0;
  // Getting the current question
  let question = document.getElementById("question").innerHTML;
  let currentIndex = questions.findIndex(
    element => element.question === question
  );
  let currentQuestion = questions[currentIndex];

  // Checks if a radio button is actually checked
  if (checkedRadio !== null) {
    // If radio button is checked, then get the value
    let checkedRadioValue = document.querySelector(
      'input[name="answer"]:checked'
    ).value;

    // Compare each correct answer to the inputted answer
    questions.forEach(question => {
      if (checkedRadioValue === question.correctAnswer) {
        alert("cool");
        loadDifferentTag(currentQuestion);
      } else {
        wrongCount += 1;
      }
    });

    // If no correct answers match the input, alert user
    if (wrongCount === questions.length) {
      alert("not cool");
      loadSameTag(currentQuestion);
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
