var initials = document.getElementById(`initials`);
var submit = document.getElementById(`submit`);
var finalscore = document.getElementById(`final-score`);
const mostRecentScore = localStorage.getItem(`mostRecentScore`);

var highScores = JSON.parse(localStorage.getItem(`highScores`)) || [];

var MAX_HIGH_SCORES = 10;
finalscore.innerText = mostRecentScore;

initials.addEventListener(`keyup`, () => {
  submit.disabled = !initials.value;
});

saveHighScore = (e) => {
  e.preventDefault();
  console.log('click the submit button');

  var score = {
    score: mostRecentScore,
    name: initials.value,
  };

  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(10);
  
   localStorage.setItem(`highScores`, JSON.stringify(highScores))
   return window.location.assign(`../html/highscore.html`);

   
};
