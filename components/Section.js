class Section {
  constructor({ renderer, containerSelector }) {
    this.renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(item) {
    this._container.append(item);
  }

  renderItems(items) {
    items.forEach(item => {
      this.renderer(item);
    });
  }

  addClass(selector) {
    this._container.classList.add(selector);
  }
}

export default Section;
