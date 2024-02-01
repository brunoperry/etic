import Animal from "./Animal.js";

export default class Fish extends Animal {

    #isfreshWater;
    constructor(data, callback) {
        super(data, callback);

        this.#isfreshWater = data.isFreshWater;
    }

    introduce() {
        let parentIntroduce = super.introduce();

        return this.#isfreshWater ? 
        parentIntroduce + " and I live in a lake" :
        parentIntroduce + " and I live in the ocean"
    }
}