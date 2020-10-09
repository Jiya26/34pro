//Create variables here
var db;
var dog;
var happyDog;
var dog1;
var foods;
var foodStock;
function preload()
{
  //load images here
  dog=loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  db = firebase.database();
  foodStock = db.ref('foods');
  foodStock.on("value",readStock);
  dog1=createSprite(250,250,20,20);
  dog1.addImage(dog);
  dog1.scale = 0.5;

  
}


function draw() {  
  background(46,139,87);

  fill("white");
  text("remaining food : "+foods,100,50);
  text("Press UP ARROW to feed the dog",300,450)
  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog1.addImage(happyDog);
  }
  drawSprites();
}

function readStock(data){
  foods = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  db.ref('/').update({
    foods : x
  })
}
  



