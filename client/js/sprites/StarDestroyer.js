class StarDestroyer {
    constructor() {
        this.node = document.createElement("div");
        this.node.classList.add("star-destroyer");
        this.type = Math.floor(Math.random() * 2) ? "left" : "right";
        this.width = 130;
        this.height = 50;
        this.speed = Math.floor(Math.random() * 2) + 1;
        this.hit = false;

        if (this.type == "left") {
            this.node.classList.add("left");
            this.x = -1 * this.width;
        } else {
            this.node.classList.add("right");
            this.node.style.transform = "scaleX(-1)";
            this.x = window.innerWidth + this.width;
        }

        this.y = Math.random() * window.innerHeight
        this.node.style.width = this.width + "px";
        this.node.style.height = this.height + "px";
        this.node.style.top = this.y + "px";
        this.node.style.left = this.x + "px";

        document.querySelector("#container").append(this.node);
    }

    tick() {
        let alive = true;

        this.x += this.type == "left" ? this.speed : -this.speed;
        this.node.style.left = this.x + "px";
        
        if (this.x <( -2 * this.width) || this.x > (window.innerWidth + this.width + 2)) {
            alive = false;
            this.node.remove();
        }

        return alive;
    }

}