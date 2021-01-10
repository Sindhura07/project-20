var car,wall


function setup() {
  createCanvas(1600,400);
 


  car=createSprite(100, 250, 30, 30);
  car.velocityX=8;
  car.shapeColor="orange"
  

 wall=createSprite(1500,200,40,height/2)
 wall.shapeColor="white"
}

function draw() {
  background("black");  
if(car.isTouching(wall)){
  car.velocityX=0
  car.shapeColor="blue"

}
  drawSprites();
}



















