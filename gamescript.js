// Initialize score for the player
let score = 0;
// Initialize current question index
let currentQuestionIndex = 0;
// Total number of questions to answer
let numberOfQuestions = 4;
// Questions is an array of objects, where each question object has a question, correct answer, array of wrong answers, and a tag
let questions = new Array();

// TODO use window.sessionStorage with currentQuestionIndex and numberOfQuestion
// Make sure the score and question index are stored in the current session
// sessionStorage.setItem("score", score);
// sessionStorage.setItem("currentQuestionIndex", currentQuestionIndex);

//#region Questions
//#region Government and the state
// Government and the state
questions.push({
    question: "Because the United States is a sovereign state, it",
    correctAnswer: "can determine its own form of government.",
    wrongAnswers: [
        "is made up of fifty smaller sovereign states.",
        "is subordinate to a higher international authority.",
        "can impose its will on all other nations of the world."
    ],
    tag: "Government and the state"
});

questions.push({
    question: "Which theory of the origin of the state most strongly influenced the formation of the government of the United States?",
    correctAnswer: "Social contract theory",
    wrongAnswers: ["Evolutionary theory", "Divine right theory", "Force theory"],
    tag: "Government and the state"
});

questions.push({
    question: "What are the 4 defining characteristics of a state?",
    correctAnswer: "Population, territory, sovereignty, and government",
    wrongAnswers: [
        "The force theory, the evolutionary theory, the divine right theory, and the social contract theory.",
        "Liberty, justice, laws, and a constitution.",
        "A leader, a legislature, a court system, and a military force."
    ],
    tag: "Government and the state"
});

questions.push({
    question: "In a _______, there is an absolute ruler who is not held responsible to the will of the people.",
    correctAnswer: "dictatorship",
    wrongAnswers: ["consitutional monarchy", "democracy", "government"],
    tag: "Government and the state"
});
//#endregion

//#region The Constitution
// The Constitution
questions.push({
    question: "A governmental action found to violate some provision in the Constitution is said to be",
    correctAnswer: "unconstitutional.",
    wrongAnswers: ["partisan.", "anti-federalist.", "impeachable."],
    tag: "The Constitution"
});

questions.push({
    question: "The principle of 'popular sovereignty' states that all political power resides in the",
    correctAnswer: "people.",
    wrongAnswers: ["federal government.", "Constitution.", "rule of law."],
    tag: "The Constitution"
});

questions.push({
    question: "The three branches of government are tied together by a system of _______, whereby each branch is subject to constitutional restraints by the other branches.",
    correctAnswer: "checks and balances",
    wrongAnswers: [
        "judicial review",
        "constitutionalism",
        "separation of powers"
    ],
    tag: "The Constitution"
});

questions.push({
    question: "Which of the following is NOT one of the six basic principles of the Constitution?",
    correctAnswer: "Unlimited government",
    wrongAnswers: ["Checks and balances", "Federalism", "Separation of powers"],
    tag: "The Constitution"
});

questions.push({
    question: "Which 2 principles of the Constitution are illustrated by the formal amendment process?",
    correctAnswer: "(1) Federalism and (2) popular sovereignty",
    wrongAnswers: [
        "(1) Separation of powers and (2) checks and balances",
        "(1) Judicial review and (2) federalism",
        "(1) Popular sovereignty and (2) limited government"
    ],
    tag: "The Constitution"
});

questions.push({
    question: "An amendment may be proposed by a _______ vote in each house of Congress and be ratified by _______ of the State legislatures.",
    correctAnswer: "2/3; 3/4",
    wrongAnswers: ["2/3; a majority", "marjority; 3/4", "unanimous; a majority"],
    tag: "The Constitution"
});
//#endregion

//#region Federalism
// Federalism
questions.push({
    question: "Which was NOT a concern of the Framers about limited government?",
    correctAnswer: "A strong central government helps ensure personal freedom.",
    wrongAnswers: [
        "Exercise of governmental power must be restrained.",
        "Dividing governmental power among different groups limits it.",
        "Governmental power poses a threat to individual liberty."
    ],
    tag: "Federalism"
});

questions.push({
    question: "What powers given to the National Government are spelled out in the Constitution?",
    correctAnswer: "Expressed powers",
    wrongAnswers: ["Implied powers", "Inherent powers", "Division of powers"],
    tag: "Federalism"
});

questions.push({
    question: "Federalism is a system of government in which a written constitution does what?",
    correctAnswer: "Divides the powers of government between a national government and several regional governemtns.",
    wrongAnswers: [
        "Divides the powers of government between three distinct branches: executive, legislative, and judicial.",
        "Divides the powers of government between church and state.",
        "Divides the powers of government on a territorial basis among several states and provinces."
    ],
    tag: "Federalism"
});
//#endregion
//#endregion

// Dictionary for correct answers, not sure if I'll use due to efficiency and rewriting code
let correctAnswers = {
    correct1: questions[0].correctAnswer,
    correct2: questions[1].correctAnswer,
    correct3: questions[2].correctAnswer,
    correct4: questions[3].correctAnswer,
    correct5: questions[4].correctAnswer,
    correct6: questions[5].correctAnswer,
    correct7: questions[6].correctAnswer,
    correct8: questions[7].correctAnswer,
    correct9: questions[8].correctAnswer,
    correct10: questions[9].correctAnswer,
    correct11: questions[10].correctAnswer,
    correct12: questions[11].correctAnswer,
    correct13: questions[12].correctAnswer
};

//#region Commented out randomizer
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
//#endregion

//#region Randomize answers
// Randomizes the answers for a question
const randomizeAnswers = question => {
    // Put both correct and wrong answers into a single array
    let answers = question.wrongAnswers;
    answers.push(question.correctAnswer);
    let currentIndex = answers.length;
    let temporaryValue = null;
    let randomIndex = null;

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
//#endregion

//#region Load question
// Sets answers
const loadQuestion = question => {
    // Randomize the answers
    let answers = randomizeAnswers(question);

    // Get score
    let scoreDIV = document.getElementById("score");

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

    // Get index
    let indexDIV = document.getElementById("index");

    // Display current index
    indexDIV.innerHTML = "Question #" + (currentQuestionIndex + 1);

    // Set question
    activeQuestion.innerHTML = question.question;

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

    // Display score
    scoreDIV.innerHTML = "Score: " + score;
};
//#endregion

//#region Load random question
// Gets a random index of questions array, then loads a question of that index
const loadRandomQuestion = () => {
    let randomIndex = Math.floor(Math.random() * questions.length);
    loadQuestion(questions[randomIndex]);
};
//#endregion

//#region Load different tag
// Loads a question with a different tag, for CORRECT ANSWERS
const loadDifferentTag = currentQuestion => {
    // Get the current tag
    let currentTag = currentQuestion.tag;
    // Get a new array of all questions with a different tag
    let notThisTag = questions.filter(question => question.tag !== currentTag);
    notThisTag.splice(notThisTag.indexOf(currentQuestion), 1);
    // Find a new question with a different tag
    let randomIndex = Math.floor(Math.random() * notThisTag.length);
    loadQuestion(notThisTag[randomIndex]);
};
//#endregion

//#region Load same tag
// Loads a question with the same tag, for INCORRECT ANSWERS
const loadSameTag = currentQuestion => {
    // Get the current tag
    let currentTag = currentQuestion.tag;
    // Get a new array of all questions with the same tag
    let thisTag = questions.filter(question => question.tag === currentTag);
    thisTag.splice(thisTag.indexOf(currentQuestion), 1);
    // Find a new question with the same tag
    let randomIndex = Math.floor(Math.random() * thisTag.length);
    loadQuestion(thisTag[randomIndex]);
};
//#endregion

//#region Submit answer
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
        let checkedRadioValue = checkedRadio.value;

        // Compare each correct answer to the inputted answer and increase score
        questions.forEach(question => {
            if (checkedRadioValue === question.correctAnswer) {
                alert("Correct!");
                score += 50;
                // Check if user has answered enough questions for one game
                if (currentQuestionIndex !== numberOfQuestions) {
                    currentQuestionIndex += 1;
                    loadDifferentTag(currentQuestion);
                } else {
                    // If user is done, store score and redirect to final page
                    alert("Quiz complete");
                    sessionStorage.setItem("finalScore", score);
                    window.location.href = "finalpage.html";
                }
            } else {
                wrongCount += 1;
            }
        });

        // If no correct answers match the input, alert user
        if (wrongCount === questions.length) {
            alert("Not correct.");
            // Check if user has answered enough questions for one game
            if (currentQuestionIndex !== numberOfQuestions) {
                currentQuestionIndex += 1;
                loadSameTag(currentQuestion);
            } else {
                // If user is done, store score and redirect to final page
                alert("Quiz complete");
                sessionStorage.setItem("finalScore", score);
                window.location.href = "finalpage.html";
            }
        }
        // If no button is checked, tells user to choose an answer
    } else {
        alert("Choose an answer to submit!");
    }
    sessionStorage.setItem("score", score);
    sessionStorage.setItem("currentQuestionIndex", currentQuestionIndex);
};
//#endregion

// Loads a random question when the page loads
window.addEventListener("DOMContentLoaded", event => {
    loadRandomQuestion();
});