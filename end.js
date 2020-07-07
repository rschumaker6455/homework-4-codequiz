var username = document.getElementById('username')
var saveScoreBtn = document.getElementById('saveScoreBtn')
var countRightAnswers = JSON.parse(localStorage.getItem('countRightAnswers'))
var finalScore = document.getElementById('finalscore')

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
    
    localStorage.setItem('highScores', JSON.stringify(highScores))
}