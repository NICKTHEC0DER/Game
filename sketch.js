var player, playerIMGR, playerIMGL, playerIMGU, playerIMGD;
var bg,bgIMG

function preload(){
    playerIMGR = loadAnimation("images/right_player/sprite_00.png","images/right_player/sprite_01.png","images/right_player/sprite_02.png","images/right_player/sprite_03.png","images/right_player/sprite_04.png","images/right_player/sprite_05.png","images/right_player/sprite_06.png","images/right_player/sprite_07.png","images/right_player/sprite_08.png","images/right_player/sprite_09.png","images/right_player/sprite_10.png","images/right_player/sprite_11.png")
    bgIMG = loadImage("images/sprites/output-onlinepngtools (1).png") 
    playerIMGL = loadAnimation("images/left_player/sprite_00.png","images/left_player/sprite_01.png","images/left_player/sprite_02.png","images/left_player/sprite_03.png","images/left_player/sprite_04.png","images/left_player/sprite_05.png","images/left_player/sprite_06.png","images/left_player/sprite_07.png","images/left_player/sprite_08.png","images/left_player/sprite_09.png","images/left_player/sprite_10.png","images/left_player/sprite_11.png")
    playerIMGU = loadAnimation("images/up_player/sprite_00.png","images/up_player/sprite_01.png","images/up_player/sprite_02.png","images/up_player/sprite_03.png","images/up_player/sprite_04.png","images/up_player/sprite_05.png","images/up_player/sprite_06.png","images/up_player/sprite_07.png","images/up_player/sprite_08.png","images/up_player/sprite_09.png","images/up_player/sprite_10.png","images/up_player/sprite_11.png")
    playerIMGD = loadAnimation("images/down_player/sprite_00.png","images/down_player/sprite_01.png","images/down_player/sprite_02.png","images/down_player/sprite_03.png","images/down_player/sprite_04.png","images/down_player/sprite_05.png","images/down_player/sprite_06.png","images/down_player/sprite_07.png","images/down_player/sprite_08.png","images/down_player/sprite_09.png","images/down_player/sprite_10.png","images/down_player/sprite_11.png")
    
  }

function setup(){
   createCanvas(displayWidth,displayHeight);
   

    bg = createSprite(displayWidth/2,displayHeight/2,displayWidth*2,displayHeight*2);
    
    bg.addImage(bgIMG);    
    bg.scale = 5

    player = createSprite(60,60,40,40);
   player.addAnimation("playerR",playerIMGR);
   player.addAnimation("playerL",playerIMGL);
   player.addAnimation("playerU",playerIMGU);
   player.addAnimation("playerD",playerIMGD);
}

function draw(){
 background("lightgreen");

 if (keyWentDown ("D")) {
  player.changeAnimation("playerR ",playerIMGR); 
  

}
if (keyWentUp ("D")) {
  player.changeAnimation("playerR ",playerIMGR); 
  
}
if (keyDown ("D")) {
 
  player.x=player.x + 5;
}

 if (keyWentDown ("A")) {
  player.changeAnimation("playerL",playerIMGL);
  

}
if (keyWentUp ("A")) {
  player.changeAnimation("playerL",playerIMGL);
  

}if (keyDown ("A")) {

  player.x=player.x - 5;

}
 

if (keyWentDown ("W")) {
player.changeAnimation("playerU ",playerIMGU);
 player.y=player.y - 5;
}


if (keyWentDown ("S")) {
  player.changeAnimation("playerD ",playerIMGD)
  player.y=player.y + 5;
}


 //camera.x =player.x;
 //camera.y =player.y;
  
  drawSprites();
}   

