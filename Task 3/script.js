/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const getBtn = document.getElementById('btn');
const output = document.getElementById('output');
const message = document.getElementById('message');
const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', ENDPOINT);
    xhr.responseType = 'json';
    xhr.onload = () => {
        const data = xhr.response;
        message.remove()
        getBtn.removeEventListener('click', getData);
        data.forEach(arr => {
            const loginElem = arr.login;
            const avatarElem = arr.avatar_url;
            const wrapper = document.createElement('div');
            wrapper.classList.add('data-container');
            wrapper.innerHTML = `<img class="avatar" src="${avatarElem}"><div>${loginElem}</div>`;
            output.appendChild(wrapper);
        })
    };
    xhr.send();
};
getBtn.addEventListener('click', getData);