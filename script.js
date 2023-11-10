const burger = document.querySelector('.burger');
const ulWrapper = document.querySelector('.ul-wrapper');
const ul = document.querySelector('ul');


burger.addEventListener('click', () => {
    ulWrapper.classList.toggle('active')
    ul.classList.toggle('active')
});



const heroSection = document.querySelector('.hero-section');
const heroHeight = document.querySelector('.hero-section').clientHeight;

heroSection.style.height=`${heroHeight-80}px`;