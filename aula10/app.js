window.onload = () => {

    const test = new Test((value) => {
        h1.innerText = value;
    });

    test.setName("test1");
    test.setAge(45);
    test.setGender("male");

    test.width = 100;
    test.height = 150;
    test.background = "red";
    const h1 = document.querySelector("h1");


    const test2 = new Test2(() => {
        h1.innerText = "test2.clicked";
    });
    test2.width = 200;
    test2.height =200;
    test2.background = "green";
}

/**
 * Criar uma class (Test2) que no construtor recebe um parametro (callback)
 * nesse construtor criem uma div (view), 
 * e cada vez que se carrega nessa view, chama-se o callback;
 */
class Test2 {
    #view;
    constructor(callback) {
        this.#view = document.createElement("div");
        this.#view.onclick = () => callback();

        document.body.appendChild(this.#view);
    }

    set width(value) {
        this.#view.style.width = value + "px";
    }
    set height(value) {
        this.#view.style.height = value + "px";
    }
    set background(value) {
        this.#view.style.backgroundColor = value;
    }
}












class Test {
    #name;
    #age;
    #gender;

    #view;
    #callback;

    constructor(callback) {
        
        this.#callback = callback;

        this.#view = document.createElement("div");
        this.#view.onclick = () => this.#callback(this.#gender + " clicked");
        document.body.appendChild(this.#view);
    }

    getName() {
        return this.#name;
    }
    getAge() {
        return this.#age;
    }
    getGender() {
        return this.#gender;
    }

    setName(value) {
        this.#name = value;
    }
    setAge(value) {
        this.#age = value;
    }
    setGender(value) {
        this.#gender = value;
    }

    
    /**
     * GETTERS & SETTERS
     */
    get width() {
        return this.#view.style.width.replace("px", "");
    }
    set width(value) {
        this.#view.style.width = value + "px";
    }

    get height() {
        return this.#view.style.height.replace("px", "");
    }
    set height(value) {
        this.#view.style.height = value + "px";
    }

    get background() {
        return this.#view.style.backgroundColor;
    }
    set background(value) {
        this.#view.style.backgroundColor = value;
    }
}
