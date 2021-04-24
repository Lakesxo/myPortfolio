// Elements selected from html
let menu = document.querySelector('.hamburger');
let navs = document.querySelector('.mobile-nav');
let hng = document.querySelector('.hng');
let migrant = document.querySelector('.migrant');
let more = document.querySelector('.more');
let optisource = document.querySelector('.optitech');
let beesNG = document.querySelector('.beesng');
let hngBtn = document.querySelector('li.top');
let moreBtn = document.querySelector('li.mid');
let migrantBtn = document.querySelector('li.last');
let optisourceBtn = document.querySelector('li.opti');
let theBeesBtn = document.querySelector('li.bees');
let mediaQuery = window.matchMedia("(max-width: 768px)");
let xo = document.querySelector('ul.company li');
let viewMoreBtn = document.querySelector('button.viewMore');
let moreExperience = document.querySelector('.thirdThree');
let submitBtn = document.querySelector('.butSubmit');
let mbNavLi = document.querySelectorAll('.mobile-nav li');
let header = document.querySelector('.head');
const section = document.querySelector('.skew');
let currentPos = window.pageYOffset;
let new_scroll_position = 0;
let last_scroll_position;

// Skew on scroll
const skew = () => {
    const newPos = window.pageYOffset;
    const diff = newPos - currentPos;
    const speed = diff * 0.05;
    const final = (speed > 3) ? 3 : speed;
    section.style.transform = `skewY(${ final }deg)`;
    currentPos = newPos;
    requestAnimationFrame(skew);
}
skew();

// Hamburger menu function
menuToggle = () => {
    menu.classList.toggle('change');
    navs.classList.toggle('hide');
    if (navs.classList.contains('nonezz')){
        navs.classList.add('hide')
        navs.classList.remove('nonezz');
    }
}

// Close mobile menu on link click
closeOnNavClick = () => {  
    setTimeout(()=> {
        menu.classList.toggle('change');
        navs.classList.add('nonezz');
    }, 500) 
}

// Close and open header on scroll
window.addEventListener('scroll', (e) => {
    last_scroll_position = window.scrollY;
  
    // Scrolling down
    if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
      header.classList.remove("slideDown");
      header.classList.add("slideUp");
  
    // Scrolling up
    } else if (new_scroll_position > last_scroll_position) {
      header.classList.remove("slideUp");
      header.classList.add("slideDown");
    }
  
    new_scroll_position = last_scroll_position;
});

// Change orirntation of borders on screen change
changeTabbedOnScreen = () => {
    const allTabBtns = [moreBtn, hngBtn, migrantBtn, optisourceBtn, theBeesBtn];
    if (mediaQuery.matches){
        allTabBtns.forEach((tabBtn)=> {
            tabBtn.classList.add('mdQueryStyling');
            tabBtn.classList.remove('otherSizeStyling');
            tabBtn.classList.remove('activeTabDesktop');
        })
    } else {
        allTabBtns.forEach((tabBtn)=> {
            tabBtn.classList.add('otherSizeStyling');
            tabBtn.classList.remove('activeTabMobile');
            tabBtn.classList.remove('mdQueryStyling');
        })
    }
}

// Function when Optisource tab is clicked
optiTechFunc =()=> {
    const optiArray = [moreBtn, hngBtn, migrantBtn, theBeesBtn]
    optisource.style.display = "block";
    hng.style.display = "none";
    migrant.style.display = "none";
    more.style.display = "none";
    beesNG.style.display = "none";
    optisourceBtn.style.backgroundColor = '#48040314'
    optiArray.forEach((opt) => opt.style.color = "#C4C4C4")
    if (mediaQuery.matches){
        optisourceBtn.classList.add('activeTabMobile');
        optisourceBtn.classList.remove('activeTabDesktop');
        optiArray.forEach((l)=> l.classList.remove('activeTabMobile'));
        optiArray.forEach((x)=> x.style.borderBottom = "2px solid #C4C4C4");
    } else {
        optisourceBtn.classList.add('activeTabDesktop');
        optisourceBtn.classList.remove('activeTabMobile');
        optiArray.forEach((zl)=> zl.classList.remove('activeTabDesktop'));
        optiArray.forEach((xs)=> xs.style.borderLeft = "2px solid #C4C4C4");
    }
}

// Function when Hng tab is clicked
hngFunc = () => {
    const hngArray = [moreBtn, optisourceBtn, migrantBtn, theBeesBtn]
    hng.style.display = "block";
    more.style.display = "none";
    migrant.style.display = "none";
    optisource.style.display = "none";
    beesNG.style.display = "none";
    optisourceBtn.style.backgroundColor = 'transparent';
    hngArray.forEach((hg) => hg.style.color = "#C4C4C4")
    if (mediaQuery.matches){
        hngBtn.classList.add('activeTabMobile');
        hngBtn.classList.remove('activeTabDesktop');
        hngArray.forEach((lh)=> lh.classList.remove('activeTabMobile'))
        hngArray.forEach((hx)=> hx.style.borderBottom = "2px solid #C4C4C4")
    } else {
        hngBtn.classList.add('activeTabDesktop');
        hngBtn.classList.remove('activeTabMobile');
        hngArray.forEach((lhh)=> lhh.classList.remove('activeTabDesktop'));
        hngArray.forEach((hxx)=> hxx.style.borderLeft = "2px solid #C4C4C4");
    }
}

// Function when Migrant Tab is clicked
migrantFunc = () => {
    const migArray = [moreBtn, optisourceBtn, hngBtn, theBeesBtn]
    migrant.style.display = "block";
    more.style.display = "none";
    hng.style.display = "none";
    optisource.style.display = "none";
    beesNG.style.display = "none";
    optisourceBtn.style.backgroundColor = 'transparent';
    migArray.forEach((mg) => mg.style.color = "#C4C4C4")
    if (mediaQuery.matches){
        migrantBtn.classList.add('activeTabMobile');
        migrantBtn.classList.remove('activeTabDesktop');
        migArray.forEach((mh)=> mh.classList.remove('activeTabMobile'))
        migArray.forEach((mgx)=> mgx.style.borderBottom = "2px solid #C4C4C4")
    } else {
        migrantBtn.classList.add('activeTabDesktop');
        migrantBtn.classList.remove('activeTabMobile');
        migArray.forEach((mhh)=> mhh.classList.remove('activeTabDesktop'));
        migArray.forEach((mgxx)=> mgxx.style.borderLeft = "2px solid #C4C4C4");
    }
}

// Function when More Tab is clicked
moreFunc =()=> {
    const moreArray = [migrantBtn, optisourceBtn, hngBtn, theBeesBtn]
    more.style.display = "block";
    migrant.style.display = "none";
    hng.style.display = "none";
    optisource.style.display = "none";
    beesNG.style.display = "none";
    optisourceBtn.style.backgroundColor = 'transparent';
    moreArray.forEach((mg) => mg.style.color = "#C4C4C4")
    if (mediaQuery.matches){
        moreBtn.classList.add('activeTabMobile');
        moreBtn.classList.remove('activeTabDesktop');
        moreArray.forEach((mh)=> mh.classList.remove('activeTabMobile'))
        moreArray.forEach((mgx)=> mgx.style.borderBottom = "2px solid #C4C4C4")
    } else {
        moreBtn.classList.add('activeTabDesktop');
        moreBtn.classList.remove('activeTabMobile');
        moreArray.forEach((mhh)=> mhh.classList.remove('activeTabDesktop'));
        moreArray.forEach((mgxx)=> mgxx.style.borderLeft = "2px solid #C4C4C4");
    }
}

// Function when TheBees tab is clicked
theBeesFunc =()=> {
    const beesArray = [migrantBtn, optisourceBtn, hngBtn, moreBtn]
    beesNG.style.display = "block";
    optisource.style.display = "none";
    hng.style.display = "none";
    migrant.style.display = "none";
    more.style.display = "none";
    optisourceBtn.style.backgroundColor = 'transparent';
    beesArray.forEach((mg) =>mg.style.color = "#C4C4C4")
    if (mediaQuery.matches){
        theBeesBtn.classList.add('activeTabMobile');
        theBeesBtn.classList.remove('activeTabDesktop');
        beesArray.forEach((mh)=> mh.classList.remove('activeTabMobile'));
        beesArray.forEach((mgx)=> mgx.style.borderBottom = "2px solid #C4C4C4");
    } else {
        theBeesBtn.classList.add('activeTabDesktop');
        theBeesBtn.classList.remove('activeTabMobile');
        beesArray.forEach((mhh)=> mhh.classList.remove('activeTabDesktop'));
        beesArray.forEach((mgxx)=> mgxx.style.borderLeft = "2px solid #C4C4C4");
    }
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
optisourceBtn.addEventListener('click', optiTechFunc);
hngBtn.addEventListener('click', hngFunc);
moreBtn.addEventListener('click', moreFunc);
migrantBtn.addEventListener('click', migrantFunc);
theBeesBtn.addEventListener('click', theBeesFunc);
viewMoreBtn.addEventListener('click', showMoreProjects);
mediaQuery.addEventListener('change', changeTabbedOnScreen);
mbNavLi.forEach((li)=> {
    li.addEventListener('click', closeOnNavClick)
})