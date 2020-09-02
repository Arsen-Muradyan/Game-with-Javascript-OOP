var characters = document.getElementsByClassName('icon');
var modal = document.getElementsByClassName('modal')
var titleField = document.getElementsByClassName('modal-title')
var modalContent = document.getElementsByClassName('modal-content')
var closeBtn = document.getElementsByClassName('close-btn');
var counts = document.getElementsByClassName('counts-content')
//Add Evetns
for (var i = 0; i < characters.length; i++ ) {
  characters[i].addEventListener('click', play)
}
closeBtn[0].addEventListener('click', closeModal)

// Winner Count and Levels Count
var win = 0;
var levels = 0;

// Open Modal Function
function show(title, body) {
  modal[0].style.display = 'block';
  titleField[0].innerHTML = title;
  modalContent[0].innerHTML = body;
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
  var selectedCharacter = a.toLowerCase();
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
    var random = Math.floor(Math.random() * 3);
    if (selectObj[selectedCharacter] == random) {
      win++;
      show('You Draw', `You Choose ${selectedCharacter} and Computer Choose ${cpuObj[random]}`, `${win} / ${levels}`)
      titleField[0].style.color = 'blue';
    } else if (selectedCharacter == cpuObj[random]) {
      show('Equal', `You Choose ${selectedCharacter} and Computer also Choose ${cpuObj[random]}`, `${win} / ${levels}`)
      titleField[0].style.color = 'black'
    }
    else {
      show('You Lose', `You Choose ${selectedCharacter} and Computer Choose ${cpuObj[random]}`, `${win} &nbsp;/ ${levels}`)
      titleField[0].style.color = 'red';
    }
    counts[0].innerHTML = `${win} / ${levels}`
  }
  game();
}
