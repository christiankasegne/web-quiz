var highScoresList = document.getElementById(`list`)
var highScores = JSON.parse(localStorage.getItem(`highScore`)) || [];


highScoresList.innerHTML = highScores
.map(score => {
    return `<li class="high-score">${score.initials}-${score.score}</li>`;
})
.join("");