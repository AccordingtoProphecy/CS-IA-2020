// import {
//   questions
// } from "./questions.js";

/*
  HALT! This code is pretty shitty, so maybe don't use it?
  Use the other one, it is better.
*/

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

// TODO put these things inside functions to get questions. Also find out how to actually submit answers with buttons, etc.
window.addEventListener("DOMContentLoaded", () => {
  // Shortcuts for question and answer divs in HTML page
  let question = document.getElementById("question");
  let answerOne = document.getElementById("answerOne");
  let answerTwo = document.getElementById("answerTwo");
  let answerThree = document.getElementById("answerThree");
  let answerFour = document.getElementById("answerFour");
  let submitButton = document.getElementById("submitAnswer");
  // Ugly, I know. Don't worry
  let userAnswer;

  // Gives first question by creating radio buttons within the divs so they are block oriented.
  // Name field makes them connected so you can only choose one.
  const initializeQuestion = () => {
    let i = Math.floor(Math.random() * questions.length);
    question.innerHTML = questions[i].question;
    answerOne.innerHTML =
      '<input id="buttonOne" name="answer" type="radio" value="' +
      questions[i].correctAnswer +
      '"/>' +
      questions[i].correctAnswer;
    answerTwo.innerHTML =
      '<input id="buttonTwo" name="answer" type="radio" value="' +
      questions[i].wrongAnswers[0] +
      '"/>' +
      questions[i].wrongAnswers[0];
    answerThree.innerHTML =
      '<input id="buttonThree" name="answer" type="radio" value="' +
      questions[i].wrongAnswers[1] +
      '">' +
      questions[i].wrongAnswers[1];
    answerFour.innerHTML =
      '<input id="buttonFour" name="answer" type="radio" value="' +
      questions[i].wrongAnswers[2] +
      '">' +
      questions[i].wrongAnswers[2];
  };

  // Sets a variable to the user's input
  const chooseAnswer = answer => {
    userAnswer = answer.getAttribute("value");
    return userAnswer;
  };

  // Temporarily alerts the user on the answer they pick, for testing purposes
  const submitAnswer = () => {
    alert(userAnswer);
  };

  initializeQuestion();

  let buttonOne = document.getElementById("buttonOne");
  let buttonTwo = document.getElementById("buttonTwo");
  let buttonThree = document.getElementById("buttonThree");
  let buttonFour = document.getElementById("buttonFour");

  buttonOne.addEventListener(
    "click",
    (userAnswer = buttonOne.getAttribute("value"))
  );
  buttonTwo.addEventListener(
    "click",
    (userAnswer = buttonTwo.getAttribute("value"))
  );
  buttonThree.addEventListener(
    "click",
    (userAnswer = buttonThree.getAttribute("value"))
  );
  buttonFour.addEventListener(
    "click",
    (userAnswer = buttonFour.getAttribute("value"))
  );
  submitButton.addEventListener("click", submitAnswer);
});