/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const counter = document.getElementById("btn__state");
const button = document.getElementById("btn__element");

let clicks = 0;
const clickCalc = () => {
    clicks++;
    counter.innerHTML = clicks;
};

button.addEventListener('click', clickCalc)
