export default class Vehicle {
  speed = 10;
  brand;
  imagePath;

  #image;

  constructor(data) {

    this.speed = data.speed;
    this.brand = data.brand;
    this.imagePath = data.image;

    this.build();
  }

  build() {
    this.#image = document.createElement("img");
    this.#image.src = this.imagePath;

    document.body.appendChild(this.#image);
  }

  destroy() {
    document.body.removeChild(this.#image);
  }
}
