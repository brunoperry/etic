export default class AudioPlayer {
  #audio;
  #callback;
  constructor(callback) {
    this.#callback = callback;
    this.#audio = document.querySelector("audio");
  }

  play(src) {
    if (!this.#audio.paused) {
      this.stop();
    }
    this.#audio.src = src;
    this.#audio.play();
    this.#callback(true);
  }

  stop() {
    
    this.#audio.pause();
      this.#callback(false);
  }
}