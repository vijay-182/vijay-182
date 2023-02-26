const header=document.querySelector("header");
const open=document.getElementById('open');
const open1=document.getElementById('open1');
const model_container=document.getElementById('model-container');
const model_container1=document.getElementById('model-container1');
const close=document.getElementById('close');
const close1=document.getElementById('close1');

open.addEventListener('click',()=>{
    model_container.classList.add('show');
});
open1.addEventListener('click',()=>{
    model_container1.classList.add('show');
});
close.addEventListener('click',()=>{
    model_container.classList.remove('show');
});
close1.addEventListener('click',()=>{
    model_container1.classList.remove('show');
});

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>0);
});

let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

const sr=ScrollReveal({
    distance:'45px',
    duration:2700,
    reset:true
    
})

sr.reveal('.home-text',{delay:300,origin:'left'})
sr.reveal('.home-img',{delay:300,origin:'right'})
sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:100,origin:'bottom'})

var typed =new Typed(".typing",{
    strings:["Web Designer","Web Developer","Embedded Sytem Designer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})