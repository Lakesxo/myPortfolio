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
let desktpNavLi = document.querySelectorAll('ul.nav li')
let header = document.querySelector('.head');
const section = document.querySelector('.skew');
let currentPos = window.pageYOffset;
let new_scroll_position = 0;
let last_scroll_position;
let darkModeBtn = document.querySelector('button.modeBtn');
let darkMdImage  = document.querySelector('img.modeImg');
let body = document.querySelector('body');
let allBgColorDarkMd = document.querySelectorAll('[data-bgColor]');
let colorAllDarkMd = document.querySelectorAll('[data-color]');
let allborderColor = document.querySelectorAll('[data-bd]');
let allTxtColorWhite = document.querySelectorAll('[data-txt]');
let allOtherTxtColor = document.querySelectorAll('[data-mainTxt]');
let psuedoAllBgcolor = document.querySelectorAll('[data-sudo]');
let formBdColor = document.querySelectorAll('[data-fm]');
let specialTxtColor = document.querySelectorAll('[data-sp]');
const allTabBtns = [moreBtn, hngBtn, migrantBtn, optisourceBtn, theBeesBtn];

// Tab Dark Function
tabDarkSwitch = () => {
    if (body.classList.contains('bodyDark')) {
        if (mediaQuery.matches) {
            allTabBtns.forEach((btn) => {
                if (btn.classList.contains('activeTabMobile')) {
                    btn.classList.remove('activeTabMobile')
                    btn.classList.add('activeDarkMobile')
                }
            })
        } else {
            allTabBtns.forEach((btn) => {
                if (btn.classList.contains('activeTabDesktop')) {
                    btn.classList.remove('activeTabDesktop')
                    btn.classList.add('activeDarkDesktop')
                }
            })
        }
    } else {
        if (mediaQuery.matches) {
            allTabBtns.forEach((btn) => {
                if (btn.classList.contains('activeDarkMobile')) {
                    btn.classList.remove('activeDarkMobile')
                    btn.classList.add('activeTabMobile')
                }
            })
        } else {
            allTabBtns.forEach((btn) => {
                if (btn.classList.contains('activeDarkDesktop')) {
                    btn.classList.remove('activeDarkDesktop')
                    btn.classList.add('activeTabDesktop')
                }
            })
        }
    }
}

// Dark mode function
darkMode = () => {
    body.classList.toggle('bodyDark');
    body.classList.toggle('bar');
    if (body.classList.contains('bodyDark')) {
        darkMdImage.src = "./assets/img/sun.png"
    } else {
        darkMdImage.src = "./assets/img/light.png"
    }
    darkModeBtn.classList.toggle('btnBackColor')
    mbNavLi.forEach((li) => li.classList.toggle('whiteText'));
    desktpNavLi.forEach((li) => li.classList.toggle('whiteText'));
    allBgColorDarkMd.forEach((bg) => bg.classList.toggle('allBgColor'));
    colorAllDarkMd.forEach((cl) => cl.classList.toggle('allColor'));
    allborderColor.forEach((bd) => bd.classList.toggle('borderColorDark'));
    allTxtColorWhite.forEach((txt) => txt.classList.toggle('whiteText'));
    allOtherTxtColor.forEach((xt) => xt.classList.toggle('txtColormain'));
    psuedoAllBgcolor.forEach((su) => su.classList.toggle('sudo'));
    formBdColor.forEach((fm) => fm.classList.toggle('formBdColor'));
    specialTxtColor.forEach((sp) => sp.classList.toggle('specialTxt'));
    tabDarkSwitch()
    //header.classList.toggle('')
}

// Skew on scroll
const skew = () => {
    const newPos = window.pageYOffset;
    const diff = newPos - currentPos;
    const speed = diff * 0.05;
    const final = (speed > 1) ? 1 : speed;
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
    if (mediaQuery.matches){
        allTabBtns.forEach((tabBtn)=> {
            tabBtn.classList.add('mdQueryStyling');
            tabBtn.classList.remove('otherSizeStyling');
            tabBtn.classList.remove('activeTabDesktop');
            tabBtn.classList.remove('activeDarkDesktop');
        })
    } else {
        allTabBtns.forEach((tabBtn)=> {
            tabBtn.classList.add('otherSizeStyling');
            tabBtn.classList.remove('activeTabMobile');
            tabBtn.classList.remove('mdQueryStyling');
            tabBtn.classList.remove('activeDarkMobile');
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
        if (body.classList.contains('bodyDark')) {
            optisourceBtn.classList.add('activeDarkMobile');
            optisourceBtn.classList.remove('activeDarkDesktop');
        }
        optisourceBtn.classList.add('activeTabMobile');
        optisourceBtn.classList.remove('activeTabDesktop');
        optiArray.forEach((l)=> l.classList.remove('activeTabMobile'));
        optiArray.forEach((l)=> l.classList.remove('activeDarkMobile'));
        optiArray.forEach((x)=> x.style.borderBottom = "2px solid #C4C4C4");
    } else {
        if (body.classList.contains('bodyDark')) {
            optisourceBtn.classList.add('activeDarkDesktop');
            optisourceBtn.classList.remove('activeDarkMobile');
        }
        optiArray.forEach((zl)=> zl.classList.remove('activeDarkDesktop'));
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
        if (body.classList.contains('bodyDark')) {
            hngBtn.classList.add('activeDarkMobile');
            hngBtn.classList.remove('activeDarkDesktop');
        }
        hngArray.forEach((l)=> l.classList.remove('activeDarkMobile'));
        hngBtn.classList.add('activeTabMobile');
        hngBtn.classList.remove('activeTabDesktop');
        hngArray.forEach((lh)=> lh.classList.remove('activeTabMobile'))
        hngArray.forEach((hx)=> hx.style.borderBottom = "2px solid #C4C4C4")
    } else {
        if (body.classList.contains('bodyDark')) {
            hngBtn.classList.add('activeDarkDesktop');
            hngBtn.classList.remove('activeDarkMobile');
        }
        hngArray.forEach((zl)=> zl.classList.remove('activeDarkDesktop'));
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
        if (body.classList.contains('bodyDark')) {
            migrantBtn.classList.add('activeDarkMobile');
            migrantBtn.classList.remove('activeDarkDesktop');
        }
        migArray.forEach((l)=> l.classList.remove('activeDarkMobile'));
        migrantBtn.classList.add('activeTabMobile');
        migrantBtn.classList.remove('activeTabDesktop');
        migArray.forEach((mh)=> mh.classList.remove('activeTabMobile'))
        migArray.forEach((mgx)=> mgx.style.borderBottom = "2px solid #C4C4C4")
    } else {
        if (body.classList.contains('bodyDark')) {
            migrantBtn.classList.add('activeDarkDesktop');
            migrantBtn.classList.remove('activeDarkMobile');
        }
        migArray.forEach((zl)=> zl.classList.remove('activeDarkDesktop'));
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
        if (body.classList.contains('bodyDark')) {
            moreBtn.classList.add('activeDarkMobile');
            moreBtn.classList.remove('activeDarkDesktop');
        }
        moreArray.forEach((l)=> l.classList.remove('activeDarkMobile'));
        moreBtn.classList.add('activeTabMobile');
        moreBtn.classList.remove('activeTabDesktop');
        moreArray.forEach((mh)=> mh.classList.remove('activeTabMobile'))
        moreArray.forEach((mgx)=> mgx.style.borderBottom = "2px solid #C4C4C4")
    } else {
        if (body.classList.contains('bodyDark')) {
            moreBtn.classList.add('activeDarkDesktop');
            moreBtn.classList.remove('activeDarkMobile');
        }
        moreArray.forEach((zl)=> zl.classList.remove('activeDarkDesktop'));
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
        if (body.classList.contains('bodyDark')) {
            theBeesBtn.classList.add('activeDarkMobile');
            theBeesBtn.classList.remove('activeDarkDesktop');
        }
        beesArray.forEach((l)=> l.classList.remove('activeDarkMobile'));
        theBeesBtn.classList.add('activeTabMobile');
        theBeesBtn.classList.remove('activeTabDesktop');
        beesArray.forEach((mh)=> mh.classList.remove('activeTabMobile'));
        beesArray.forEach((mgx)=> mgx.style.borderBottom = "2px solid #C4C4C4");
    } else {
        if (body.classList.contains('bodyDark')) {
            theBeesBtn.classList.add('activeDarkDesktop');
            theBeesBtn.classList.remove('activeDarkMobile');
        }
        beesArray.forEach((zl)=> zl.classList.remove('activeDarkDesktop'));
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
darkModeBtn.addEventListener('click', darkMode)
mbNavLi.forEach((li)=> {
    li.addEventListener('click', closeOnNavClick)
})