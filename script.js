const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('.overlay');
const hamburgerMenu = document.querySelector('.hamburger_menu');

btnHamburger.addEventListener('click', function() {
    if (btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');

        overlay.classList.remove('visible');
        hamburgerMenu.classList.remove('visible');
        overlay.classList.add('hidden');
        hamburgerMenu.classList.add('hidden');
    }
    else {
        btnHamburger.classList.add('open');

        overlay.classList.remove('hidden');
        hamburgerMenu.classList.remove('hidden');
        overlay.classList.add('visible');
        hamburgerMenu.classList.add('visible');
    }
});