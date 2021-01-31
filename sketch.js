var wall, bullet, speed, weight, deformation, thickness 

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness = random(22,83)
  bullet=createSprite(50,200,70,30);
  bullet.shapeColor = "white"
  wall=createSprite(1200,200,thickness,200);
  wall.shapeColor = color(80,80,80)
}

function draw() {
  background(0);  

  bullet.velocityX = speed;

  if (bullet.x-wall.x<=bullet.width/2+wall.width/2 &&
    wall.x-bullet.x<=bullet.width/2+wall.width/2 )  {

      deformation= 0.5*weight*speed*speed/(thickness*thickness*thickness);
    bullet.velocityX = 0;

      if (deformation > 10){
        bullet.shapeColor="red";
     }
     
      if (deformation < 10){
     bullet.shapeColor="green";
     }
 }
 drawSprites();
}