import Gallery from "./Gallery.js";
import UI from "./UI.js";

window.onload = async () => {

    const req = await fetch("data.json");
    const res = await req.json();

    const gallery = new Gallery(res);
    new UI(gallery.getAllPieces());

}