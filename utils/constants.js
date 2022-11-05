export const spectacles = [
  {
    title: 'МАМА',
    link: new URL('../images/event-image-1.png', import.meta.url),
    date: '15 декабря',
    time: '11:00',
    playwright: 'Драматург: Ольга Казакова Режиссёр: Катя Ганюшина',
    about: 'читка проекта Любимовка.Ещё'
  },
  {
    title: 'Про линя',
    link: new URL('../images/event-image-2.png', import.meta.url),
    date: '15 декабря',
    time: '11:00',
    playwright: 'Драматург: Ольга Казакова Режиссёр: Катя Ганюшина',
    about: 'читка проекта Любимовка.Ещё'
  },
  {
    title: 'МАМА',
    link: new URL('../images/event-image-1.png', import.meta.url),
    date: '15 декабря',
    time: '11:00',
    playwright: 'Драматург: Ольга Казакова Режиссёр: Катя Ганюшина',
    about: 'читка проекта Любимовка.Ещё'
  },
  {
    title: 'Про линя',
    link: new URL('../images/event-image-2.png', import.meta.url),
    date: '15 декабря',
    time: '11:00',
    playwright: 'Драматург: Ольга Казакова Режиссёр: Катя Ганюшина',
    about: 'читка проекта Любимовка.Ещё'
  },
  {
    title: 'МАМА',
    link: new URL('../images/event-image-1.png', import.meta.url),
    date: '15 декабря',
    time: '11:00',
    playwright: 'Драматург: Ольга Казакова Режиссёр: Катя Ганюшина',
    about: 'читка проекта Любимовка.Ещё'
  },
];

export const selectors = {
  sectionSpectacleSelector:'.spectacle',
  sectionSpectacleClass:'spectacle',
  sectionSpectacleCountTwoThreeClass:'spectacle_count_two-three',
  sectionSpectacleCountOneClass:'spectacle_count_one',
  titleSelector: '.section-title_place_spectacle',
  titleCountOneClass: 'section-title_place_spectacle-one',
  containerSelector: '.spectacle__list',
  containerCountThreeClass: 'spectacle__list_count_three',
  containerCountTwoClass: 'spectacle__list_count_two',
  containerCountOneClass: 'spectacle__list_count_one',
  templateSelector: '#template-card-spectacle',
};

export const sectionSpectacle = document.querySelector(selectors.sectionSpectacleSelector);
export const titleSpectacle = document.querySelector(selectors.titleSelector);
export const mediaQuery = window.matchMedia('(max-width: 980px)');
