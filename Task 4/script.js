/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
const ENDPOINT = 'cars.json';

async function getCars() {
    const response = await fetch(ENDPOINT);
    return response.json();
}

document.addEventListener('DOMContentLoaded', async() => {
    try {
        const users = await getCars();
        const divContainer = document.getElementById('output');
        let i = 1;
        users.forEach(car => {
            let modelElem = document.createElement('div');
            modelElem.classList.add('models')
            const brandElem = document.createElement('div');
            brandElem.classList.add('brand')
            brandElem.innerText = `${car.brand}`
            divContainer.appendChild(brandElem);
            brandElem.after(modelElem)
            modelElem.innerText = `${car.models.join(', ')}`
        }, );
    } catch (e) {
        console.log('ERROR');
        console.log(e);
    }
});
