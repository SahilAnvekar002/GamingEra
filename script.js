let elements = Array.from( document.getElementsByClassName('col-md-4'));
let e = document.getElementById('homeContainer');
let hambugger = document.getElementById('hambugger');
let close = document.getElementById('close');
let navbar1 = document.getElementById('navbar');
let navbar2 = document.getElementById('navbar2');
let navbarDiv = document.getElementById('navbarDiv');

window.addEventListener('load', function () {
    if(window.innerWidth <= 1000){
        for (let index = 0; index < elements.length; index++) {
            elements[index].className = 'col-md-6';
        }
        e.className = 'homeContainer';
    }
})

window.addEventListener('resize', function (){
    if(window.innerWidth <= 1000){
        for (let index = 0; index < elements.length; index++) {
            elements[index].className = 'col-md-6';
        }
        e.className = 'homeContainer';
    }
    else if(window.innerWidth > 1000){
        for (let index = 0; index < elements.length; index++) {
            elements[index].className = 'col-md-4';
        }
        e.className = 'container';
    }

    if(window.innerWidth > 700){
        navbar1.style.display = 'flex';
        navbar2.style.display = 'none';
        navbarDiv.style.opacity = '0';
        navbarDiv.style.visibility = 'hidden';
        navbarDiv.style.transform = "translateX(160px)";
        close.style.display = 'none';
        hambugger.style.display = 'flex';
    }
    else if(window.innerWidth <= 700){
        navbar1.style.display = 'none';
        navbar2.style.display = 'flex';
    }
})

hambugger.addEventListener('click', function(){
    close.style.display = 'flex'; 
    navbarDiv.style.opacity = "1";
    navbarDiv.style.visibility = "visible";
    navbarDiv.style.transform = "translateX(-160px)";
    navbarDiv.style.transition = "all 0.4s ease-in-out";
    //navbarDiv.style.display = 'flex';
    hambugger.style.display = 'none';
})

close.addEventListener('click', function(){
    close.style.display = 'none'; 
    navbarDiv.style.opacity = "0";
    navbarDiv.style.visibility = "hidden";
    navbarDiv.style.transform = "translateX(160px)";
    navbarDiv.style.transition = "all 0.4s ease-in-out";
    //navbarDiv.style.display = 'none';
    hambugger.style.display = 'flex';
})