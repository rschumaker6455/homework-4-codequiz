//Count down timer
var timeEl = document.querySelector(".time")
var secondsLeft = 45

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--
    timeEl.textContent = 'Time: ' + secondsLeft

    if(secondsLeft === 0) {
      clearInterval(timerInterval)
      sendMessage()
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "Times up!"
  window.location.href='end.html'
}



  

