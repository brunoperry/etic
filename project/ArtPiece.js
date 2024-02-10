export default class ArtPiece {
  #pieceData;
  constructor(data) {
    this.#pieceData = data;
  }

  get media() {
    return this.#pieceData.media;
  }
  get title() {
    return this.#pieceData.title;
  }
  get artist() {
    return this.#pieceData.artist;
  }
}