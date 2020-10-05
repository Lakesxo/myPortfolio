let menu = document.querySelector('.hamburger');
let navs = document.querySelector('.mobile-nav');
let hng = document.querySelector('.hng');
let migrant = document.querySelector('.migrant');
let more = document.querySelector('.more');
let hngBtn = document.querySelector('li.top');
let moreBtn = document.querySelector('li.mid');
let migrantBtn = document.querySelector('li.last');

menuToggle =()=> {
    menu.classList.toggle('change');
    navs.classList.toggle('hide');
}
hngFunc =()=> {
    hng.style.display = "block";
    more.style.display = "none";
    migrant.style.display = "none"
}
migrantFunc =()=> {
    migrant.style.display = "block";
    more.style.display = "none";
    hng.style.display = "none";
}
moreFunc =()=> {
    more.style.display = "block";
    migrant.style.display = "none"
    hng.style.display = "none"
}
menu.addEventListener('click', menuToggle);
hngBtn.addEventListener('click', hngFunc);
moreBtn.addEventListener('click', moreFunc);
migrantBtn.addEventListener('click', migrantFunc);