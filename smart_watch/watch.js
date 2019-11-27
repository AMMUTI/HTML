// var dt = new Date();
// var time = dt.getHours() + ":" + dt.getMinutes()  ;
// //+":"+dt.getSeconds()
// $("#time").html(time);



function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);


}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;

}
function playmusic(){
$("#music").click(function(e) {

   $("#mydiv").load("music.html")
})
}
function playAudio2() {
  var y = document.getElementById("myAudio");
  y.pause();
  var x = document.getElementById("myAudio2");
  x.play();
}
function playAudio() {
  var y = document.getElementById("myAudio2");
  y.pause();
  var x = document.getElementById("myAudio");
  x.play();
}


function pauseAudio() {
  var x = document.getElementById("myAudio");
    var y = document.getElementById("myAudio2");

  x.pause();
  y.pause();
}
// back to message page
function mess(){
$("#msg").click(function(e) {

   $("#mydiv").load("watch.html")
})
}
// to direct clock page
function clock(){
$("#clock").click(function(e) {

   $("#mydiv").load("clock.html")
})
}










var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}



/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
      clearTimeout(t);
}
