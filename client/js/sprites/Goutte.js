class Goutte {
    constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = 0;
        this.speedY = Math.random() * 4 - 10; // Vitesse de chute entre -15 et -11 vitesse de basse pour egaliser la pluie
        this.node = document.createElement('div');
        this.node.classList.add('goutte');
        document.body.append(this.node);
        this.length = 10 + Math.random() * 20;
        this.node.style.height = this.length + 'px';
        this.node.style.left = this.x + 'px';
        
    }

    reset(){
        this.y = 0;
        this.x = Math.random() * window.innerWidth;
        this.speedY = Math.random() * 4 - 10;
        this.node.style.left = this.x + 'px';
    }

    tick(){
        this.y -= this.speedY;
        
        this.node.style.top = this.y + 'px';
        if(this.y > window.innerHeight){
            this.reset();
        }
    }
}

