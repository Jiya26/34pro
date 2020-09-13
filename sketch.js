//Create variables here
var db;
var dog;
var happyDog;
var foods;
var foodStock;
function preload()
{
  //load images here
  dog=loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImag1.png");
}

function setup() {
  createCanvas(500, 500);
  background(46,139,87);
  db = firebase.database();
  foodStock = db.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  if(keyWentUp(UP_ARROW)){
    writeStock(foods);
    dog.addImage(happyDog);
  }
  drawSprites();
  //add styles here

}



