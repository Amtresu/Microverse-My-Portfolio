let hamburgerMenu = document.getElementById("menu_icon");
let popupWindow = document.getElementById("popup_window");
let closePopupWindow = document.getElementById("close_popup");
let toggleMenu = false;
let closePopupWindowFunction = false;

hamburgerMenu.addEventListener("click", function() {
    if(toggleMenu === false){
        popupWindow.style.visibility = "visible";
    }
});

  
closePopupWindow.addEventListener("click", function(){
    if(toggleMenu === false){
        popupWindow.style.visibility = "hidden"; 
    }
});

let navMenuButton= document.querySelector('.popup_menu');

navMenuButton.addEventListener("click", function(){
    if(toggleMenu=== false){
        popupWindow.style.visibility = "hidden";
    }
});