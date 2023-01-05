let showmenu = document.getElementById("menu");
let sideMenu = document.getElementById("sideMenu");
let closeMenu = document.getElementById("closeMenu");
showmenu.addEventListener("click", ()=>{
    sideMenu.style.display = "block";
})
closeMenu.addEventListener("click", ()=>{
    sideMenu.style.display = "none"
})