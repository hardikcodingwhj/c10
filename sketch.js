var ball
function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200,10,10)
}

function draw() 
{
  background(30);
  if (keyDown(LEFT_ARROW)){
    ball.x-=2

  }

  if (keyDown(RIGHT_ARROW)){
    ball.x+=2

  }
  if (keyDown(UP_ARROW)){
    ball.y-=2

  }

  if (keyDown(DOWN_ARROW)){
    ball.y+=2

  }

drawSprites()
}




