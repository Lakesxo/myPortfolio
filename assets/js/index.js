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

// Tabbed content menu
hngFunc =()=> {
    hng.style.display = "block";
    more.style.display = "none";
    migrant.style.display = "none"
    hngBtn.style.color = "#480403"
    hngBtn.style.borderLeft = "2px solid #480403"
    moreBtn.style.color = "#C4C4C4"
    moreBtn.style.borderLeft = "2px solid #C4C4C4"
    migrantBtn.style.color = "#C4C4C4"
    migrantBtn.style.borderLeft = "2px solid #C4C4C4"
}
migrantFunc =()=> {
    migrant.style.display = "block";
    more.style.display = "none";
    hng.style.display = "none";
    migrantBtn.style.color = "#480403"
    migrantBtn.style.borderLeft = "2px solid #480403"
    hngBtn.style.color = "#C4C4C4"
    hngBtn.style.borderLeft = "2px solid #C4C4C4"
    moreBtn.style.color = "#C4C4C4"
    moreBtn.style.borderLeft = "2px solid #C4C4C4"
}
moreFunc =()=> {
    more.style.display = "block";
    migrant.style.display = "none"
    hng.style.display = "none"
    moreBtn.style.color = "#480403"
    moreBtn.style.borderLeft = "2px solid #480403"
    hngBtn.style.color = "#C4C4C4"
    hngBtn.style.borderLeft = "2px solid #C4C4C4"
    migrantBtn.style.color = "#C4C4C4"
    migrantBtn.style.borderLeft = "2px solid #C4C4C4"
}

// Event listeners
menu.addEventListener('click', menuToggle);
hngBtn.addEventListener('click', hngFunc);
moreBtn.addEventListener('click', moreFunc);
migrantBtn.addEventListener('click', migrantFunc);