// Redirect page to game page
const replayGame = () => {
  window.location.href = "index.html";
};

// Display final score, located in session storage, when page loads
window.addEventListener("DOMContentLoaded", event => {
  // Grab final score from storage
  let score = sessionStorage.getItem("finalScore");
  // Display score
  let scoreDIV = document.getElementById("score");
  scoreDIV.innerHTML = "Final score: " + score;
});
