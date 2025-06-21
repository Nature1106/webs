const icon=document.querySelector(".menu-img");

icon.addEventListener("click",()=>{
    const menu=document.querySelector(".menu");
    const header=document.querySelector("header");
    if(menu.style.display=="none"){
        // header.style.gap="7vw";
        menu.style.display="flex";
        // menu.style.al="center";
        // menu.style.fontSize="4vw";
        // // menu.style.flexWrap="wrap";
    }
    else
        menu.style.display="none";
});
