const startBtn = document.querySelector("#startBtn");
const quiz_box = document.querySelector(".quiz_box");
let timerEl = document.getElementById('timer');

//Coundown timer. Does not reduce time if wrong choice yet.
function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
      }
    }, 1000);
  }
  
  countdown();

