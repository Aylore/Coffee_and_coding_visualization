


window.onload=function(){
console.log("LOADED");


setTimeout(function(){




var audio = new Audio('./fairouz.mp3');
console.log("AUDIO" , audio);
// add an event listener to the button to play the audio file when clicked
var playPauseButton = document.getElementById('play-button');
console.log("Button" , playPauseButton);


var music = document.getElementById('music');
console.log("MUSIC" , music);


var isPlaying = false;

playPauseButton.addEventListener('click', function() {
if (isPlaying) {
  music.pause();
  playPauseButton.innerHTML = 'Play';
} else {
  music.play();
  playPauseButton.innerHTML = 'Pause';
}
isPlaying = !isPlaying;
});






},3000)


};
