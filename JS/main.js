document.addEventListener('DOMContentLoaded', function(){

    //query selectors and variables
    const navListOne = document.querySelector('.nav-list-one');
    const navListTwo = document.querySelector('.nav-list-two');
    const dropdownOne = document.getElementById('dropdownOne');
    const dropdownTwo = document.getElementById('dropdownTwo');
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-list');

    //burger menu and nav
    (function burgerMenu() {
        burger.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });

        const mobile = window.matchMedia('screen and (max-width: 991px)');
        windowSizeChanged(mobile.matches);
        mobile.addListener((mobile) => windowSizeChanged(mobile.matches));

    })();
    function windowSizeChanged(isSmall) {
        if (isSmall) {
            burger.classList.remove('non-active');
            navMenu.classList.remove('active');

            //dropdown list
            navListOne.classList.remove('non-active');
            navListTwo.classList.remove('non-active');
        } else {
            burger.classList.add('non-active');
            navMenu.classList.add('active');
            //dropdownlist
            navListOne.classList.add('non-active');
            navListTwo.classList.add('non-active');
            dropdown();
        }
    }
    //dropdown function
    function dropdown() {
        dropdownOne.addEventListener('mouseover', () => navListOne.classList.remove('non-active'));
        dropdownOne.addEventListener('mouseout', () => navListOne.classList.add('non-active'));
        dropdownTwo.addEventListener('mouseover', () => navListTwo.classList.remove('non-active'));
        dropdownOne.addEventListener('mouseout', () => navListTwo.classList.add('non-active'));
    }
});