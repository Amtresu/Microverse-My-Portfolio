const hamburgerMenu = document.getElementById('menu_icon');
const popupWindow = document.getElementById('popup_window');
const closePopupWindow = document.getElementById('close_popup');
const toggleMenu = false;
const closePopupWindowFunction = false;

hamburgerMenu.addEventListener('click', function (openMenu) {
  if(toggleMenu === false){
     popupWindow.style.visibility = 'visible';
    }
});

  
closePopupWindow.addEventListener('click', function (closeMenu){
    if(toggleMenu === false){
        popupWindow.style.visibility = 'hidden'; 
    }
});

const navMenuButton= document.querySelector('.popup_menu');

navMenuButton.addEventListener('click', function (closeMenu){
    if(toggleMenu=== false){
        popupWindow.style.visibility = 'hidden';
    }
});