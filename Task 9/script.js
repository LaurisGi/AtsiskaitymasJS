/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */


class Movie {
    constructor(title, director, budget){
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive() {
        if (this.budget > 100000000) return true;
        else return false;
}};

// const titanic = new Movie('Titanic', 'James Cameron', 200000000);
// const onceUponATimeInHollywood = new Movie('Once Upon a Time…in Hollywood', 'Quentin Tarantino', 90000000);
// const Elvis = new Movie('Elvis', 'Baz Luhrmann', 85000000);

// console.log(titanic.wasExpensive())
// console.log(onceUponATimeInHollywood.wasExpensive())
// console.log(Elvis.wasExpensive())
