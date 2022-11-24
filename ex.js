const prompt = require("prompt-sync")()

const num = Number(prompt("Qual o número? "))

let resposta

if (num % 2 == 0 || num % 3 == 0) {
    resposta = Math.ceil(num / 5)
} else {
    resposta = Math.sqrt(num) * 2
}

console.log(`${resposta}`)