const prompt = require("prompt-sync")()

let resposta = ""

for (let i = 1; i <= 5; i++) {
    if (i % 2 == 0) {
        resposta = resposta + "*"
    } else {
        resposta = resposta + "."
    }
}

console.log(`${resposta}`)