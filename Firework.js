const canvas = document.getElementById("CVS");
const c = canvas.getContext("2d");
const particleArray = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("rezie", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const mouse = {
    x: undefined,
    y: undefined,
};

canvas.addEventListener ("click", function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 20; i++){
        particleArray.push(new Particle());
    };
});

canvas.addEventListener ("mousemove", function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for (i =0; i < 20; i++){
        particleArray.push(new Particle());
    };
});


class Particle {
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        // this.x = Math.random() * canvas.width;
        // this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedx = Math.random() * 3 - 1.5;
        this.speedy = Math.random() * 3 - 1.5;
    };
    
    update(){
        this.x += this.speedx;
        this.y += this.speedy;
        if (this.size > 0.2) this.size -= 0.1;
    };

    draw(){
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI *2, false);
        c.fillStyle = "white";
        c.strokeStyle = "rgba(255, 0, 0, 0.9)";
        c.fill();
        c.stroke();
    };

};

function init(){
    for (let i = 0; i < 100; i++){
        particleArray.push(new Particle());
    };
};
init();

function handleparticle(){
    for (let i = 0; i < particleArray.length; i++){
        particleArray[i].update();
        particleArray[i].draw();
        if (particleArray[i].size <= 0.3){
            particleArray.splice(i, 1);
            i--;
        };
    };
};

function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    handleparticle();
    requestAnimationFrame(animate);
};

animate();