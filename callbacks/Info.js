export default class Info {

    #title;
    #artist;
    #callback;
    constructor(callback) {

        this.#callback = callback;
        const infoContainer = document.querySelector("#info-container");
        this.#title = infoContainer.querySelector("h2");
        this.#artist = infoContainer.querySelector("h3");

        this.#artist.onclick = () => {
            this.#callback();
        }
    }

    udpate(data) {
        this.#title.innerText = data.title;
        this.#artist.innerText = data.artist;
    }
}