window.onload = () => {
    /**
     * -- Declaração e Manipulação de Variáveis --
     * Declara duas variáveis, (a , b) e atribui-lhes um valor.
     * Troca os valores de a e b sem usar uma variável temporária.
     * Faz console.log dessas 2 variáveis.
     */
    let a = 5;
    let b = 10;
    console.log(a,b);
    [a, b] = [b, a];
    console.log(a,b);



    /**
     * -- Instruções Condicionais --
     * Escreve uma função (isEven, por ex.) que recebe um parâmetro numérico.
     * O resultado dessa função verifica se o número é par ou ímpar.
     * Faz console.log desse resultado.
     */
    const checkEvenOrOdd = (number) => {
        return (number % 2 === 0) ? "Even" : "Odd";
    };
    console.log(checkEvenOrOdd(2));


    /**
     * -- Arrays --
     * Escreve uma função que recebe um array de 5 números (por ex: [2, 123, 34, 65, 48]).
     * Itera sobre esse array e faz console.log apenas dos números pares.
     */
    const arr = [2, 123, 34, 65, 48];
    for (let i = 0; i < arr.length; i++) console.log(arr[i]);
    arr.forEach(num => console.log(num));
    let end = false;
    let i = 0;
    while (!end) {
        console.log(arr[i]);
        i++;
        if(i >= arr.length) end = true;
    }


    /**
     * -- Funções --
     * Escreve uma função que recebe dois parâmetros, num1, num2, e retorna a soma deles.
     * Faz console.log desse resultado.
     */
    const add = (a, b) => a + b;
    console.log(add(1, 2));



    /**
     * -- Objetos --
     * Cria um objeto que represente uma pessoa com as  propriedades nome, idade e genero.
     * Faz console.log dessas propriedades.
     */
    const obj = {
        name: "bruno",
        age: 46,
        gender: "male"
    }
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.gender);
    console.log(obj["name"]);
    console.log(obj["age"]);
    console.log(obj["gender"]);


    /**
     * -- Loops --
     * Escreve um for loop que imprime a sequência de Fibonacci até um número específico de items (10, por ex.).
     * Faz console.log a cada iteração.
     */
    const fibonacci = (terms) => {
        const sequence = [0, 1];
        for (let i = 2; i < terms; i++) {
            const next = sequence[i - 1] + sequence[i - 2];
            sequence.push(next);
        }
        return sequence;
    };
    const terms = 10;
    const result = fibonacci(terms);
    console.log(result);

    /**
     * -- Manipulação do DOM --
     * No ficheiro index.html, cria dois elementos do tipo <button> e <p> dentro do  <body>.
     * Cria um evento onclick no botão que quando “clicado”, insere o texto “button clicked” no elemento <p>.
     */
    const button = document.querySelector("button");
    const p = document.querySelector("p");
    button.onclick = () => p.innerText = "button clicked";

    /**
     * -- Async/Await e Fetch --
     * Cria uma função (loadData, por ex) que faça fetch do ficheiro “data.json”
     * e transforme o resultado desse fetch em formato json.
     * Faz console.log desse json.
     */
    const loadData = async (url) => {
        const request = await fetch(url);
        const result = await request.json();
        console.log(result);
    }
    loadData("data.json");
}