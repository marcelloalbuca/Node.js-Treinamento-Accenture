var nome = 'Marcello Albuquerque';
var idade = 33
var lista = ["maça", "banana", "pera"]
var isTrue = false
var objeto = { 
    nomecompleto: "Marcello Albuquerque",
    idade: 33,
    linguagens: ['java', "javascript", "rust"],
    outroobjeto: {
        endereco: "Rua da lua, 33"
    }
 }

// console.log(nome);
// console.log(idade)
// console.log(lista)
// console.log(isTrue)
// console.log(objeto)


function hello() {
    console.log("Minha idade é de: " + idade);
}


function helloComIdade(idade) {
    console.log("Minha idade é de: " + idade);
}


helloComIdade(idade)