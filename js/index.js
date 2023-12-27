"use strict";

let images = document.querySelector('.images');
let lines = document.querySelectorAll('.main-content .lines div');

let textB = document.querySelector('.text-b');
let lineB = document.querySelector('.line-b');
let textN = document.querySelector('.text-n');
let lineN = document.querySelector('.line-n');

let back = document.querySelector('.back');
let next = document.querySelector('.next');

let timer1;
let timer2;
let timer3;
let timerId;

function toggleBack(whiteORgray) {
    textB.classList.toggle(`${whiteORgray}-txt`);
    lineB.classList.toggle(`${whiteORgray}-bg`);
}

function toggleNext(whiteORgray) {
    textN.classList.toggle(`${whiteORgray}-txt`);
    lineN.classList.toggle(`${whiteORgray}-bg`);
}

function toggleBackSummary() {
    toggleBack('white');
    toggleBack('gray');
}

function toggleNextSummary() {
    toggleNext('white');
    toggleNext('gray');
}

function clearTimers() {
    if (timerId) {
        clearInterval(timerId);
        clearInterval(timer1);
        clearInterval(timer2);
        clearInterval(timer3); 
    }
}

function changePosition() {
    timer1 = setTimeout(function() {
        images.classList.replace('image-position-1', 'image-position-2');
        lines[0].classList.remove('active');
        lines[1].classList.add('active');

        toggleBackSummary()
    }, 3000);

    timer2 = setTimeout(function() {
        images.classList.replace('image-position-2', 'image-position-3');
        lines[1].classList.remove('active');
        lines[2].classList.add('active');

        toggleNextSummary()
    }, 6000);

    timer3 = setTimeout(function() {
        images.classList.replace('image-position-3', 'image-position-1');
        lines[2].classList.remove('active');
        lines[0].classList.add('active');

        toggleBackSummary()
        toggleNextSummary()
    }, 9000);
}

changePosition();

timerId = setInterval(changePosition, 9000);

back.addEventListener('click', function() {
    clearTimers();
});

next.addEventListener('click', function() {
    clearTimers();
}); 