export default class Animal {

    #name;
    #callback;
    #imageElem;
    constructor({name, image}, callback) {
        this.#name = name;
        this.#callback = callback;

        this.#imageElem = document.createElement("img");
        this.#imageElem.src = image;
        this.#imageElem.onclick = () => this.#callback();

        const container = document.querySelector("#images-container");
        container.appendChild(this.#imageElem);
    }

    introduce() {
        return "Hello, I'm a " + this.#name;
    }

    get name() {
        return this.#name;
    }
    set name(value) {
        this.#name = value;
    }

    get active() {
        return this.#imageElem.className.length !== 0;
    }
    set active(value) {
        this.#imageElem.className = value ? 'active' : '';
    }
}