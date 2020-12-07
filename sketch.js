var sofia,wall1,wall2,wall3,wall4,wall5,wall6,cup;

function setup() {
  createCanvas(400, 400);
  sofia = createSprite(20,25,20,20);
  sofia.shapeColor = "blue";

  wall1 = createSprite(200,10,250,20);
  wall1.shapeColor = "red";

  wall2 = createSprite(200,0,20,250);
  wall2.shapeColor = "red";

  wall3 = createSprite(60,140,100,20);
  wall3.shapeColor = "red";

  wall4 = createSprite(180,250,250,20);
  wall4.shapeColor = "red";

  wall5 = createSprite(370,130,20,250);
  wall5.shapeColor = "red";

  wall6 = createSprite(300,340,150,20);
  wall6.shapeColor = "red";

  cup = createSprite(10,370,20,75);
  cup.shapeColor = "yellow";
}

function draw() {
  background(220);
  background("pink");
  
  if (keyDown("RIGHT_ARROW")){
  
sofia.velocityX=4;
sofia.velocityY=0;
}
  if (keyDown("LEFT_ARROW")){
  
sofia.velocityX=-4;
sofia.velocityY=0;
}
  if (keyDown("UP_ARROW")){
  
sofia.velocityX=0;
sofia.velocityY=-4;
}
  if (keyDown("DOWN_ARROW")){
  
sofia.velocityX=0;
sofia.velocityY=4;
}
if(sofia.isTouching(cup)){
  sofia.velocityX = 0;
  sofia.velocityY = 0;
  fill("purple")
  textSize(15);
  text("You Won!",175,200);
}


if(sofia.isTouching(wall1)){
  sofia.x = 20;
  sofia.y = 25;
}

if(sofia.isTouching(wall2)){
  sofia.x = 20;
  sofia.y = 25;
}
if(sofia.isTouching(wall3)){
  sofia.x = 20;
  sofia.y = 25;
}
if(sofia.isTouching(wall4)){
  sofia.x = 20;
  sofia.y = 25;
}
if(sofia.isTouching(wall5)){
  sofia.x = 20;
  sofia.y = 25;
}
if(sofia.isTouching(wall6)){
  sofia.x = 20;
  sofia.y = 25;
}
  edges = createEdgeSprites();
  sofia.bounceOff(edges);
  drawSprites();
}