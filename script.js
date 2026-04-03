let burger = document.querySelector('.burger');
burger.addEventListener('click',start);

let menu = document.querySelector("ul");

function start(){
    burger.classList.toggle('active');

    menu.classList.toggle('show');
}

let header = document.querySelector('header');
let main = document.querySelector('main');
let footer = document.querySelector('footer');
let newsa1 = document.querySelector('.newsaa1');
let newsa2 = document.querySelector('.newsaa2');
let newsa3 = document.querySelector('.newsaa3');
let newsa4 = document.querySelector('.newsaa4');
let pblack = document.querySelectorAll('.pblack');
let p = document.querySelectorAll('p');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let input = document.querySelector('.theme');
let condition = false;
input.addEventListener('click',night);
function night(){
    if(condition == false){
        header.style.backgroundColor = "black";
        main.style.backgroundColor = "black";
        footer.style.backgroundColor = "black";
        pblack.forEach((e)=>{
            e.style.color = "white";
        })
        newsa1.style.backgroundColor = "black";
        newsa2.style.backgroundColor = "black";
        newsa3.style.backgroundColor = "black";
        newsa4.style.backgroundColor = "black";
        p.forEach((e)=>{
            e.style.color = "white";
        })
        condition = true;
    }
    else{
        header.style.backgroundColor = "#00B227";
        main.style.backgroundColor = "white";
        footer.style.backgroundColor = "#00B227";
        pblack.forEach((e)=>{
            e.style.color = "black";
        })
        newsa1.style.backgroundColor = "white";
        newsa2.style.backgroundColor = "white";
        newsa3.style.backgroundColor = "white";
        newsa4.style.backgroundColor = "white";
        p.forEach((e)=>{
            e.style.color = "black";
        })
        condition = false;
    }
}
