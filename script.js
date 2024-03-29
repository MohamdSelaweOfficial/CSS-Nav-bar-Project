const menuBars=document.getElementById('menu-bars');
const overlay=document.getElementById('overlay');
const nav1=document.getElementById('nav1');
const nav2=document.getElementById('nav2');
const nav3=document.getElementById('nav3');
const nav4=document.getElementById('nav4');
const nav5=document.getElementById('nav5');


function toggleNav(){
    // toggle the menu bar
    menuBars.classList.toggle('change');
    // toggle menu active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')){
        // animate in overlay
        overlay.classList.remove('overlay-slide-left');
        overlay.classList.add('overlay-slide-right');
    } else{
        // animate out overlay
        overlay.classList.remove('overlay-slide-right');
        overlay.classList.add('overlay-slide-left');
    }
}

// event listenerts
menuBars.addEventListener('click',toggleNav);
nav1.addEventListener('click',toggleNav);
nav2.addEventListener('click',toggleNav);
nav3.addEventListener('click',toggleNav);
nav4.addEventListener('click',toggleNav);
nav5.addEventListener('click',toggleNav);