// Elements selected from html
let menu = document.querySelector('.hamburger');
let navs = document.querySelector('.mobile-nav');
let hng = document.querySelector('.hng');
let migrant = document.querySelector('.migrant');
let more = document.querySelector('.more');
let hngBtn = document.querySelector('li.top');
let moreBtn = document.querySelector('li.mid');
let migrantBtn = document.querySelector('li.last');
let mediaQuery = window.matchMedia("(max-width: 768px)")
let xo = document.querySelector('ul.company li')
let viewMoreBtn = document.querySelector('button.viewMore');
let moreExperience = document.querySelector('.thirdThree');

// Hamburger menu function
menuToggle =()=> {
    menu.classList.toggle('change');
    navs.classList.toggle('hide');
}

/* Tabbed content menu */
// Change orirntation of borders on screen change
changeTabbedOnScreen =()=> {
    if (mediaQuery.matches){
        moreBtn.style.borderBottom = "2px solid #C4C4C4"
        moreBtn.style.borderLeft = '0px'
        hngBtn.style.borderBottom = "2px solid #C4C4C4"
        hngBtn.style.borderLeft = '0px'
        migrantBtn.style.borderBottom = "2px solid #C4C4C4"
        migrantBtn.style.borderLeft = '0px'
    } else {
        moreBtn.style.borderLeft = "2px solid #C4C4C4"
        moreBtn.style.borderBottom = '0px'
        hngBtn.style.borderLeft = "2px solid #C4C4C4"
        hngBtn.style.borderBottom = '0px'
        migrantBtn.style.borderLeft = "2px solid #C4C4C4"
        migrantBtn.style.borderBottom = '0px'
    }
}

// Function when Hng tab is clicked
hngFunc =()=> {
    hng.style.display = "block";
    more.style.display = "none";
    migrant.style.display = "none"
    hngBtn.style.color = "#480403"
    if (mediaQuery.matches){
        hngBtn.style.borderBottom = "2px solid #480403"
        moreBtn.style.borderBottom = "2px solid #C4C4C4"
        migrantBtn.style.borderBottom = "2px solid #C4C4C4"
    } else {
        hngBtn.style.borderLeft = "2px solid #480403"
        moreBtn.style.borderLeft = "2px solid #C4C4C4"
        migrantBtn.style.borderLeft = "2px solid #C4C4C4"
    }
    moreBtn.style.color = "#C4C4C4"
    migrantBtn.style.color = "#C4C4C4"
}

// Function when Migrant Tab is clicked
migrantFunc =()=> {
    migrant.style.display = "block";
    more.style.display = "none";
    hng.style.display = "none";
    migrantBtn.style.color = "#480403"
    if (mediaQuery.matches){
        migrantBtn.style.borderBottom = "2px solid #480403"
        hngBtn.style.borderBottom = "2px solid #C4C4C4"
        moreBtn.style.borderBottom = "2px solid #C4C4C4"
    } else {
        migrantBtn.style.borderLeft = "2px solid #480403"
        hngBtn.style.borderLeft = "2px solid #C4C4C4"
        moreBtn.style.borderLeft = "2px solid #C4C4C4"
    }
    hngBtn.style.color = "#C4C4C4"
    moreBtn.style.color = "#C4C4C4"
}

// Function when More Tab is clicked
moreFunc =()=> {
    more.style.display = "block";
    migrant.style.display = "none"
    hng.style.display = "none"
    moreBtn.style.color = "#480403"
    if (mediaQuery.matches){
        moreBtn.style.borderBottom = "2px solid #480403"
        hngBtn.style.borderBottom = "2px solid #C4C4C4"
        migrantBtn.style.borderBottom = "2px solid #C4C4C4"
    } else {
        moreBtn.style.borderLeft = "2px solid #480403"
        hngBtn.style.borderLeft = "2px solid #C4C4C4"
        migrantBtn.style.borderLeft = "2px solid #C4C4C4"
    }
    hngBtn.style.color = "#C4C4C4"
    migrantBtn.style.color = "#C4C4C4"
}

// Function to load more projects
showMoreProjects =()=> {
    moreExperience.classList.toggle('none');
    if (viewMoreBtn.innerHTML === 'View More Projects'){
        viewMoreBtn.innerHTML = 'Show Less Projects'
    } else {
        viewMoreBtn.innerHTML = 'View More Projects'
    }
}


// Event listeners
menu.addEventListener('click', menuToggle);
hngBtn.addEventListener('click', hngFunc);
moreBtn.addEventListener('click', moreFunc);
migrantBtn.addEventListener('click', migrantFunc);
viewMoreBtn.addEventListener('click', showMoreProjects);
mediaQuery.addEventListener('change', changeTabbedOnScreen);