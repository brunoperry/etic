export default class MainTest {
    #name
    constructor(name) {
        this.#name = name;
    }

    sayHello() {
        return this.#name;
    }
}