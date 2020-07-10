//Count Scores

var username = document.getElementById('username')
var saveScoreBtn = document.getElementById('saveScoreBtn')
var finalScore = document.getElementById('finalscore')
var countRightAnswers = JSON.parse(localStorage.getItem('countRightAnswers'))

var highScores = JSON.parse(localStorage.getItem('highScores')) || []
console.log(highScores)

finalScore.innerText = countRightAnswers

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    var score = {
        score: countRightAnswers,
        name: username.value
    }
    
    highScores.push(score)
    console.log(highScores)

    var scoreDisplay = Object.values(score)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    localStorage.setItem('score', JSON.stringify(score))
    document.getElementById('highScoresList').innerHTML = scoreDisplay
}

//High Scores

var clearHighScore = document.getElementById('clearScoreBtn')
var highScoresList = document.getElementById('highScoresList')
var highScores = JSON.parse(localStorage.getItem('highScores')) || []

clearHighScore = e => {
    e.preventDefault()
    window.localStorage.clear(highScores)
    document.getElementById('highScoresList').textContent = '' 
}

highScoresList.innerHTML = highScores
    .map(score => {
    return `<li class="high-score">${score.name}-${score.score}</li>`
})
.join("")

