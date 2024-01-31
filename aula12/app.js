
import Zoo from "./Zoo.js";

window.onload = async () => {

    const request = await fetch("data.json");
    const result = await request.json();

    const zoo = new Zoo((animal) => {
        console.log("zoo event", animal);
    });
    result.forEach(item => {
        zoo.addAnimal(item);
    });
}