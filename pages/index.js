//горизонтальный скролл секции plays
const scrollBlock = document.querySelector('.plays__container');

function scrollHorizontally(e) {
  e = window.event || e;
  let delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
  document.querySelector('.plays__container').scrollLeft -= delta * 35;
  if (this.scrollWeight - this.scrollLeft === this.clientWeight) {
    e.preventDefault();
  } else if (this.scrollWeight - this.scrollRight === this.clientWeight) {
    e.preventDefault();
  }
}
if (document.querySelector('.plays__container').addEventListener) {
  // IE9, Chrome, Safari, Opera
  document
    .querySelector('.plays__container')
    .addEventListener('mousewheel', scrollHorizontally, false);
  // Firefox
  document
    .querySelector('.plays__container')
    .addEventListener('DOMMouseScroll', scrollHorizontally, false);
} else {
  // IE 6/7/8
  document
    .querySelector('.plays__container')
    .attachEvent('onmousewheel', scrollHorizontally);
}

scrollHorizontally();

import CardSpectacle from '../components/CardSpectacle.js';
import Section from '../components/Section.js';

import {
  spectacles,
  selectors,
  sectionSpectacle,
  titleSpectacle,
  mediaQuery,
} from '../utils/constants.js';

function createCardSpectacle({ title, link, date, time, playwright, about }) {
  const card = new CardSpectacle(
    {
      title: title,
      link: link,
      date: date,
      time: time,
      playwright: playwright,
      about: about,
    },
    selectors.templateSelector
  );

  return card.createCard();
}

const spectaclesList = new Section({
  renderer: (item) => {
    const spectacleItem = createCardSpectacle(item);
    spectaclesList.addItem(spectacleItem);
  },
  containerSelector: selectors.containerSelector,
});
spectaclesList.renderItems(spectacles);

const spectacleItems = document.querySelectorAll('.spectacle__item');

function changeStyleToMobile(event) {
  if (!event.matches && spectacles.length >= 3) {
    sectionSpectacle.classList.add(
      selectors.sectionSpectacleCountTwoThreeClass
    );
    titleSpectacle.textContent =
      'Заголовок блока с\u00A0тремя\u00A0и\u00A0более спектаклями';
    spectaclesList.addClass(selectors.containerCountThreeClass);
  } else if (!event.matches && spectacles.length === 2) {
    sectionSpectacle.classList.add(
      selectors.sectionSpectacleCountTwoThreeClass
    );
    titleSpectacle.textContent =
      'Заголовок блока\u00A0с\u00A0двумя спектаклями';
    spectaclesList.addClass(selectors.containerCountTwoClass);
  } else if (!event.matches && spectacles.length === 1) {
    sectionSpectacle.classList.add(selectors.sectionSpectacleCountOneClass);
    titleSpectacle.textContent = 'Заголовок блока с\u00A0одним спектаклем';
    titleSpectacle.classList.add(selectors.titleCountOneClass);
    spectaclesList.addClass(selectors.containerCountOneClass);
  } else if (event.matches) {
    sectionSpectacle.className = selectors.sectionSpectacleClass;
    titleSpectacle.textContent =
      'Заголовок блока со\u00A0спектаклями любое количество';
    titleSpectacle.className = 'section-title section-title_place_spectacle';
    spectaclesList.className = 'spectacle__list list';
    window.removeEventListener('resize', renderSpectaclesList);
    spectacleItems.forEach((item) => {
      item.classList.add('spectacle__item');
      item.style.width = '';
    });
  }
  if (!event.matches) {
    renderSpectaclesList();
    window.addEventListener('resize', renderSpectaclesList);
  }
}
changeStyleToMobile(mediaQuery);

function renderSpectaclesList() {
  spectacleItems.forEach((item, index) => {
    item.classList.remove('spectacle__item');
    if (
      spectacleItems[index - 1] &&
      item.getBoundingClientRect().right >=
        spectacleItems[index - 1].getBoundingClientRect().right
    ) {
      item.classList.remove('spectacle__item');
      spectacleItems[index - 1].classList.add('spectacle__item');

      if (
        spectacleItems[index - 1].getBoundingClientRect().right + 450 >
        document.documentElement.clientWidth
      ) {
        spectacleItems[index - 1].classList.remove('spectacle__item');
        spectacleItems[index - 1].style.width = 450 + 'px';
      }
    }
  });
}

mediaQuery.addEventListener('change', changeStyleToMobile);
