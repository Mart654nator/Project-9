
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,50,50)
}

function draw() 
{
  background(30);
if(keyDown("right")){
 background("blue")
}
if(keyDown("left")){
  background("red")
}
if(keyDown("up")){
  background("green")
}
if(keyDown("down")){
  background("yellow")
}

drawSprites()
}




