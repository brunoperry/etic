
// let a = 10;
// let b = "100";

// if(a === "10" && b == "100") {
//     console.log(true);
// } else {
//     console.log(false);
// }

// if (a === "10" || b == "100") {
//   console.log(true);
// } else {
//   console.log(false);
// }
 
// switch (a) {
//   case 10:
//     console.log(true);
//     break;
//   case "10":
//     console.log(false);
//     break;
//   case "20":
//     console.log(false);
//     break;
//   case "40":
//     console.log(false);
//     break;
//     default:
//         console.log(true);
// }

// a == "10" ? console.log(true) : console.log(false);


// let a = 0;


// while (a < 20) {
    

//     console.log("a", a);
//     a++;
// }


// const PI = 3.14;
let arr = [20, 30, 40, 10, 100];

// console.log(arr)

// for(let i = arr.length-1; i >= 0; i--) {
//     console.log(arr[i]);
// }

arr.forEach((element) => {
    // console.log(element);
    // console.log(element);
});

const req = await fetch("api.com");
const res = await req.json();

let obj ={

    name: "bruno",
    age: 46,
    gender: "male",
    DOB: Date(),
    obj: {
        name: "perry",
        arr: [{
            name: "marcus"
        }]
    }

}

console.log(obj["name"])

for (const key in obj) {
    // console.log(obj[key]);
}