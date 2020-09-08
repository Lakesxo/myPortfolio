let menu = document.querySelector('.hamburger');

menuToggle =()=> {
    menu.classList.toggle('change')
}

menu.addEventListener('click', menuToggle)