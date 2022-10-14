let audio = new Audio('./assets/audio/song.mp3');

$('p').on('click', function () {
    audio.play();
})