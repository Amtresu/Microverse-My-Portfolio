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

<<<<<<< Updated upstream
=======
//Cards

>>>>>>> Stashed changes
const worksPopup = {
  name: ['Tonic', 'Multi Post', 'Facebook 360', 'Uber Navigation'],
  details: ['CANOPY', 'back end dev', '2015'],
  description:[ `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
  been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
  galley of type and scrambled it to make a type specimen book. It has survived not only five
  centuries, but also the leap into electronic typesetting, remaining essent,`,`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,'Hello There world'],
  img: ['img/tonic.png', 'img/multipoststories.png','img/popup_snapshot.svg '],
  languages: ['html', 'css', 'javascript','github','ruby','bootstrap'],
  seeSource: 'https: //www.google.com/',
  seeLive: 'https://www.google.com/',
}
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
const seeProjectTonic = document.querySelector('.see_project_tonic');
const PopupMobile = document.getElementById('works_popup_mobile');
const PopupDesktop = document.getElementById('works_popup_desktop');
const closePopup = document.getElementById('close_project_popup');
const closePopupDesktop = document.getElementById('close_project_popup_desktop')
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
seeProjectTonic.addEventListener('click', () =>{
  if (toggleMenu === false) {
    PopupMobile.style.visibility = 'visible';
    document.querySelector('.project1_title_popup').innerHTML = worksPopup.name[0];
    document.querySelector('.popup_canopy').innerHTML = worksPopup.details[0];
    document.querySelector('.popup_li1').innerHTML = worksPopup.details[1];
    document.querySelector('.popup_li2').innerHTML = worksPopup.details[2];
    document.querySelector('.popup_img').src = worksPopup.img[0];
    document.querySelector('.popup_description').innerHTML = worksPopup.description[2];
    document.querySelector('.language_descriptor1').innerHTML = worksPopup.languages[0];
    document.querySelector('.language_descriptor2').innerHTML = worksPopup.languages[1];
    document.querySelector('.language_descriptor3').innerHTML = worksPopup.languages[2];
 }
});
<<<<<<< Updated upstream
closePopup.addEventListener('click', () =>{
  if (toggleMenu === false) {
    PopupMobile.style.visibility = 'hidden';
=======

closePopup.addEventListener('click', () =>{
  if (toggleMenu === false) {
    PopupMobile.style.visibility = 'hidden';
 
>>>>>>> Stashed changes
}
});
closePopupDesktop.addEventListener('click', () =>{
  if (toggleMenu === false) {
    PopupDesktop.style.visibility = 'hidden';
<<<<<<< Updated upstream
}
});
const seeProjectTonic2 = document.querySelector('.see_project_tonic2')
=======
 
}
});

const seeProjectTonic2 = document.querySelector('.see_project_tonic2')

>>>>>>> Stashed changes
seeProjectTonic2.addEventListener('click', () =>{
  if (toggleMenu === false) {
    PopupMobile.style.visibility = 'visible';
    document.querySelector('.project1_title_popup').innerHTML = worksPopup.name[0];
    document.querySelector('.popup_canopy').innerHTML = worksPopup.details[0];
    document.querySelector('.popup_li1').innerHTML = worksPopup.details[1];
    document.querySelector('.popup_li2').innerHTML = worksPopup.details[2];
    document.querySelector('.popup_img').src = worksPopup.img[0];
    document.querySelector('.popup_description').innerHTML = worksPopup.description[0];
    document.querySelector('.language_descriptor1').innerHTML = worksPopup.languages[0];
    document.querySelector('.language_descriptor2').innerHTML = worksPopup.languages[1];
    document.querySelector('.language_descriptor3').innerHTML = worksPopup.languages[2];
 }
});
<<<<<<< Updated upstream
const seeProjectMulti = document.querySelector('.see_project_multipoststories')
=======


const seeProjectMulti = document.querySelector('.see_project_multipoststories')

>>>>>>> Stashed changes
seeProjectMulti.addEventListener('click', () =>{
  if (toggleMenu === false) {
    PopupMobile.style.visibility = 'visible';
    document.querySelector('.project1_title_popup').innerHTML = worksPopup.name[1];
    document.querySelector('.popup_canopy').innerHTML = worksPopup.details[0];
    document.querySelector('.popup_li1').innerHTML = worksPopup.details[1];
    document.querySelector('.popup_li2').innerHTML = worksPopup.details[2];
    document.querySelector('.popup_img').src = worksPopup.img[1];
    document.querySelector('.popup_description').innerHTML = worksPopup.description[0];
    document.querySelector('.language_descriptor1').innerHTML = worksPopup.languages[0];
    document.querySelector('.language_descriptor2').innerHTML = worksPopup.languages[1];
    document.querySelector('.language_descriptor3').innerHTML = worksPopup.languages[2];
 }
});
<<<<<<< Updated upstream
const seeProjectMulti2 = document.querySelector('.see_project_multipoststories2')
=======

const seeProjectMulti2 = document.querySelector('.see_project_multipoststories2')

>>>>>>> Stashed changes
seeProjectMulti2.addEventListener('click', () =>{
  if (toggleMenu === false) {
    PopupMobile.style.visibility = 'visible';
    document.querySelector('.project1_title_popup').innerHTML = worksPopup.name[1];
    document.querySelector('.popup_canopy').innerHTML = worksPopup.details[0];
    document.querySelector('.popup_li1').innerHTML = worksPopup.details[1];
    document.querySelector('.popup_li2').innerHTML = worksPopup.details[2];
    document.querySelector('.popup_img').src = worksPopup.img[1];
    document.querySelector('.popup_description').innerHTML = worksPopup.description[0];
    document.querySelector('.language_descriptor1').innerHTML = worksPopup.languages[0];
    document.querySelector('.language_descriptor2').innerHTML = worksPopup.languages[1];
    document.querySelector('.language_descriptor3').innerHTML = worksPopup.languages[2];
 }
});
<<<<<<< Updated upstream
//Desktop
const seeProjectDesktop1 = document.querySelector('.see_project_tonic_desktop1')
=======

//Desktop

const seeProjectDesktop1 = document.querySelector('.see_project_tonic_desktop1')

>>>>>>> Stashed changes
seeProjectDesktop1.addEventListener('click', () =>{
  if (toggleMenu === false) {
    PopupDesktop.style.visibility = 'visible';
    document.querySelector('.project1_title_popup_desktop').innerHTML = worksPopup.name[0];
    document.querySelector('.popup_canopy_desktop').innerHTML = worksPopup.details[0];
    document.querySelector('.popup_li1_desktop').innerHTML = worksPopup.details[1];
    document.querySelector('.popup_li2_desktop').innerHTML = worksPopup.details[2];
    document.querySelector('.popup_img_desktop').src = worksPopup.img[2];
    document.querySelector('.popup_description_desktop').innerHTML = worksPopup.description[1];
    document.querySelector('.language_descriptor1_desktop').innerHTML = worksPopup.languages[0];
    document.querySelector('.language_descriptor2_desktop').innerHTML = worksPopup.languages[1];
    document.querySelector('.language_descriptor3_desktop').innerHTML = worksPopup.languages[2];
    document.querySelector('.language_descriptor4_desktop').innerHTML = worksPopup.languages[3];
    document.querySelector('.language_descriptor5_desktop').innerHTML = worksPopup.languages[4];
    document.querySelector('.language_descriptor6_desktop').innerHTML = worksPopup.languages[5];
 }
});
<<<<<<< Updated upstream
const seeProjectDesktop2 = document.querySelector('.see_project_tonic_desktop2')
=======

const seeProjectDesktop2 = document.querySelector('.see_project_tonic_desktop2')

>>>>>>> Stashed changes
seeProjectDesktop2.addEventListener('click', () =>{
  if (toggleMenu === false) {
    PopupDesktop.style.visibility = 'visible';
    document.querySelector('.project1_title_popup_desktop').innerHTML = worksPopup.name[1];
    document.querySelector('.popup_canopy_desktop').innerHTML = worksPopup.details[0];
    document.querySelector('.popup_li1_desktop').innerHTML = worksPopup.details[1];
    document.querySelector('.popup_li2_desktop').innerHTML = worksPopup.details[2];
    document.querySelector('.popup_img_desktop').src = worksPopup.img[2];
    document.querySelector('.popup_description_desktop').innerHTML = worksPopup.description[1];
    document.querySelector('.language_descriptor1_desktop').innerHTML = worksPopup.languages[0];
    document.querySelector('.language_descriptor2_desktop').innerHTML = worksPopup.languages[1];
    document.querySelector('.language_descriptor3_desktop').innerHTML = worksPopup.languages[2];
    document.querySelector('.language_descriptor4_desktop').innerHTML = worksPopup.languages[3];
    document.querySelector('.language_descriptor5_desktop').innerHTML = worksPopup.languages[4];
    document.querySelector('.language_descriptor6_desktop').innerHTML = worksPopup.languages[5];
 }
});
<<<<<<< Updated upstream
const seeProjectDesktop3 = document.querySelector('.see_project_tonic_desktop3')
=======


const seeProjectDesktop3 = document.querySelector('.see_project_tonic_desktop3')

>>>>>>> Stashed changes
seeProjectDesktop3.addEventListener('click', () =>{
  if (toggleMenu === false) {
    PopupDesktop.style.visibility = 'visible';
    document.querySelector('.project1_title_popup_desktop').innerHTML = worksPopup.name[2];
    document.querySelector('.popup_canopy_desktop').innerHTML = worksPopup.details[0];
    document.querySelector('.popup_li1_desktop').innerHTML = worksPopup.details[1];
    document.querySelector('.popup_li2_desktop').innerHTML = worksPopup.details[2];
    document.querySelector('.popup_img_desktop').src = worksPopup.img[2];
    document.querySelector('.popup_description_desktop').innerHTML = worksPopup.description[1];
    document.querySelector('.language_descriptor1_desktop').innerHTML = worksPopup.languages[0];
    document.querySelector('.language_descriptor2_desktop').innerHTML = worksPopup.languages[1];
    document.querySelector('.language_descriptor3_desktop').innerHTML = worksPopup.languages[2];
    document.querySelector('.language_descriptor4_desktop').innerHTML = worksPopup.languages[3];
    document.querySelector('.language_descriptor5_desktop').innerHTML = worksPopup.languages[4];
    document.querySelector('.language_descriptor6_desktop').innerHTML = worksPopup.languages[5];
 }
});
<<<<<<< Updated upstream
const seeProjectDesktop4 = document.querySelector('.see_project_tonic_desktop4')
=======


const seeProjectDesktop4 = document.querySelector('.see_project_tonic_desktop4')

>>>>>>> Stashed changes
seeProjectDesktop4.addEventListener('click', () =>{
  if (toggleMenu === false) {
    PopupDesktop.style.visibility = 'visible';
    document.querySelector('.project1_title_popup_desktop').innerHTML = worksPopup.name[3];
    document.querySelector('.popup_canopy_desktop').innerHTML = worksPopup.details[0];
    document.querySelector('.popup_li1_desktop').innerHTML = worksPopup.details[1];
    document.querySelector('.popup_li2_desktop').innerHTML = worksPopup.details[2];
    document.querySelector('.popup_img_desktop').src = worksPopup.img[2];
    document.querySelector('.popup_description_desktop').innerHTML = worksPopup.description[1];
    document.querySelector('.language_descriptor1_desktop').innerHTML = worksPopup.languages[0];
    document.querySelector('.language_descriptor2_desktop').innerHTML = worksPopup.languages[1];
    document.querySelector('.language_descriptor3_desktop').innerHTML = worksPopup.languages[2];
    document.querySelector('.language_descriptor4_desktop').innerHTML = worksPopup.languages[3];
    document.querySelector('.language_descriptor5_desktop').innerHTML = worksPopup.languages[4];
    document.querySelector('.language_descriptor6_desktop').innerHTML = worksPopup.languages[5];
 }
});
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
