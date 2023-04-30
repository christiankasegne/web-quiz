var list = document.getElementById(`list`);
var highScores = JSON.parse(localStorage.getItem(`highScores`)) || [];

highScores.map(score => {
    console.log(score);
})

