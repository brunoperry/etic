import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";
import Boat from "./Boat.js";

let currentVehicle;

const loadData = async (url) => {

  const request = await fetch(url);
  const result = await request.json();

  return result;
}

const createLiContent = (item) => {
  const button = document.createElement("button");
  button.innerText = item.brand;

  button.onclick = () => {

    if(currentVehicle) {
      currentVehicle.destroy();
    }

    switch (item.type) {
      case "car":
        currentVehicle = new Car(item);
      break;
      case "motorcycle":
        currentVehicle = new Motorcycle(item);
        break;
      case "boat":
        currentVehicle = new Boat(item);
        break;
    }
  }
  return button;
}

const createList = (data) => {
  const ul = document.querySelector("ul");
  data.forEach(item => {
    const li = document.createElement("li");
    li.appendChild(createLiContent(item));
    ul.appendChild(li);
  });
}

// window.onload = async () => {

//   const data = await loadData("data.json");
//   data.sort((a, b) => a.type.localeCompare(b.type));

//   const ul = createList(data);

//   console.log("event listener created");
// }


let isPlaying = null;
let playButton;
const play = () => {
  isPlaying = setInterval(() => {
    console.log("new animation frame");
  }, 100);
  playButton.innerText = "Stop";
  playButton.className = "red";
}
const stop = () => {
  clearInterval(isPlaying);
  isPlaying = null;
  playButton.innerText = "Play";
  playButton.className = "green";
}

window.addEventListener("load", async () => {

  const data = await loadData("data.json");
  data.sort((a, b) => a.type.localeCompare(b.type));

  const ul = createList(data);

  playButton = document.querySelector("#play_pause");
  playButton.onclick = () => {

    isPlaying ? stop() : play();
    
  }
})