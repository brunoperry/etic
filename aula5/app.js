import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";

const data = {
  cars: [
    {
      brand: "ferrari",
      speed: 200,
    },
    {
      brand: "fiat",
      speed: 50,
    },
  ],
  motorcycles: [
    {
      brand: "ducatti",
      speed: 400,
    },
    {
      brand: "kawazaki",
      speed: 500,
    },
  ],
};

const vehicles = [];
window.onload = () => {
    console.log("window loaded");
    const nav = document.querySelector("nav");

    const createUL = (name, data) => {
      const ul = document.createElement("ul");
      const title = document.createElement("li");
      title.innerText = name;
      ul.appendChild(title);

      data.forEach((element) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.onclick = (event) => {
            switch (name) {
              case "cars":
                vehicles.push(new Car(element));
                break;
              case "motorcycles":
                vehicles.push(new Motorcycle(element));
                break;

              default:
                break;
            }
        }
        button.innerText = element.brand;
        li.appendChild(button);
        ul.appendChild(li);
      });


      nav.appendChild(ul);
    };

    //build layout
    for (const key in data) {
        createUL(key, data[key]);
    }
}



// const car = new Car();
// const motorcycle = new Motorcycle();


// const loop = () => {

//     requestAnimationFrame(loop);
// }

// requestAnimationFrame(loop);

// document.addEventListener("keydown", (e) => {
//     console.log(e.key);
// })

// const lerp = (start, end, t) => {
//   return start * (1 - t) + end * t;
// };

// Example usage:
// const startValue = 10;
// const endValue = 20;
// const t = 0.5;

// const
