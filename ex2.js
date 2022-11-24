const prompt = require("prompt-sync")()

let num = Number(prompt("Número: "))

if (num < 10){
    num = 10
}
for (let i=num; i<=20; i=i+5){
    console.log(i)
}