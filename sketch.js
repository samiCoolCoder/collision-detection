var fixrect;
var movingrect;
var sp1;
var sp2;



function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(550, 200, 50, 50);

  sp1=createSprite(200, 200, 50, 50);
  sp2=createSprite(300, 200, 50, 50);
  sp2.velocityX=-3;
  sp1.velocityX=3;
}

function draw() {
  background(0);
  movingrect.x=mouseX ; 
  movingrect.y=mouseY ;
 if (isTouching(movingrect,fixrect))
 {
  movingrect.shapeColor="white";
  fixrect.shapeColor="white";
  fixrect.velocityX=3
 }

 else
  {
    movingrect.shapeColor="green";
    fixrect.shapeColor="green";
  }

  bounceoff(sp1,sp2)
  drawSprites();
}

function isTouching(object1,object2)

{
  if  (object2.x-object1.x<object2.width/2+object1.width/2 &&
    object1.x-object2.x<object1.width/2+object2.width/2 &&
    object2.y-object1.y<object2.height/2+object1.height/2&&
    object1.y-object2.y<object1.height/2+object2.height/2)
  {
  //  movingrect.shapeColor="white";
    //fixrect.shapeColor="white";
    return true;
  }
 
  else
  {
    //movingrect.shapeColor="green";
    //fixrect.shapeColor="green";
    return false;
  }
}

function bounceoff(object1,object2)
{
  if  (object2.x-object1.x<object2.width/2+object1.width/2 &&
    object1.x-object2.x<object1.width/2+object2.width/2)
    {
      object1.velocityX=object1.velocityX*(-1)
      object2.velocityX=object2.velocityX*(-1)
    }

    if( object2.y-object1.y<object2.height/2+object1.height/2&&
      object1.y-object2.y<object1.height/2+object2.height/2)
      {
        object1.velocityY=object1.velocityY*(-1)
        object2.velocityY=object2.velocityY*(-1)
      }
}