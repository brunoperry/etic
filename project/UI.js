export default class UI {
    #piecesContainer;
    #infoContainer;
    #infoButton;
    #infoOpened = false;
    #indexLabel;
    #currentPiece = 0;
    #pieces = [];
    #totalPieces = 0;
    #galleryData;
    #audio;
    constructor(data) {
        document.querySelector(".prev-button").onclick = () => {
            if (!this.#audio.paused) this.#stopAudio(this.#pieces[this.#currentPiece]);
            this.#pieces[this.#currentPiece].style.opacity = 0;
            this.#pieces[this.#currentPiece].style.zIndex = 1;
            this.#currentPiece--;
            if (this.#currentPiece < 0) this.#currentPiece = this.#totalPieces - 1;
            this.#pieces[this.#currentPiece].style.opacity = 1;
            this.#pieces[this.#currentPiece].style.zIndex = 9998;
            this.#indexLabel.innerHTML = `${this.#currentPiece + 1}<span>/${
              this.#totalPieces
            }</span>`;
            if (this.#infoOpened) this.#closeInfo();
        };
        this.#infoButton = document.querySelector(".info-button");
        this.#infoButton.onclick = () => {
            this.#infoOpened = !this.#infoOpened;
            this.#infoOpened ? this.#openInfo() : this.#closeInfo();
        };
        document.querySelector(".next-button").onclick = () => {
            if (!this.#audio.paused) this.#stopAudio(this.#pieces[this.#currentPiece]);
            this.#pieces[this.#currentPiece].style.opacity = 0;
            this.#pieces[this.#currentPiece].style.zIndex = 1;
            this.#currentPiece++;
            if (this.#currentPiece >= this.#totalPieces) this.#currentPiece = 0;
            this.#pieces[this.#currentPiece].style.opacity = 1;
            this.#pieces[this.#currentPiece].style.zIndex = 9998;
            this.#indexLabel.innerHTML = `${this.#currentPiece + 1}<span>/${
              this.#totalPieces
            }</span>`;
            if(this.#infoOpened) this.#closeInfo();
        };
        this.#piecesContainer = document.querySelector("#pieces-container");
        this.#infoContainer = document.querySelector("#info-container");
        this.#indexLabel = document.querySelector(".index");
        this.#audio = document.querySelector("audio");
        this.data = data;

        this.#indexLabel.innerHTML = `${this.#currentPiece + 1}<span>/${
          this.#totalPieces
        }</span>`;
    }
    #buildImageElement(data) {
        const img = document.createElement("div");
        img.style.backgroundImage = `url(${data})`;
        if (this.#pieces.length > 0) img.style.opacity = 0;
        img.className = "piece-item";
        this.#pieces.push(img);
        this.#piecesContainer.appendChild(img);
    }
    #buildAudioElement(data) {
        const div = document.createElement("div");
        div.style.backgroundImage = "url(assets/icon-play.svg)";
        if (this.#pieces.length > 0) div.style.opacity = 0;
        div.className = "piece-item toggle";
        div.onclick = () => {
        if (this.#audio.paused) {
            this.#audio.src = data;
            this.#playAudio(div);
        } else {
            this.#stopAudio(div);
        }
        };
        this.#pieces.push(div);
        this.#piecesContainer.appendChild(div);
    }
    #openInfo() {
        this.#infoContainer.querySelector(".artist").innerText = this.currentData.artist;
        this.#infoContainer.querySelector(".title").innerText = this.currentData.title;
        this.#infoContainer.className = "open";
        this.#infoButton.className = "info-button toggled";
        this.#infoOpened = true;
    }
    #closeInfo() {
        this.#infoContainer.className = "";
        this.#infoButton.className = "info-button";
        this.#infoOpened = false;
    }
    #playAudio(currentItem) {
        this.#audio.play();
        currentItem.style.backgroundImage = "url(assets/icon-pause.svg)";
    }
    #stopAudio(currentItem) {
        this.#audio.pause();
        currentItem.style.backgroundImage = "url(assets/icon-play.svg)";
    }
    set data(value) {
        this.#galleryData = value;
        value.forEach((element) => {
        if (element.media.search("jpg") >= 0) {
            this.#buildImageElement(element.media);
        }
        if (element.media.search("mp3") >= 0) {
            this.#buildAudioElement(element.media);
        }
        });
        this.#totalPieces = this.#pieces.length;
    }
    get currentData() {
        return this.#galleryData[this.#currentPiece];
    }
}