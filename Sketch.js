var theif, police, coin;
var rectangle1,rectangle2,rectangle3,rectangle4,rectangle5,rectangle6,rectangle7,rectangle8,rectangle9,rectangle10,
rectangle11,rectangle12,rectangle13,rectangle14,rectangle15,rectangle16,rectangle17,rectangle18,rectangle19,rectangle20,
rectangle21,rectangle22,rectangle23,rectangle24,rectangle25,rectangle26,rectangle27,rectangle28,rectangle29,rectangle30,
rectangle31,rectangle32,rectangle33,rectangle34,rectangle35,rectangle36,rectangle37,rectangle38,rectangle39
var life1,life2,life3;
var gameState = 0;
var titlepic;
var button1, button1Img;

function preload(){
    theifImage = loadImage("Images/theif.png");
    policeImage1 = loadImage("Images/police.png");
    policeImage2 = loadImage("Images/police.png");
    policeImage3 = loadImage("Images/police.png");
    policeImage4 = loadImage("Images/police.png");
    coinImage = loadImage("Images/coin.png");
    titlepicImage = loadImage("Images/titlepic.gif")
}

function setup(){


 
}


function draw() {
  background("orange");
  text(mouseX+","+ mouseY,350,10)
  if (gameState === 0){
titlepic = createSprite(200,200);
titlepic.addImage(titlepicImage);
titlepic.scale = 1
button1 = createSprite(300,150,50,50)

if (mousePressedOver(button1)){
  gameState = 1;
}
  }
if (gameState === 1){
 sprites_of_the_game()

titlepic.destroy()
  
  theif.velocityY = 0;
  theif.velocityX = 0;
 edges = createEdgeSprites();
  theif.bounceOff(edges);
  textFont("Arial");
  
  
if (theif.bounceOff(rectangle39))
{ 
  textSize(50);
  text("YOU WIN", 50,200);
  textFont("Times New Roman");
}

theif.bounceOff(rectangle1);
theif.bounceOff(rectangle2);
theif.bounceOff(rectangle3);
theif.bounceOff(rectangle4);
theif.bounceOff(rectangle5);
theif.bounceOff(rectangle6);
theif.bounceOff(rectangle7);
theif.bounceOff(rectangle8);
theif.bounceOff(rectangle9);
theif.bounceOff(rectangle10);
theif.bounceOff(rectangle11);
theif.bounceOff(rectangle12);
theif.bounceOff(rectangle13);
theif.bounceOff(rectangle14);
theif.bounceOff(rectangle15);
theif.bounceOff(rectangle16);
theif.bounceOff(rectangle17);
theif.bounceOff(rectangle18);
theif.bounceOff(rectangle19);
theif.bounceOff(rectangle20);
theif.bounceOff(rectangle21);
theif.bounceOff(rectangle22);
theif.bounceOff(rectangle23);
theif.bounceOff(rectangle24);
theif.bounceOff(rectangle25);
theif.bounceOff(rectangle26);
theif.bounceOff(rectangle27);
theif.bounceOff(rectangle28);
theif.bounceOff(rectangle29);
theif.bounceOff(rectangle30);
theif.bounceOff(rectangle31);
theif.bounceOff(rectangle32);
theif.bounceOff(rectangle33);
theif.bounceOff(rectangle34);
theif.bounceOff(rectangle35);
theif.bounceOff(rectangle36);
theif.bounceOff(rectangle37);
theif.bounceOff(rectangle38);
theif.bounceOff(rectangle39);
  
  if(keyDown(UP_ARROW)) {
    theif.velocityX = 0;
    theif.velocityY = -2;
  }
  
  if(keyDown(DOWN_ARROW)) {
    theif.velocityX = 0;
    theif.velocityY = 2;
  }
  
  if(keyDown(LEFT_ARROW)) {
    theif.velocityX = -2;
    theif.velocityY = 0;
  }
  
  if(keyDown(RIGHT_ARROW)) {
    theif.velocityX = 2;
    theif.velocityY = 0;
  }
 
}
 drawSprites();
}

