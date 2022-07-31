var startBtn = document.querySelector("#startBtn");
var question = document.querySelector(".question");
var options = document.querySelector(".options");
var timerEl = document.getElementById('timer');


startBtn.onclick = ()=>{
    countdown();
    showQuetions();
}



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
  
function showQuetions() {
    var question = document.querySelector(".question");
  
}   