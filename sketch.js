var frog,frogimg
function preload(){
frogimg = loadImage("frog1.png")
}

function setup() {
 createCanvas(1000,500);
 frog = createSprite(100, 90, 20, 50);
 frog.addImage("frog",frogimg);
 frog.scale = 0.2
}

function draw() {
    background("red");
 drawSprites()
}