var ship, ship_sailing;
var sea, sea_image;

function preload(){
sea_image = loadAnimation("sea.png");
  ship_sailing = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(700,400);

  sea = createSprite(400, 100, 4168, 1667);
  sea.addAnimation("sea", sea_image);
  sea.x=sea.width/2;
  sea.velocityX=-4;



  ship = createSprite(110,210,20,50);
  ship.addAnimation("sailing",ship_sailing);
  ship.scale=0.26;

  
}

function draw() {
  background("lightblue");
  drawSprites();

  if (sea.x < 0) {
    sea.x = sea.width / 2;
  }

}