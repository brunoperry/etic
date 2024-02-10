import Gallery from "./Gallery.js";
import Info from "./Info.js";

window.onload = async () => {
    //Carregamos os dados json.
    const request = await fetch("data.json");
    const result = await request.json();

    /*************************************************************************
        Quando instanciamos a gallery, enviamos uma função anónima (ou callback) como parametro
        e que irá ser chamada quando clickamos num item.
        (itemData) => {
            info.udpate(itemData);
        }
    ***************************************************************************/
    const gallery = new Gallery((itemData) => {
        info.udpate(itemData);
    });

    //Constroi os items da galeria com os dados json.
    result.forEach((item) => gallery.addItem(item));

    //Info stuff
    const info = new Info();
}

