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

    if(playButton.className === "inactive") {
      playButton.className = "";
    }

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


let isPlaying = null;
let playButton;
const animate = () => {
  currentVehicle.animate();
  isPlaying = requestAnimationFrame(animate);
}
const playAnimation = () => {
  isPlaying = requestAnimationFrame(animate);
  playButton.innerText = "Stop";
  playButton.className = "red";
}
const stopAnimation = () => {
  cancelAnimationFrame(isPlaying);
  isPlaying = null;
  playButton.innerText = "Play";
  playButton.className = "green";
}

window.onload = async () => {
  const data = await loadData("data.json");
  data.sort((a, b) => a.type.localeCompare(b.type));
  const ul = createList(data);
  playButton = document.querySelector("#play_pause");
  playButton.onclick = () => {
    isPlaying ? stopAnimation() : playAnimation();
  }
}
