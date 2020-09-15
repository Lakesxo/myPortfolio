let menu = document.querySelector('.hamburger');
let navs = document.querySelector('.mobile-nav')

menuToggle =()=> {
    menu.classList.toggle('change')
    navs.classList.toggle('hide')
}

menu.addEventListener('click', menuToggle)