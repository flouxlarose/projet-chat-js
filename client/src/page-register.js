import {register} from './chat-api';
let spriteList = [];



window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return register(this, (message) => {
            // L'enregistrement est complétée (la requête)
        });
    }

    tick();
})

// Création des gouttes de pluie
const tick = () => {
    for(let i=0; i<10; i++){
        let goutte = new Goutte();
        spriteList.push(goutte);
    }

    window.requestAnimationFrame(tick); 
}