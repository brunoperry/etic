export default class Vehicle {
  speed = 10;
  brand;

  constructor(data) {

    this.speed = data.speed;
    this.brand = data.brand;
  }
}
