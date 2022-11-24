const prompt = require("prompt-sync")()

let total = 0
const numeros = []

for (let i = 1; i <= 5; i++) {
    total = total + (i * 2)
    numeros.push(total)
}

