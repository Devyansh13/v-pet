var dog, happyDog, database, foodS, foodStock,dogname,fin;

function preload()
{
  dogImage=loadImage("Dog.png")
  HAPPYdog=loadImage("happydog.png")
}

function setup() {
  createCanvas(500,500);
 dogname= prompt("Name your dog","Name")
 dog=createSprite(240,220,50,50);
 dog.addImage("d1",dogImage);
 dog.scale=0.25;
 database=firebase.database();
 foodStock=database.ref('food');
 foodStock.on("value",readStock);
   } 
   function draw() {
  
  background(46, 139, 87) 
   textSize(20);
   fill("white")
   text("Here's your pet, "+dogname,120,70)
  drawSprites();
  //add styles here }
  fin=text("Remaining food items: "+foodS,100,400);
  console.log(foodS)

  if(keyWentDown(UP_ARROW)){
    dog.addImage("d1",HAPPYdog);
    writeStock(foodS);
    
    
  }

  if(foodS===0){
    foodS="Out Of Stock!";
  }

}

function readStock(data) {
foodS=data.val();

}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
database.ref('/').update({
  food:x
})

}







