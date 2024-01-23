import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";
import Boat from "./Boat.js";

const loadData = async (url) => {

  const request = await fetch(url);
  const result = await request.json();

  return result;
}

const createLiContent = (item) => {
  const button = document.createElement("button");
  button.innerText = item.brand;
  button.onclick = () => {
    switch (item.type) {
      case "car":
        new Car(item);
        break;
      case "motorcycle":
        new Motorcycle(item);
        break;
      case "boat":
        new Boat(item);
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

window.onload = async () => {

  const data = await loadData("data.json");
  data.sort((a, b) => a.type.localeCompare(b.type));

  const ul = createList(data);
}