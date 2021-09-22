let timerDiv = document.getElementById('timer');

let startingMin = 5;
let time = startingMin * 60 ;

setInterval(createTimmer, 1000);

function createTimmer(){

  const  min = Math.floor(time / 60);
  let sec = time % 60;

  sec = sec < 10 ? '0'+ sec : sec;

  timerDiv.innerHTML = `${min} : ${sec}`;

  if (time > 0)
  {
    time--;
  }
  else {
    timerDiv.innerHTML = 'Boum';
    timerDiv.style.color = 'yellow';
    document.querySelector('body').style.backgroundColor = 'red';
  }

}