"use strict";

let images = querySelector('.images');

setInterval(function() {
    setTimeout(function() {
        images.classList.replace('image-position-1', 'image-position-2');
    }, 1000);

    setTimeout(function() {
        images.classList.replace('image-position-2', 'image-position-3');
    }, 2000);

    setTimeout(function() {
        images.classList.replace('image-position-3', 'image-position-1');
    }, 3000);
});