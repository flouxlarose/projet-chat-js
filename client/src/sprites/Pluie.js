class Pluie {
    constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = 0;
        this.speedY = Math.random() * 4 - 7; // Vitesse de chute entre -7 et -3
        this.node = document.createElement('div');
        this.node.classList.add('pluie');
        document.body.append(this.node);
        this.length = 10 + Math.random() * 20;
        this.node.style.height = this.length + 'px';
        this.node.style.left = this.x + 'px';
        
    }

    tick(){
        this.y -= this.speedY;
        
        this.node.style.top = this.y + 'px';
        if(this.y > window.innerHeight){
            this.node.remove();
        }
    }
}

