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

const popupInfo = [
  {
    id: 1,
    name: 'Tonic',
    info: {
      info1: 'CANOPY',
      info2: 'Back End Dev',
      info3: 2015
    },
    screenshot: 'img/snapshot.svg',
    popupScreenshot: 'img/popup_snapshot.svg',
    mobileScreenshot: 'img/Tonic.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    languages: ['html', 'css', 'javascript'],
    liveLink: 'https://www.google.com',
    sourceLink: 'https://www.google.com'
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    info: {
      info1: 'CANOPY',
      info2: 'Back End Dev',
      info3: 2015
    },
    screenshot: 'img/snapshot2.svg',
    popupScreenshot: 'img/popup_snapshot.svg',
    mobileScreenshot: 'img/multipoststories.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    languages: ['html', 'css', 'javascript'],
    liveLink: 'https://www.google.com/',
    sourceLink: 'https://www.google.com/'
  },
  {
    id: 3,
    name: 'Facebook 360',
    info: {
      info1: 'CANOPY',
      info2: 'Back End Dev',
      info3: 2015
    },
    screenshot: 'img/snapshot3.svg',
    popupScreenshot: 'img/popup_snapshot.svg',
    mobileScreenshot: 'img/Tonic2.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    languages: ['html', 'css', 'javascript'],
    liveLink: 'https://www.google.com/',
    sourceLink: 'https://www.google.com/'
  },
  {
    id: 4,
    name: 'Uber Navigation',
    info: {
      info1: 'CANOPY',
      info2: 'Back End Dev',
      info3: 2015
    },
    screenshot: 'img/snapshot4.svg',
    popupScreenshot: 'img/popup_snapshot.svg',
    mobileScreenshot: 'img/multipoststories2.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the release',
    languages: ['html', 'css', 'javascript'],
    liveLink: 'https://www.google.com/',
    sourceLink: 'https://www.google.com/'
  }
]

document.querySelector('.desktop_projects').innerHTML = popupInfo.map((data) =>
  `
  <section class="desktop_projects">
      <div class="project_1">
          <div class="project1_img">
              <img src="${data.screenshot}" alt="snapshot" class="desktop_screenshot">
              <img src="${data.mobileScreenshot}" alt="snapshot" class="mobile_screenshot">
          </div>
          <div class="desktop_project_1_content">

              <h3 class="project_name">${data.name}</h3>

              <ul class="tonic_list">
                  <li class="CANOPY">${data.info.info1}</li>
                  <li> <img class="counter" src="img/Counter.png" alt="counter"> </li>
                  <li> ${data.info.info2}</li>
                  <li> <img class="counter" src="img/Counter.png" alt="counter"> </li>
                  <li> ${data.info.info3} </li>
              </ul>
              <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>

              <div class="small_buttons">
                  <ul class="button_list">
                      <li class="language_descriptor">${data.languages[0]}</li>
                      <li class="language_descriptor">${data.languages[1]}</li>
                      <li class="language_descriptor">${data.languages[2]}</li>
                  </ul>
              </div>

              <button class="see_project" id="see_project" type="submit" onclick="viewProject(${data.id})">See Project</button>
          </div>

      </div>

      `).join('')

document.getElementsByClassName('.see_project').onclick = function () { viewProject(this.id) }

function viewProject (id) {
  popupInfo.map((data) => {
    if (id === data.id) {
      document.getElementById('post').innerHTML =
        ` <aside id="works_popup">
        <div class="project1_popup">
            <div class="project1_popup_container">
                <div class="popup_header">
                    <h3 class="popup_title">${data.name}</h3>
                    <div>
                        <button type="button" id="close_project_popup">X</button>
                    </div>
                </div>
                <ul class="tonic_list">
                    <li class="popup_CANOPY_desktop CANOPY">${data.info.info1}</li>
                    <li> <img class="counter" src="img/Counter.png" alt="counter" /> ${data.info.info2}</li>
                    <li class="popup_li1_desktop"></li>
                    <li> <img class="counter" src="img/Counter.png" alt="counter" />${data.info.info3}</li>
                    <li class="popup_li2_desktop"></li>
                </ul>
                <div class="project1_img">
                    <img src="${data.popupScreenshot}" alt="multi-post-stories" class="popup_img_desktop"/>
                    <img src="${data.mobileScreenshot}" alt="multi-post-stories" class="popup_img_mobile"/>
                </div>

                <div class="desktop_popup_positioner">
                    <div class="popup_description_desktop_container">
                        <p class="popup_description_desktop">${data.description}</p>
                    </div>

                    <div>
                        <div class="small_button_project1_popup">
                            <ul class="button_list">
                                <li class="language_descriptor language_descriptor1_desktop">${data.languages[0]}</li>
                                <li class="language_descriptor language_descriptor2_desktop">${data.languages[1]}</li>
                                <li class="language_descriptor
                            language_descriptor3_desktop">${data.languages[2]}</li>
                            </ul>
                        </div>

                        <img src="img/mobile_popup_seperator.png" alt="seperator" class="mobile_popup_seperator" />
                        <div class="project1_popup_buttons">
                            <div class="see_live_container">
                                <a href="${data.liveLink}" class="live_link" type="button">See live <img
                                        src="img/see_live.png" alt="see_live_icon"></a>
                            </div>
                            <div class="see_source_container">
                                <a href="${data.sourceLink}"class="source_link" type="button">See Source <img
                                        src="img/see_source.png" alt="github_logo"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </aside> `
    }
  }).join('')

  const closeButton = document.getElementById('close_project_popup')
  const empty = ''

  closeButton.addEventListener('click', () => {
    if (toggleMenu === false) {
      document.getElementById('post').innerHTML = empty
    }
  })
}
