let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)

if (firstNumber === secondNumber)
{
    alert ('O primeiro número é igual ao segundo número')
}
else 
    alert ('O primeiro número e o segundo número são diferentes')

if (sum % 2 === 0)
{
    alert ('Soma: '+sum+'  É um número Par!')
}
else
    alert ('Soma: '+sum+'  É um número Ímpar!')
