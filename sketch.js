var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "rgb";

  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background(255,255,255);
  speed.velocityX = 4;
  car.velocityX = speed;

  if(car.x > 100){
    car.shapeColor = "Green";
  }

  if(car.x > 100 && car.x < 180) {
     car.shapeColor = "Yellow";
  }

  if(car.x>180){
  car.shapeColor = "Red";
  }
  drawSprites();
}