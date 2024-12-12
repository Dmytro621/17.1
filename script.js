class Caclulator {
    add(number1, number2) {
        let result = ''
        return result = number1 + number2
    }

    subtract(number1, number2) {
        let result = ''
        return result = number1 - number2
    }

    multiply(number1, number2) {
        let result = ''
        return result = number1 * number2
    }

    divide(number1, number2) {
        let result = ''
        return result = number1 / number2
    }
}

const calc = new Caclulator();

console.log(calc.add(1, 2))
console.log(calc.subtract(17, 2))
console.log(calc.multiply(10, 2))
console.log(calc.divide(10, 2))