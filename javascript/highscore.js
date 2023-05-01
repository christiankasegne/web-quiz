var list = document.getElementById(`list`);
var highScores = JSON.parse(localStorage.getItem(`highScores`)) || [];

list.innerHTML = highScores
.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
})
.join(``)
