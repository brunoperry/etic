export default class Gallery {
  #container;
  #callback;

  constructor(callback) {
    /*************************************************************************
            Este parametro "callback", é a função anónima que enviamos do app.js quando instanciámos a galeria:
            (itemData) => {
                info.udpate(itemData);
            }
        ***************************************************************************/
    this.#callback = callback;
    this.#container = document.querySelector("#gallery-container");
  }

  addItem(itemData) {
    const item = document.createElement("div");
    item.className = "item";
    item.style.background = itemData.color;

    item.onclick = () => {
      /**************************************************************************************
                Quando clickamos num item, chamamos a função anónima que enviamos do app.js:
                (itemData) => {
                    info.udpate(itemData);
                }
            **************************************************************************************/
      this.#callback(itemData);

      /**************************************************************************************
                Isto é o mesmo que estarmos a chamar: info.udpate(itemData) mesmo não tendo aqui nenhuma referencia ao objecto "info".
                No fundo estamos a fazer "callback" ao nosso app.js para atualizar a info com os dados deste item (itemData).
            **************************************************************************************/
    };

    this.#container.appendChild(item);
  }
}