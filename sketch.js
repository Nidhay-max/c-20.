var tom,mouse,tomimg1,tomimg2,tomimg3,garden,gardenimg,mouseimg1,mouseimg2,mouseimg3

function preload() {
gardenimg=loadImage("images/garden.png");
tomimg1=loadAnimation("images/cat1.png");
tomimg2=loadAnimation("images/cat2.png","images/cat3.png");
tomimg3=loadAnimation("images/cat4.png");
mouseimg1=loadAnimation("images/mouse1.png");
mouseimg2=loadAnimation("images/mouse2.png");
mouseimg3=loadAnimation("images/mouse3.png","images/mouse4.png");


}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    createCanvas(400,400);
    tom= createSprite(150,200,20,20);
    tom.addAnimation("tom1",tomimg1);
    tom.scale=0.2;

    mouse= createSprite(160,300,20,20);
    mouse.addAnimation("mouse1",mouseimg1);
    mouse.scale=0.12
}

function draw() {

    background(gardenimg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-mouse.x <(tom.width - mouse.width)/2){
      tom.velocityX=0;
      tom.x=300;
      tom.scale=0.2
      tom.addAnimation("tomlastimage",tomimg3);
      tom.changeAnimation("tomlastimage");

      mouse.scale=0.12
      mouse.addAnimation("mouse3",mouseimg3);
      mouse.changeAnimation("mouse3");
    }
    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
  tom.velocityX = -5;
  tom.addAnimation("catRunning",tomimg2);
  tom.changeAnimation("catRunning")

  mouse.addAnimation("mouserunning",mouseimg2);
    mouse.frameDelay=25;
  mouse.changeAnimation("mouserunning")
}
  //For moving and changing animation write code here


}
