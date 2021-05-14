var police
var thief
var score
var coins
var bank
var city
var energy , ground
var gameState = 1; 
var cardboardImg


function preload(){
  thief= loadImage("thief.png");
  police = loadImage("police.png");
  coins = loadImage("coin 2.png");
  cardboardImg = loadImage("building1.png");
  cardboardImg2 = loadImage("building2.png")
  cardboardImg3 = loadImage ("building3.png")
 }

function setup() {
  createCanvas(1200,600);

  form = new Form();
  police =  createSprite(400, 300, 50, 50);

 thief =  createSprite(500, 100, 50, 50);

cardboard1 = createSprite(random(100,600), random(100,600) , 20, 150);
cardboard1.addImage(cardboardImg);
cardboard1.scale = 0.5;

 cardboard2 = createSprite(random(100,600), random(100,600) , 20, 150);
 cardboard2.addImage(cardboardImg);
 cardboard2.scale = 0.5;

 cardboard3 = createSprite(random(100,1100), random(100,600) , 20, 150);
 cardboard3.addImage(cardboardImg);
 cardboard3.scale = 0.5; 

 cardboard4 = createSprite(random(100,1100), random(100,600) , 20, 150);
 cardboard4.addImage(cardboardImg);
 cardboard4.scale = 0.5;

 cardboard5 = createSprite(random(100,1100), random(100,600) , 20, 150);
 cardboard5.addImage(cardboardImg);
 cardboard5.scale = 0.5; 
  

 cardboard6 =createSprite(random(100,1100), random(100,600) , 20, 150);
 cardboard6.addImage(cardboardImg);
 cardboard6.scale = 0.5;
 
 cardboard7 =createSprite(random(100,1100), random(100,600) , 20, 150);
 cardboard7.addImage(cardboardImg);
 cardboard7.scale = 0.5;

 cardboard8 = createSprite(random(100,1100), random(100,600) , 20, 150);
 cardboard8.addImage(cardboardImg2);
 cardboard8.scale = 0.5;

cardboard9 =createSprite(random(700,1100), random(100,600) , 20, 150);
cardboard9.addImage(cardboardImg2);
cardboard9.scale = 0.5;

 cardboard10 = createSprite(random(100,1100), random(100,600) , 20, 150);
 cardboard10 .addImage(cardboardImg2);
 cardboard10.scale = 0.5;

 cardboard11 = createSprite(random(100,1100), random(100,600) , 20, 150);
 cardboard11 .addImage(cardboardImg2);
 cardboard11.scale = 0.5;

 cardboard12 = createSprite(random(100,1100), random(100,600) , 20, 150);
 cardboard12 .addImage(cardboardImg2);
 cardboard12.scale = 0.5;

 cardboard13 = createSprite(random(100,1100), random(100,600) , 20, 150);
 cardboard13.addImage(cardboardImg2);
 cardboard13.scale = 0.5;

 cardboard14 = createSprite(random(100,1100), random(100,600) , 20, 150);
 cardboard14 .addImage(cardboardImg2);
 cardboard14.scale = 0.5;

 cardboard15 = createSprite(random(100,1100), random(100,600) , 20, 150);
 cardboard15 .addImage(cardboardImg3);
 cardboard15.scale = 0.3;

 cardboard16 = createSprite(random(100,1100), random(100,600) , 20, 150);
 cardboard16 .addImage(cardboardImg3);
 cardboard16.scale = 0.3;

 cardboard17 = createSprite(random(100,1100), random(100,600) , 20, 150);
 cardboard17 .addImage(cardboardImg3);
 cardboard17.scale = 0.3;

 cardboard18 = createSprite(random(100,1100), random(100,600) , 20, 150);
 cardboard18 .addImage(cardboardImg3);
 cardboard18.scale = 0.3;

 cardboard19 = createSprite(random(100,1100), random(100,600) , 20, 150);
 cardboard19 .addImage(cardboardImg3);
 cardboard19.scale = 0.3;

 cardboard1.visible = false;
 cardboard2.visible = false;
 cardboard3.visible = false;
 cardboard4.visible = false;
 cardboard5.visible = false;
 cardboard6.visible = false;
 cardboard7.visible = false;
 cardboard8.visible = false;
 cardboard9.visible = false;
 cardboard10.visible = false;
 cardboard11.visible = false;
 cardboard12.visible = false;
 cardboard13.visible = false;
 cardboard14.visible = false;
 cardboard15.visible = false;
 cardboard16.visible = false;
 cardboard17.visible = false;
 cardboard18.visible = false;
 cardboard19.visible = false;
 police.visible = false;
 thief.visible = false;
}

function draw() {
  background("lightblue");

  if (gameState === 1) {
    form.display();  
    if(keyDown("space")){
      form.hide()
      gameState = 2
  }  
  if(keyDown("RIGHT_ARROW")){
    form.hide()
    gameState = 3;
}
  }
  

  if(gameState === 2){
    form.hide()
    cardboard1.visible = true;
    cardboard2.visible = true;
    cardboard3.visible = true;
    cardboard4.visible = true;
    cardboard5.visible = true;
    cardboard6.visible = true;
    cardboard7.visible = true;
    cardboard8.visible = true;
    cardboard9.visible = true;
    cardboard10.visible = true;
    cardboard11.visible = true;
    cardboard12.visible = true;
    cardboard13.visible = true;
    cardboard14.visible = true;
    cardboard15.visible = true;
    cardboard15.visible = true;
    cardboard17.visible = true;
    cardboard18.visible = true;
    cardboard19.visible = true;
    police.visible = true;

    if (keyDown("UP_ARROW")) {
      police.velocityX = 0;
      police.velocityY = -2;
    }
    
    if (keyDown("DOWN_ARROW")) {
      police.velocityX = 0;
      police.velocityY = 2;
    }
    if (keyDown("LEFT_ARROW")) {
      police.velocityX = -2;
      police.velocityY = 0;
    }
    if (keyDown("RIGHT_ARROW")) {
      police.velocityX = 2;
      police.velocityY = 0;
    }
   

    
  }

  if(gameState === 3){
    form.hide()
    cardboard1.visible = true;
    cardboard2.visible = true;
    cardboard3.visible = true;
    cardboard4.visible = true;
    cardboard5.visible = true;
    cardboard6.visible = true;
    cardboard7.visible = true;
    cardboard8.visible = true;
    cardboard9.visible = true;
    cardboard10.visible = true;
    cardboard11.visible = true;
    cardboard12.visible = true;
    cardboard13.visible = true;
    cardboard14.visible = true;
    cardboard15.visible = true;
    cardboard15.visible = true;
    cardboard17.visible = true;
    cardboard18.visible = true;
    cardboard19.visible = true;
    thief.visible = true;
  }
  drawSprites();

}
