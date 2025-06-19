const nav=document.querySelector("nav");

nav.addEventListener("click",()=>{
    const left=document.querySelector(".left");
    if(left.style.display=="none"){
        left.style.display="flex";
        left.style.flexWrap="wrap";
    }
    else
        left.style.display="none";
});
