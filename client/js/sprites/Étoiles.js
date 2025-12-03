class Star{
    constructor(){
        this.size = Math.random() * 3 + 1;
        this.x = Math.random() * window.innerWidth;
        this.y = 0;

        this.node = document.createElement('div');
        this.node.classList.add('star');
        this.node.style.left = this.x + 'px';
        this.node.style.width = this.size + 'px';
        this.node.style.height = this.size + 'px';

        document.querySelector("#container").append(this.node);
    }

    tick(){
        let alive = true;

        this.y += this.size * 0.5;
        this.node.style.top = this.y + 'px';

        if(this.y > window.innerHeight){
            alive = false;
            this.node.remove();
        }
        return alive;
    }
}