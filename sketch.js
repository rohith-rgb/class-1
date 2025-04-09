var toy;

function setup() {
  createCanvas(1500,795);
  toy = createSprite(200,200,30,30);
  toy.shapeColor = color("Red");
  
}

function draw() {
  background("pink"); 

  if (keyIsDown(RIGHT_ARROW)) 
  {
    toy.position.x = toy.position.x +5;
    toy.shapeColor="Red"
  }
  
  if (keyIsDown(LEFT_ARROW)) 
    {
      toy.position.x= toy.position.x -5;
      toy.shapeColor="Orange"
      
    }
    
    if (keyIsDown(UP_ARROW)) 
      {
        toy.position.y = toy.position.y - 5;
        toy.shapeColor="Yellow"
        
      }
      
      if (keyIsDown(DOWN_ARROW)) 
        {
          toy.position.y = toy.position.y + 5;
          toy.shapeColor="Darkblue"
  }

  drawSprites();
  fill(0);
  textSize(20);
  textAlign(CENTER,CENTER)
  text("🐶", toy.position.x, toy.position.y);
}




