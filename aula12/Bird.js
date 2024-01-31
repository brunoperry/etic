import Animal from "./Animal.js";

export default class Bird extends Animal {

    #canFly;
    constructor(data, callback) {
        super(data, callback);

        this.#canFly = data.canFly;
    }

    fly() {
        return this.#canFly ? 
        this.introduce() + " and I can fly" :
        this.introduce() + " and I can't fly";
    }
}