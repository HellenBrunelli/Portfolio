const btnMobile = document.getElementById("btn-mobile");

btnMobile.addEventListener("click", function(){
    const menu = document.getElementById("menu");
    menu.style.display="block";
})

const btnClose = document.getElementById("btn-close");

btnClose.addEventListener("click", function(){
    const menu = document.getElementById("menu");
    menu.style.display="none"; 
})