let stars = [];

window.addEventListener('load', () => {
    tick();
});

const tick = () => {
    if(Math.random() < 0.2){
        stars.push(new Star());
    }

    for(let i = 0; i < stars.length; i++){
        if(!(stars[i].tick())){
            stars.splice(i, 1);
            i--;
        }
    }

    window.requestAnimationFrame(tick);
}

