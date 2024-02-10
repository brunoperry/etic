import { Music, Painting, Photo, Sculpture } from "./Pieces.js";

export default class Gallery {

    #pieces = [];
    constructor(data) {
      data.forEach((piece) => {
        this.addPiece(piece);
      });
    }

    addPiece(piece) {
        switch (piece.type) {
          case "Photography":
            this.#pieces.push(new Photo(piece));
            break;
          case "Sculpture":
            this.#pieces.push(new Sculpture(piece));
            break;
          case "Music":
            this.#pieces.push(new Music(piece));
            break;
          case "Painting":
            this.#pieces.push(new Painting(piece));
            break;
          default:
            break;
        }
    }

    getAllPieces() {
        return this.#pieces;
    }
}