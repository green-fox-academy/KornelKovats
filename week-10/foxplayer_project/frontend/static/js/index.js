const player = document.querySelector('audio');
const playButton = document.querySelector('#play');
const progressBar = document.querySelector('#progress');
const volume = document.querySelector('#volume');

const playImg = '../assets/play.svg';
const pauseImg = '../assets/pause.svg';

playButton.addEventListener('click', () => {
  if (player.paused === true) {
    player.play();
    playButton.setAttribute('src', pauseImg);
  } else {
    player.pause();
    playButton.setAttribute('src', playImg);
  }
});

const timeUpdate = () => {
  player.addEventListener('timeupdate', () => {
    progressBar.setAttribute('value', player.currentTime / player.duration);
  });
};

timeUpdate();

volume.addEventListener('change', () => {
  player.volume = volume.value / 100;
});