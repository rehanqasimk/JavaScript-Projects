// Getting dome Elements
const video = document.querySelector("#video");
const progress = document.getElementById("progress");
const timestamp = document.getElementsByClassName("timestamp")[0];
const play = document.getElementById("play");
const stop_vid = document.getElementById("stop");

//  function to start video when clicking on video

function playPauseMedia() {
    if (video.paused) {
        video.play();
        play.innerHTML = '<i class="fa fa-pause fa-2x" aria-hidden="true"></i>';
        progress.value = (video.currentTime / video.duration) * 100;

    }
    else {
        video.pause();
        play.innerHTML = '<i class="fa fa-play fa-2x" aria-hidden="true"></i>'
    }
}


//  function to play stop video 
function stopMedia() {
    video.pause();
    video.currentTime = 0;
    play.innerHTML = '<i class="fa fa-play fa-2x" aria-hidden="true"></i>'
}

function updateProgress() {
    let minutes = Math.floor(video.currentTime / 60);
    let seconds = Math.floor(video.currentTime - minutes * 60);
    let minuteValue;
    let secondValue;

    if (minutes < 10) {
        minuteValue = '0' + minutes;
    } else {
        minuteValue = minutes;
    }

    if (seconds < 10) {
        secondValue = '0' + seconds;
    } else {
        secondValue = seconds;
    }

    let mediaTime = minuteValue + ':' + secondValue;
    timestamp.innerHTML = mediaTime;
}


function progressbar() {
    progress.value = video.currentTime;
}


function setProgressBar() {
    video.pause();
    video.currentTime = progress.value;
    video.play();

}

// 1- EventListener to the Video Element
video.addEventListener('click', playPauseMedia);

// video progress
video.addEventListener('timeupdate', updateProgress);

//2- EventListener to the play button to play the video 
play.addEventListener('click', playPauseMedia);

//  3- stop the video when click on stop button 
stop_vid.addEventListener('click', stopMedia);

// Progress bar
video.addEventListener('timeupdate', progressbar);

// 

progress.addEventListener('change', setProgressBar);
