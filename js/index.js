"use strict";

let images = document.querySelector('.images');
let lines = document.querySelectorAll('.main-content .lines div');
let textB = document.querySelector('.text-b');
let lineB = document.querySelector('.line-b');
let textN = document.querySelector('.text-n');
let lineN = document.querySelector('.line-n');

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

function changePosition() {
    setTimeout(function() {
        images.classList.replace('image-position-1', 'image-position-2');
        lines[0].classList.remove('active');
        lines[1].classList.add('active');

        toggleBackSummary()
    }, 3000);

    setTimeout(function() {
        images.classList.replace('image-position-2', 'image-position-3');
        lines[1].classList.remove('active');
        lines[2].classList.add('active');

        toggleNextSummary()
    }, 6000);

    setTimeout(function() {
        images.classList.replace('image-position-3', 'image-position-1');
        lines[2].classList.remove('active');
        lines[0].classList.add('active');

        toggleBackSummary()
        toggleNextSummary()
    }, 9000);
}

changePosition();

setInterval(changePosition, 9000);