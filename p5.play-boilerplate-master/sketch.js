var maria, mariaImg
var calcada, calcadaImg
var rua,ruaImg

function preload(){
 // mariaImg = loadImage()
 ruaImg = loadImage()
}

function setup() {
  createCanvas(800,400);
  
  maria = createSprite(400,200,20,20)
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  maria.x =  mouseX;
  maria.y = mouseY; 
  drawSprites();
  
}