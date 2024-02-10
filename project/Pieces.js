import ArtPiece from "./ArtPiece.js";

export class Painting extends ArtPiece {
    constructor(data) {
        super(data);
    }

    get info() {
        return {
            type: "painting",
            title: this.title,
            artist: this.artist,
        };
    }
}

export class Sculpture extends ArtPiece {

    constructor(data) {
        super(data);
    }

    get info() {
        return {
            type: "sculpture",
            title: this.title,
            artist: this.artist
        }
    }
}

export class Photo extends ArtPiece {
    constructor(data) {
        super(data);
    }

    get info() {
        return {
            type: "photography",
            title: this.title,
            artist: this.artist,
        };
    }
}

export class Music extends ArtPiece {
    constructor(data) {
        super(data);
    }

    get info() {
        return {
            type: "music",
            title: this.title,
            artist: this.artist,
        };
    }
}