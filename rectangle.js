function sprites_of_the_game(){
    rectangle1 = createSprite(10,30,35,70); 
 rectangle2 = createSprite(110,110,30,70);
 rectangle3 = createSprite(100,40,90,30);
 rectangle4 = createSprite(50,90,90,30);
 rectangle5 = createSprite(200,90,90,30);
 rectangle6 = createSprite(250,90,90,30);
 rectangle7 = createSprite(300,90,90,30);
 rectangle8 = createSprite(360,90,90,30);
 rectangle9 = createSprite(310,40,90,30);
 rectangle10 = createSprite(80,150,90,30);
 rectangle11 = createSprite(10,150,90,30);
 rectangle12 = createSprite(150,150,90,30);
 rectangle13 = createSprite(200,150,90,30);
 rectangle14 = createSprite(250,150,90,30);
 rectangle15 = createSprite(300,150,90,30);
 rectangle16 = createSprite(320,150,90,30);
 rectangle17 = createSprite(350,180,30,60);
 rectangle18 = createSprite(360,250,90,20);
 rectangle19 = createSprite(340,250,90,20);
 rectangle20 = createSprite(280,230,30,60);
 rectangle21 = createSprite(240,210,100,30);
 rectangle22 = createSprite(180,210,100,30);
 rectangle23 = createSprite(40,210,100,30);
 rectangle24 = createSprite(40,210,100,30);
 rectangle25 = createSprite(160,250,90,10);
 rectangle26 = createSprite(40,270,100,30);
 rectangle27 = createSprite(100,300,90,30);
 rectangle28 = createSprite(150,300,100,30);
 rectangle29 = createSprite(200,300,100,30);
 rectangle30 = createSprite(250,300,100,30);
 rectangle31 = createSprite(300,300,100,30);
 rectangle32 = createSprite(360,360,100,30);
 rectangle33 = createSprite(310,360,100,30);
 rectangle34 = createSprite(260,360,100,30);
 rectangle35 = createSprite(210,360,100,30);
 rectangle36 = createSprite(160,360,100,30);
 rectangle37 = createSprite(110,360,100,30);
 rectangle38 = createSprite(90,360,100,30);
 rectangle39 = createSprite(398,400,10,55);

 rectangle1.shapeColor = "brown" ;
  rectangle2.shapeColor = "brown" ;
  rectangle3.shapeColor = "brown" ;
  rectangle4.shapeColor = "brown" ;
  rectangle5.shapeColor = "brown" ;
  rectangle6.shapeColor = "brown" ;
  rectangle7.shapeColor = "brown" ;
  rectangle8.shapeColor = "brown" ;
  rectangle9.shapeColor = "brown" ;
  rectangle10.shapeColor = "brown" ;
  rectangle11.shapeColor = "brown" ;
  rectangle12.shapeColor = "brown" ;
  rectangle13.shapeColor = "brown" ;
  rectangle14.shapeColor = "brown" ;
  rectangle15.shapeColor = "brown" ;
  rectangle16.shapeColor = "brown" ;
  rectangle17.shapeColor = "brown" ;
  rectangle18.shapeColor = "brown" ;
  rectangle19.shapeColor = "brown" ;
  rectangle20.shapeColor = "brown" ;
  rectangle21.shapeColor = "brown" ;
  rectangle22.shapeColor = "brown" ;
  rectangle23.shapeColor = "brown" ;
  rectangle24.shapeColor = "brown" ;
  rectangle25.shapeColor = "brown" ;
  rectangle26.shapeColor = "brown" ;
  rectangle27.shapeColor = "brown" ;
  rectangle28.shapeColor = "brown" ;
  rectangle29.shapeColor = "brown" ;
  rectangle30.shapeColor = "brown" ;
  rectangle31.shapeColor = "brown" ;
  rectangle32.shapeColor = "brown" ;
  rectangle33.shapeColor = "brown" ;
  rectangle34.shapeColor = "brown" ;
  rectangle35.shapeColor = "brown" ;
  rectangle36.shapeColor = "brown" ;
  rectangle37.shapeColor = "brown" ;
  rectangle38.shapeColor = "brown" ;
  rectangle39.shapeColor = "lightblue" ;

  theif = createSprite(5,16,112,12);
theif.addImage("theifImage",theifImage);
theif.scale  = 0.2;

police1 = createSprite(163,124,112,12);
police1.addImage("police.png",policeImage1);
police1.scale  = 0.06;

police2 = createSprite(42,40,112,12);
police2.addImage("police.png",policeImage2);
police2.scale  = 0.06;

police3 = createSprite(42,40,112,12);
police3.addImage("police.png",policeImage3);
police3.scale  = 0.06;

police4 = createSprite(42,40,112,12);
police4.addImage("police.png",policeImage4);
police4.scale  = 0.06;

coin = createSprite(233,52,41,51);
coin.addImage("coin.png",coinImage);
coin.scale = 0.06;

life1 = new Life(139,108,10,0);
life2 = new Life(111,210,10,0);
life3 = new Life(15,358,10,0);
}