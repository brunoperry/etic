import Feeder from "./Feeder.js";

export default class Animal {

    #callback;
    #imageElem;
    #data;
    constructor(data, callback) {

        this.#data = data;
        this.#callback = callback;

        this.#buildAnimalElement();
    }

    #buildAnimalElement() {

        const feeder = new Feeder();

        const div = document.createElement("div");
        div.className = "animal-container";

        const feedButton = document.createElement("button");
        feedButton.onclick = () => feeder.reset();
        feedButton.innerText = "Feed";

        this.#imageElem = document.createElement("img");
        this.#imageElem.src = this.#data.image;
        this.#imageElem.onclick = () => this.#callback();

        const container = document.querySelector("#images-container");

        div.appendChild(this.#imageElem);
        div.appendChild(feeder.view);
        div.appendChild(feedButton);
        container.appendChild(div);
    }

    introduce() {
        return "Hello, I'm a " + this.#data.name;
    }

    /**
     * GETTERS / SETTERS
     */
    get type() {
        return this.#data.type;
    }
    get image() {
        return this.#data.image;
    }

    get name() {
        return this.#data.name;
    }
    set name(value) {
        this.#data.name = value;
    }

    get sound() {
        return this.#data.sound;
    }
    set sound(value) {
        this.#data.sound = value;
    }

    get active() {
        return this.#imageElem.className.length !== 0;
    }
    set active(value) {
        this.#imageElem.className = value ? 'active' : '';
    }
}