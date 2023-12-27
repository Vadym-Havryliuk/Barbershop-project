"use strict";

let images = document.querySelector('.images');

function changePosition() {
    setTimeout(function() {
        images.classList.replace('image-position-1', 'image-position-2');
    }, 3000);

    setTimeout(function() {
        images.classList.replace('image-position-2', 'image-position-3');
    }, 6000);

    setTimeout(function() {
        images.classList.replace('image-position-3', 'image-position-1');
    }, 9000);
}

changePosition();

setInterval(changePosition, 9000);