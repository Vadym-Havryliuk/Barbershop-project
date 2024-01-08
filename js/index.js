"use strict";

let images = document.querySelector('.images');
let lines = document.querySelectorAll('.main-content .lines div');

let textB = document.querySelector('.text-b');
let lineB = document.querySelector('.line-b');
let textN = document.querySelector('.text-n');
let lineN = document.querySelector('.line-n');

let back = document.querySelector('.back');
let next = document.querySelector('.next');

let sidebarBlock = document.querySelector('.sidebar-block');
let navContacts = document.querySelector('.nav-contacts');
let container = document.querySelector('header .container');
let mainBlock = document.querySelector('.main-block');

let timer1;
let timer2;
let timer3;
let timerId;

let menu = document.querySelector('.menu');
let logo = document.querySelector('.logo');
let closeButton = document.querySelector('.close');
let shadow = document.querySelector('.shadow');

let linksNetworks = document.querySelector('.links-networks');
let socialNetworks = document.querySelectorAll('.links-networks a');

let elemForm = document.querySelectorAll('.elem-form');

let navLinks = document.querySelectorAll('.navigation div');

let aboutUs = document.querySelector('.section-about-us');
let servicesPrices = document.querySelector('.section-services-prices');
let ourMasters = document.querySelector('.background-gray');
let contacts = document.querySelector('.contacts-address');

let arr = [aboutUs, servicesPrices, ourMasters, contacts];

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

function replace1() {
    images.classList.replace('image-position-1', 'image-position-2');
    lines[0].classList.remove('active');
    lines[1].classList.add('active');

    toggleBackSummary();
}

function replace2() {
    images.classList.replace('image-position-2', 'image-position-3');
    lines[1].classList.remove('active');
    lines[2].classList.add('active');

    toggleNextSummary();
}

function replace3() {
    images.classList.replace('image-position-3', 'image-position-1');
    lines[2].classList.remove('active');
    lines[0].classList.add('active');

    toggleBackSummary();
    toggleNextSummary();  
}
 
function changePosition() {
    timer1 = setTimeout(replace1, 3000);

    timer2 = setTimeout(replace2, 6000);

    timer3 = setTimeout(replace3, 9000);
}

function changePosition1() {
    timer1 = setTimeout(replace1, 3000);
    timer2 = setTimeout(replace2, 6000);
    timer3 = setTimeout(replace3, 9000);
}

function changePosition2() {
    timer2 = setTimeout(replace2, 3000);
    timer3 = setTimeout(replace3, 6000);
    timer1 = setTimeout(replace1, 9000);
}

function changePosition3() {
    timer3 = setTimeout(replace3, 3000);
    timer1 = setTimeout(replace1, 6000);
    timer2 = setTimeout(replace2, 9000);
}

changePosition();

timerId = setInterval(changePosition, 9000);

back.addEventListener('click', function() {
    clearTimers();

    let name = images.classList[1];
    let digit = +name[name.length - 1];

    let subStr = name.substr(0, name.length - 1);

    if (digit != 1) {
        images.classList.replace(name, `${subStr}${digit - 1}`);

        if (digit == 2) {
            toggleBackSummary();
        } else if (digit == 3) {
            toggleNextSummary();
        }
    }

    for (let i = 0; i < lines.length; i++) {
        if (i == digit - 2) {
            lines[i].classList.add('active');
        } else if (lines[i].classList.contains('active')) {

            if (digit != 1) {
                lines[i].classList.remove('active');
            }
        }
    }

    switch(images.classList[1]) {
        case 'image-position-1':
            changePosition1();
            timerId = setInterval(changePosition1, 9000);
        break;
        case 'image-position-2':
            changePosition2();
            timerId = setInterval(changePosition2, 9000);
        break;
        case 'image-position-3':
            changePosition3();
            timerId = setInterval(changePosition3, 9000);
        break;
    }
});

next.addEventListener('click', function() {
    clearTimers();

    let name = images.classList[1];
    let digit = +name[name.length - 1];

    let subStr = name.substr(0, name.length - 1);

    if (digit != 3) {
        images.classList.replace(name, `${subStr}${digit + 1}`);

        if (digit == 2) {
            toggleNextSummary();
        } else if (digit == 1) {
            toggleBackSummary();
        }
    }

    for (let i = 0; i < lines.length; i++) {
        if (i == digit) {
            lines[i].classList.add('active');
        } else if (lines[i].classList.contains('active')) {

            if (digit != lines.length) {
                lines[i].classList.remove('active');
            }
        }
    }

    switch(images.classList[1]) {
        case 'image-position-1':
            changePosition1();
            timerId = setInterval(changePosition1, 9000);
        break;
        case 'image-position-2':
            changePosition2();
            timerId = setInterval(changePosition2, 9000);
        break;
        case 'image-position-3':
            changePosition3();
            timerId = setInterval(changePosition3, 9000);
        break;
    }
});

function changeClass1() {
    navContacts.classList.replace('nav-contacts', 'nav-contacts-show');
    shadow.classList.replace('shadow', 'block-shadow');
    
    setTimeout(function() {
        shadow.classList.replace('block-shadow', 'block-shadow-dark'); 
    }, 10);
    
    document.body.style.overflow = 'hidden';
}

function changeClass2() {
    navContacts.classList.replace('nav-contacts-show', 'nav-contacts');
    shadow.classList.replace('block-shadow-dark', 'block-shadow');

    setTimeout(function() {
        shadow.classList.replace('block-shadow', 'shadow');
    }, 500);

    document.body.style.overflow = '';
}

function changeDocument() {
    let contactsShow = navContacts.classList.contains('nav-contacts-show');

    if (document.documentElement.clientWidth <= 768) {
        menu.before(logo);
        logo.src = 'img/logo-2.svg';
        container.append(navContacts);
        navContacts.append(sidebarBlock);

    } else if (document.documentElement.clientWidth > 768) {
        if (contactsShow) {
            navContacts.classList.replace('nav-contacts-show', 'nav-contacts');
            shadow.classList.replace('block-shadow-dark', 'shadow');
        }

        container.prepend(sidebarBlock);
        mainBlock.prepend(navContacts);
        sidebarBlock.prepend(logo);
        logo.src = 'img/logo.svg';
    }
};

changeDocument();
window.addEventListener('resize', changeDocument);

menu.addEventListener('click', changeClass1);

closeButton.addEventListener('click', changeClass2);

function isWhite(elem) {
    elem.classList.replace('elem-form', 'elem-form-2'); 
}

function isGray(elem) {
    elem.classList.replace('elem-form-2', 'elem-form');
}

for (let elem of elemForm) {
    elem.addEventListener('mouseover', () => {
        if (elem !== document.activeElement) {
            isWhite(elem);
        }
    });
    elem.addEventListener('mouseout', () => {
        if (elem !== document.activeElement) {
           isGray(elem);  
        }
    });
    elem.addEventListener('focus', () => {
        isWhite(elem);
    });
    elem.addEventListener('blur', () => {
        isGray(elem);
    });
}

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
        arr[i].scrollIntoView(true);
    });
}

navLinks[0].addEventListener('click', () => {
    aboutUs.scrollIntoView(true);
});
 