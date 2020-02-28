// Redirect page to game page
const replayGame = () => {
    window.location.href = "index.html";
}

// Display final score, located in session storage, when page loads
window.addEventListener("DOMContentLoaded", event => {
    let score = sessionStorage.getItem("finalScore");
    let scoreDIV = document.getElementById("score");
    scoreDIV.innerHTML = "Final score: " + score;
});