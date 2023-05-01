var initials = document.getElementById(`initials`);
var submitBtn = document.getElementById(`submitBtn`);
var finalScore = document.getElementById(`final-score`);
const mostRecentScore = localStorage.getItem(`mostRecentScore`);

var highScores = JSON.parse(localStorage.getItem(`highScores`)) || [];

var MAX_HIGH_SCORES = 10;  

finalScore.innerText = mostRecentScore;

initials.addEventListener(`keyup`, () => {
  submitBtn.disabled = !initials.value;
});

list = e => {
  e.preventDefault();

  var score = {
    score: mostRecentScore,
    name: initials.value,
  };
  

  highScores.push(score);

  console.log(highScores)
  highScores.sort((a, b) => b.score - a.score)
  highScores.splice(10);
  
  localStorage.setItem(`highScores`, JSON.stringify(highScores))
  window.location.assign(`./highscore.html`);

 
};
