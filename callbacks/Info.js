export default class Info {

    #title;
    #artist;
    constructor() {

        const infoContainer = document.querySelector("#info-container");
        this.#title = infoContainer.querySelector("h2");
        this.#artist = infoContainer.querySelector("h3");
    }

    udpate(data) {
        this.#title.innerText = data.title;
        this.#artist.innerText = data.artist;
    }
}