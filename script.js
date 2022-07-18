const hamburgerMenu = document.getElementById('menu_icon');
const popupWindow = document.getElementById('popup_window');
const closePopupWindow = document.getElementById('close_popup');
const toggleMenu = false;

hamburgerMenu.addEventListener('click', () => {
  if (toggleMenu === false) {
    popupWindow.style.visibility = 'visible';
    }
});

closePopupWindow.addEventListener('click', () => {
  if (toggleMenu === false) {
    popupWindow.style.visibility = 'hidden';
    }
});

const navMenuButton = document.querySelector('.popup_menu');

navMenuButton.addEventListener('click', () => {
  if (toggleMenu === false) {
    popupWindow.style.visibility = 'hidden';
    }
});