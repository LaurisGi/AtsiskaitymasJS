/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator () {
    this.sum = (a, b) => {return a + b},
    this.subtraction =(a, b) => {return a - b},
    this.multiplication = (a, b) => {return a * b},
    this.division = (a, b) => {return a / b}
    };


const mtCa = new Calculator()
console.log(mtCa.sum(6, 6));
console.log(mtCa.subtraction(12, 6));
console.log(mtCa.multiplication(3, 4));
console.log(mtCa.division(12, 6));