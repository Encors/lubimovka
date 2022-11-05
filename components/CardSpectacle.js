class CardSpectacle {
  constructor({ title, link, date, time, playwright, about }, templateSelector) {
    this._title = title;
    this._link = link;
    this._date = date;
    this._time = time;
    this._playwright = playwright;
    this._about = about;
    this._selectors = {
      templateSelector: templateSelector,
      listItemSelector: '.spectacle__item',
      titleSelector: '.card-spectacle__title',
      imageSelector: '.card-spectacle__image',
      dateSelector: '.card-spectacle__date',
      timeSelector: '.card-spectacle__time',
      playwrightSelector: '.card-spectacle__playwright',
      aboutSelector: '.card-spectacle__about'
    };

  }

  _getTemplate() {
    const template = document
      .querySelector(this._selectors.templateSelector)
      .content
      .querySelector(this._selectors.listItemSelector)
      .cloneNode(true);

    return template;
  }

  createCard() {
    this._card = this._getTemplate();
    this._cardTitle = this._card.querySelector(this._selectors.titleSelector);
    this._cardImage = this._card.querySelector(this._selectors.imageSelector);
    this._cardDate = this._card.querySelector(this._selectors.dateSelector);
    this._cardTime = this._card.querySelector(this._selectors.timeSelector);
    this._cardPlaywright = this._card.querySelector(this._selectors.playwrightSelector);
    this._cardAbout = this._card.querySelector(this._selectors.aboutSelector);

    this._cardTitle.textContent = this._title;
    this._cardImage.style.backgroundImage = 'url(' + this._link + ')';
    this._cardDate.textContent = this._date;
    this._cardTime.textContent = this._time;
    this._cardPlaywright.textContent = this._playwright;
    this._cardAbout.textContent = this._about;

    return this._card;
  }
}

export default CardSpectacle;
