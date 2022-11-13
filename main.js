const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-solid-fa-sun')){
        body.style.background ='#fafafa';
        body.style.color ='#2b2d25';
        body.style.transition ='2s';
    }else{
        body.style.background='#2b2d25';
        body.style.color ='#fffff0';
        body.style.transition = '2s';
    }
});

            // 글씨 슬라이드
let mainText = document.querySelector("h2")

window.addEventListener('scroll', function(){
    let value = window.scrollY
    console.log("scrollY");

    if(value > 300){
        mainText.style.animation='disapper 1s ease-out forwards'
    }else{
        mainText.style.animation='slide 1s ease-out'
    }
});

let mainText2 = document.querySelector("p")

window.addEventlistener('scroll', function(){
    let value = window.scrollY
    console.log("scrollY");
    
    if(value > 300){
        mainText2.style.animation='disapper 1s ease-out forwards'
    }else{
        mainText2.style.animation='slide 1s ease-out'
    }
});