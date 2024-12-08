// Transparent to solid nav bar

const header = document.querySelector("header");

window.addEventListener('scroll' , () => {
    if (window.scrollY > 50) {
        header.classList.add('headerSolidBackground');
    } else if (window.scrollY <= 50) {
        header.classList.remove('headerSolidBackground')
    }; 
}
);









// FAQ Functionality


// FAQ Question 1
document.querySelector('.faq-question-1').addEventListener('click', () => {
    document.querySelector('.faq-answer-1').classList.toggle('faq-answer-active');
    document.querySelector('.faq-caret-1').classList.toggle('rotate-180');
    document.querySelector('.faq-answer-2').classList.remove('faq-answer-active');
    document.querySelector('.faq-caret-2').classList.remove('rotate-180');
    document.querySelector('.faq-answer-3').classList.remove('faq-answer-active');
    document.querySelector('.faq-caret-3').classList.remove('rotate-180');
    document.querySelector('.faq-answer-4').classList.remove('faq-answer-active');
    document.querySelector('.faq-caret-4').classList.remove('rotate-180');
    
})

// FAQ Question 2
document.querySelector('.faq-question-2').addEventListener('click', () => {
    document.querySelector('.faq-answer-2').classList.toggle('faq-answer-active');
    document.querySelector('.faq-caret-2').classList.toggle('rotate-180');
    document.querySelector('.faq-answer-1').classList.remove('faq-answer-active');
    document.querySelector('.faq-caret-1').classList.remove('rotate-180');
    document.querySelector('.faq-answer-3').classList.remove('faq-answer-active');
    document.querySelector('.faq-caret-3').classList.remove('rotate-180');
    document.querySelector('.faq-answer-4').classList.remove('faq-answer-active');
    document.querySelector('.faq-caret-4').classList.remove('rotate-180');
})

// FAQ Question 3
document.querySelector('.faq-question-3').addEventListener('click', () => {
    document.querySelector('.faq-answer-3').classList.toggle('faq-answer-active');
    document.querySelector('.faq-caret-3').classList.toggle('rotate-180');
    document.querySelector('.faq-answer-1').classList.remove('faq-answer-active');
    document.querySelector('.faq-caret-1').classList.remove('rotate-180');
    document.querySelector('.faq-answer-2').classList.remove('faq-answer-active');
    document.querySelector('.faq-caret-2').classList.remove('rotate-180');
    document.querySelector('.faq-answer-4').classList.remove('faq-answer-active');
    document.querySelector('.faq-caret-4').classList.remove('rotate-180');
})

// FAQ Question 4
document.querySelector('.faq-question-4').addEventListener('click', () => {
    document.querySelector('.faq-answer-4').classList.toggle('faq-answer-active');
    document.querySelector('.faq-caret-4').classList.toggle('rotate-180');
    document.querySelector('.faq-answer-1').classList.remove('faq-answer-active');
    document.querySelector('.faq-caret-1').classList.remove('rotate-180');
    document.querySelector('.faq-answer-2').classList.remove('faq-answer-active');
    document.querySelector('.faq-caret-2').classList.remove('rotate-180');
    document.querySelector('.faq-answer-3').classList.remove('faq-answer-active');
    document.querySelector('.faq-caret-3').classList.remove('rotate-180');
})

// Hamburger Menu Functionality
document.querySelector('.hamburger-icon').addEventListener('click',() => {
    document.querySelector('.full-screen-mobile-menu-wrapper').classList.toggle('full-screen-mobile-menu-wrapper-hidden')
    if (window.scrollY < 50) {
        header.classList.toggle('headerSolidBackground');
    }
    

})





// Music Player 

let progress = document.getElementById("progress")
let song = document.getElementById("song")
let songTwo = document.getElementById("songTwo")
let ctrlIcon = document.getElementById("ctrlIcon")
let songTwoctrl = document.getElementById("songTwoctrl")


song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause () {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play()
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

function playPauseTwo () {
    if (songTwoctrl.classList.contains("song-two-default-mute")) {
        songTwo.play();
        songTwoctrl.classList.toggle("song-two-default-mute");
    } else {
        songTwo.pause()
        songTwoctrl.classList.toggle("song-two-default-mute");
    }
}


if (song.play()) {
    setInterval(()=>{
        progress.value = song.currentTime;
    },200);
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}