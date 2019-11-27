var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');

button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=4a08a265fe796f61ddf1898ede4609ae')
.then(response => response.json())
.then(data => {
var tempValue = data['main']['temp'];
var nameValue = data['name'];
var descValue = data['weather'][0]['description'];
main.innerHTML = nameValue;
desc.innerHTML = "Desc - "+descValue;

var x  = 9/5;
var f = tempValue * 9/5 + 32 ;
console.log(f);
temp.innerHTML = "Temp - "+f+' F';
input.value ="";
})
.catch(err => alert("Wrong city name!"));
})

$(function(){
var games = ["Kottayam","Kochi","Kozhikodu","Mumbai","Chennai","Kannur","Jaipur","Kollam","Kodungallur",];

$("#autocomplete").autocomplete({
source: games
});
});
