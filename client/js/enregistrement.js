let spriteList = [];


window.addEventListener("load", () => {
    for (let i=0; i<400; i++){
        let goutte = new Goutte();
        spriteList.push(goutte);
    }
    tick();
})


const tick = () => {
    for(let i = 0; i < spriteList.length; i++){
        spriteList[i].tick();
    }
    window.requestAnimationFrame(tick);
}