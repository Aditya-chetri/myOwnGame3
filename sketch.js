const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var jumping, walking, normal, out;
var gameState = "normal";
var playerSprite;

var engine, world;

function preload(){
  
  
  playerNormalIMG = loadAnimation("WALK1.png");
  player_running = loadAnimation("WALK1.png","WALK2.png","WALK3.png");
  player_jumping = loadImage("JUMP.png")
  branch = loadImage("tree.png")
  groundIMG = loadImage("grass.png")
  msmIMG = loadImage("MSM.png")
  snake = loadImage("sprite_0.png")
  over = loadImage("game-over.png")
  reset = loadImage("iver.png")
  leftA = loadImage("3.png");
  rightA = loadImage("2.png");
  topA = loadImage("1.png");
}

function setup() {
  createCanvas(5000,650);
  engine = Engine.create();
  world = engine.world;

  spawn = createSprite(120, 640, 300, 20)
  spawn.scale = 0.3;
  
  part1 = createSprite(450, 580, 400, 20);
  part1.scale = 0.3;
  part2 = createSprite(800, 550, 400, 40)
  part2.scale = 0.3;
  part3 = createSprite(1150, 550, 300, 40);
  part3.scale = 0.4;
  player = createSprite(100, 525, 30, 60);
  player.addAnimation("running",playerNormalIMG);
  wall1 = createSprite(10, 325, 20, 675);
  wall2 = createSprite(1350, 405, 80, 605);
  tree = createSprite(1400, 405, 20, 500);
  tree.scale = 6;
  branch4 = createSprite(1410, 120, 60, 20)
  mushroomImg = createSprite(1100, 500, 20, 20);
  mushroom = createSprite(1090, 510, 20, 20);
  branch1 = createSprite(1200, 500, 120, 20);
  branch1.rotation = 150;
  branch2 = createSprite(1240, 320, 150, 20);
  branch2da2 = createSprite(1160, 340, 20,  50)
  branch2.rotation = 160;
  branch3 = createSprite(1250, 220, 120, 20);
  branch3.rotation = 170;
  branch3da3 = createSprite(1200, 220, 15, 30)
  part4 = createSprite(1580, 505, 140, 20)
  part4.scale = 0.4;
  b1 = createSprite(1790, 540, 20, 250)
  b1.shapeColor = "brown";
  b2 = createSprite(2390, 540, 20, 250)
  b2.shapeColor = "brown";
  b3 = createSprite(2090, 440, 630, 50)
  b3.shapeColor = "brown";
  ob1 = createSprite(1580, 470, 30, 30);
  ob1.scale = 0.1
  outGround = createSprite(2500, 800, width*5, 10)
  lose = createSprite(0, 0, 50, 50);
  lose.scale = 0.5;
  lose.visible = false;
  again = createSprite(0, 0, 50, 50);
  again.visible = false;
  again.scale = 0.3;
  leftArrow = createSprite(200, 300, 20, 20);
  leftArrow.scale = 0.1;
  rightArrow = createSprite(350, 300, 20, 20);
  rightArrow.scale = 0.1;
  topArrow = createSprite(275, 250, 20, 20);
  topArrow.scale = 0.1;

  

  topArrow.addImage(topA);
  rightArrow.addImage(rightA);
  leftArrow.addImage(leftA);
  again.addImage(reset);
  lose.addImage(over);
  spawn.addImage(groundIMG);
  part1.addImage(groundIMG);
  part2.addImage(groundIMG);
  part3.addImage(groundIMG);
  part4.addImage(groundIMG);
  tree.addImage(branch);
  mushroomImg.addImage(msmIMG);
  ob1.addImage(snake);
}


function draw() {
  Engine.update(engine);

  background(rgb(138, 176, 234))
 
  
  if((keyDown("space"))&&(gameState==="normal")){
    player.y = player.y-18;
  }
  player.velocityY = player.velocityY + 0.5;

  if((keyDown("left"))&&(gameState==="normal")){
    player.x = player.x-5;
   
  }
  /*if(keyWentUp(LEFT_ARROW)){
    player.velocityX = 0;
    player.velocityY = 0;
  }*/
  if((gameState==="normal")&&(keyDown("right"))){
    player.x = player.x+5;
  }
  /*if(keyWentUp(RIGHT_ARROW)){
    player.velocityX = 0;
    player.velocityY = 0;
  }*/
  if(gameState=="walking"){
    player.changeAnimation("running",player_running); 
  }
  
////////////////////////////////////////////////////////



  if((mousePressedOver(topArrow))&&(gameState==="normal")){
    player.y = player.y-18;
  }
  player.velocityY = player.velocityY + 0.5;

  if((mousePressedOver(leftArrow))&&(gameState==="normal")){
    player.x = player.x-5;
   
  }
  
  if((mousePressedOver(rightArrow))&&(gameState==="normal")){
    player.x = player.x+5;
  }
  
  

  
  mushroom.visible = false;
  branch1.visible = false;
  branch2da2.visible = false;
  branch2.visible = false;
  branch3.visible = false;
  branch3da3.visible = false;
  branch4.visible = false;
  wall2.visible = false;
  

  if((keyDown("space"))&&(player.collide(mushroom))){
    player.y = player.y-100;
  }
  if((mousePressedOver(topArrow))&&(player.collide(mushroom))){
    player.y = player.y-100;
  }
  if((player.collide(outGround))||(player.collide(ob1))){
    gameState = "out";
    player.y = 780;
  }
  if(gameState==="out"){
    lose.x = player.x;
    lose.y = player.y-600;
    lose.visible = true;
    again.x = player.x;
    again.y = player.y-450;
    again.visible =  true;
    topArrow.visible = false;
    leftArrow.visible = false;
    rightArrow.visible = false;
    over.visible = true;
    again.visible = true;
  }
  
  if(gameState===normal){
    again.visible = false;
    lose.visible = false;
    again.y = -500
    lose.y = -500
    topArrow.visible = true;
    leftArrow.visible = true;
    rightArrow.visible = true;
  }

  if(mousePressedOver(again)){
    gameState = "normal";
    player.x = 100;
    player.y = 525;
  }

  if(gameState === "normal"){
    lose.visible = false;
    again.visible = false;
    topArrow.visible = true;
    leftArrow.visible = true;
    rightArrow.visible = true;
  }
 
  
  

  
  //spawn.display();
  //part1.display();
  edges = createEdgeSprites();
  player.collide(spawn);
  player.collide(part1);
  player.collide(wall1);
  player.collide(wall2);
  player.collide(part2);
  player.collide(part3);
  player.collide(mushroom);
  player.collide(branch1)
  player.collide(branch2)
  player.collide(branch2da2);
  player.collide(branch3);
  player.collide(branch3da3);
  player.collide(branch4);
  player.collide(part4);
  player.collide(b1);
  player.collide(b2);
  player.collide(b3);
  

  drawSprites();
}
