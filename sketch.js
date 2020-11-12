var fixedRect, movingRect;
var gOb1,gOb2,gOb3,gOb4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 80, 50);
  fixedRect.shapeColor = "pink";
  fixedRect.velocityY = 3;
  movingRect = createSprite(200,200,50,80);
  movingRect.shapeColor = "pink";
  gOb1 = createSprite(500,300,50,50);
  gOb1.shapeColor = "red";
  gOb2 = createSprite(400,300,50,50);
  gOb2.shapeColor = "blue";
  gOb2.velocityY = -3;
  gOb3 = createSprite(200,300,50,50);
  gOb3.shapeColor = "red";
  gOb4 = createSprite(100,300,50,50);
  gOb4.shapeColor = "blue";
}

function draw() {
  background("lightblue");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

if (isTouching(movingRect,gOb1)) {
  gOb1.shapeColor = "black";
  movingRect.shapeColor = "black";
}else{
  gOb1.shapeColor = "red";
  movingRect.shapeColor = "pink";
}
  
bounceOff(fixedRect,gOb2);

  drawSprites();
}

