'use strict'

const hamMenu = document.querySelector('.ham-menu');
const headNav = document.querySelector('.head-nav');
const close = document.querySelector('.close');
const layer = document.querySelector('.layer');
const body = document.querySelector('body');
const closeIcon = document.querySelector('.close-icon');

hamMenu.addEventListener('click', function (){
    headNav.style.animationName = 'menuIn';
    body.style.overflow = 'hidden';
    layer.style.width = '100vw';
    layer.style.animation = 'FadeIn 300ms forwards';

    close.style.animation = 'FadeIn 300ms forwards 400ms';
})

close.addEventListener('click', function (){
    headNav.style.animationName = 'menuOut';
    body.style.overflow = 'scroll';
    layer.style.animation = 'FadeOut 300ms forwards';
    close.style.animation = 'FadeOut 300ms forwards';
})

layer.addEventListener('click', function() {
    headNav.style.animationName = 'menuOut';
    body.style.overflow = 'scroll';
    layer.style.animation = 'FadeOut 300ms forwards';
})