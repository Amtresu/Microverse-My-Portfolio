const hamburgerMenu = document.getElementById('menu_icon')
const popupWindow = document.getElementById('popup_window')
const closePopupWindow = document.getElementById('close_popup')
const toggleMenu = false

hamburgerMenu.addEventListener('click', () => {
  if (toggleMenu === false) {
    popupWindow.style.visibility = 'visible'
  }
})

closePopupWindow.addEventListener('click', () => {
  if (toggleMenu === false) {
    popupWindow.style.visibility = 'hidden'
  }
})

const navMenuButton = document.querySelector('.popup_menu')

navMenuButton.addEventListener('click', () => {
  if (toggleMenu === false) {
    popupWindow.style.visibility = 'hidden'
  }
})

const worksPopup = [
  {
     id: 1,
     name: 'Tonic',
     img: '',
     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
     languages: ['html', 'css', 'javascript'],
     live: 'https://www.google.com',
     source: 'https://www.google.com'
  },
  {
     id: 2,
     name: 'Multi-Post Stories',
     img: '',
     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
     languages: ['html', 'css', 'Ruby on rails', 'javascript'],
     live: 'https://www.google.com',
     source: 'https://www.google.com'
  },
  {
     id: 3,
     name: 'Facebook 360',
     img: '',
     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
     languages: ['html', 'css', 'Ruby on rails', 'javascript'],
     liveLink: 'https://www.google.com',
     sourceLink: 'https://www.google.com'
  },
  {
     id: 4,
     name: 'Uber',
     img: '',
     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
     languages: ['html', 'css', 'javascript', 'Ruby on rails'],
     live: 'https://www.google.com/',
     source: 'https://www.google.com/'
  }
]

const popup = `<aside id="works_popup_desktop">
<div class="project1_popup">
    <div class="project1_popup_container">
        <div class="popup_header">
            <h3 class="project1_title_popup_desktop">${worksPopup.name}</h3>
            <div>
                <button type="button" id="close_project_popup_desktop">X</button>
            </div>
        </div>
        <ul class="tonic_list">
            <li class="popup_canopy_desktop canopy"></li>
            <li> <img class="counter" src="img/Counter.png" alt="counter" /> </li>
            <li class="popup_li1_desktop"></li>
            <li> <img class="counter" src="img/Counter.png" alt="counter" /></li>
            <li class="popup_li2_desktop"></li>
        </ul>
        <div class="project1_img">
            <img src="${worksPopup.img}" alt="multi-post-stories" class="popup_img_desktop" />
        </div>

        <div class="desktop_popup_positioner">
            <div class="popup_description_desktop_container">
                <p class="popup_description_desktop">${worksPopup.description}</p>
            </div>

            <div>
                <div class="small_button_project1_popup">
                    <ul class="button_list">
                        <li class="language_descriptor language_descriptor1_desktop">${worksPopup.languages}</li>
                        <li class="language_descriptor language_descriptor2_desktop">${worksPopup.languages}</li>
                        <li class="language_descriptor
                    language_descriptor3_desktop">${worksPopup.languages}</li>
                    </ul>
                    <ul class="button_list">
                        <li class="language_descriptor
                    language_descriptor4_desktop">${worksPopup.languages}</li>
                        <li class="language_descriptor
                    language_descriptor5_desktop">${worksPopup.languages}</li>
                        <li class="language_descriptor
                    language_descriptor6_desktop">${worksPopup.languages}</li>
                    </ul>
                </div>

                <img src="img/mobile_popup_seperator.png" alt="seperator" class="mobile_popup_seperator" />
                <div class="project1_popup_buttons">
                    <div class="see_live_container">
                        <button class="see_project_mobile_popup1" type="button">See live <img
                                src="img/see_live.png" alt="see_live_icon"></button>
                    </div>
                    <div class="see_source_container">
                        <button class="see_project_mobile_popup2" type="button">See Source <img
                                src="img/see_source.png" alt="github_logo"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</aside>`

const seeProject = document.getElementById('see_project')

seeProject.addEventListener('click', () => {
  if (toggleMenu === false) {
    document.getElementById('post').innerHTML = popup
  }
})
