const menu=document.querySelector(".menu");

menu.addEventListener("click",()=>{
    const menuOption=document.querySelector(".menu-option");
    if(menuOption.style.display=="none"){
        menuOption.style.display="flex";
        menuOption.style.flexWrap="wrap";
    }
    else
        menuOption.style.display="none";
});
