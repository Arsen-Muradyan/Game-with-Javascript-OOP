var box  = document.getElementsByClassName("box");
for (var i = 0; i < box.length; i++) {
    box[i].addEventListener('click', play)
}
var score = 0;
var win_score = 0;
function play(e) {
    score++;    
    var keys = {
        0: 'paper',
        1: 'scissors',
        2: 'rock',
    }
    var obj = {
        'paper':  2,
        'rock': 1,
        'scissors': 0,
    }
    var d;
    d = Math.floor(Math.random() * 3)
    if (d == obj[e.target.id]) {
        win_score++;
    }
    document.getElementById('result').innerHTML = (win_score + ' / ' + score)
    for (var i = 0; i < box.length; i++) {
        box[i].style.borderColor = '#F51B10';
    }
    document.getElementById(keys[d]).style.borderColor = '#12DA21'
    setTimeout(() => {
        for (var i = 0; i < box.length; i++) {
            box[i].style.borderColor = '#B09810';
        }
    }, 350)
}   
