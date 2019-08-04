//Declare DOM Elements
var tags = document.getElementsByClassName('icon');
var modal = document.getElementsByClassName('modal')
var titleField = document.getElementsByClassName('modal-title')
var content = document.getElementsByClassName('modal-content')
var closeBtn = document.getElementsByClassName('close-btn');
var counts = document.getElementsByClassName('counts-content')
//Add Evetns
for (var i = 0; i < tags.length; i++ ) {
  tags[i].addEventListener('click', play)
}

closeBtn[0].addEventListener('click', closeModal)
// Winner Count and Levels Count
var win = 0;
var levels = 0;
// Open Modal Function
function show(title, body, col) {
  modal[0].style.display = 'block';
  titleField[0].innerHTML = title;
  content[0].innerHTML = body;
}
// Close Modal Function
function closeModal() {
  modal[0].style.display = 'none'
}
window.onclick = function (e) {
  if (e.target == modal[0]) {
    closeModal();
  }
}
// Icons event
function play(e) {
  var a = e.target.className.replace('fa icon fa-hand-', '');
  var toLow = a.toLowerCase();
  // Check win or not function
  function game() {
    levels++
    var selectObj = {
      'rock': 0,
      'paper':1,
      'scissors': 2
    }
    var cpuObj = {
      0: 'scissors',
      1: 'rock',
      2: 'paper'
    }
    const random = Math.floor(Math.random() * 3);
    if (selectObj[toLow] == random) {
      win++;
      show('You Draw', `You Choose ${toLow} and Computer Choose ${cpuObj[random]}`, `${win} / ${levels}`)
      titleField[0].style.color = 'blue';
    }
    else {
      show('You Lose', `You Choose ${toLow} and Computer Choose ${cpuObj[random]}`, `${win} &nbsp;/ ${levels}`)
      titleField[0].style.color = 'red';
    }
    counts[0].innerHTML = `${win} / ${levels}`
  }
  game();
}
