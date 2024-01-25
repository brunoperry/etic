`
criar uma função que receba 2 parametros (a, b)
o resultado desta função é a soma destes 2 parametros (a, b);

chamam a função e façam console.log() do resultado.
`


//criar funçao que receba 2 parametros (a,b)
const addNumbers = (a,b) => {
    return a + b;
}

//chamar a função e guardar o resultado numa variavel
const result = addNumbers(1,2);

//fazer console.log dessa variavel
// console.log(result);

`
criar outra funcao que receba 2 parametros (c, d)
o resultado desta funcao é a multiplicação destes 2 parametros.
cahmar a funcao e guardar o resultado numa variavel
mostrar a variavel em console.log
`

//criar função que multiplique 2 parametros (c,d)
const mulNumbers = (c,d) => {
    return c * d;
}

//chamar função e guardar resultado em variavel
const result2 = mulNumbers(3, 2);

//mostar variavel em console log
// console.log(result2);


`
multiplicar o resultado da primeira funçao (addNumbers(a,b)) por 2
guardar o resultado numa variavel e fazer console.log dela
`

// Multiplcar resultado de addNumbers por 2
const result3 = mulNumbers(result, 2);

//mostrar resultado em console
// console.log(result3);

// console.log(mulNumbers(addNumbers(1,2), 2));

`
criar uma funçao que receba um array como parametro, e que calcule a media dos numeros desse array
mostrar o resulto no console.log
`
const arr = [2, 45, 34, 2, 54, 2000, 23.5];

//criar função que calcule a media do array
const calcAverage = (nums) => {

    let value = 0;
    nums.forEach(num => {
        value += num;
    });

    return value / nums.length;
}

//mostrar o resultado em console.log

const result4 = calcAverage(arr);
// console.log(result4);

`criar um array, iterar sobre ele e mostrar os items 1 a 1 pela console.log`

const arr2 = [12, 45, 34, 89, 100, 23452];

arr2.forEach(num => {
    console.log(num);
});

console.log("----");

for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

console.log("----");
let end = false;
let index = 0;
while (!end) {
    console.log(arr2[index]);
    index++;
    end = index >= arr2.length;
}

console.log("----");
const obj = {
    name: "bruno",
    age: 32,
    gender: "male"
}
for (const key in obj) {
    console.log(key, obj[key]);
}

console.log("----");
for (const value of arr2) {
    console.log(value);
}

`criar uma classe com o nome Test, essa classe tem um metodo que retorna o numero 2`

//Criar a classe Test
//criar o metodo que retorne o numero 2, guardar o resultado numa variavel
class Test {
    constructor() {

    }
    showNumber() {
        return 2;
    }
}

console.log("----");
console.log(new Test().showNumber());


//fazer console log desse resultado (variavel)

