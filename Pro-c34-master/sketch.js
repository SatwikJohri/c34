//Create variables here
var dog;
var database;
var foodS;
var foodStock;
var dog_img;
var happyDog_img;
function preload()
{
  //load images here
  dog_img = loadImage("images/dogImg.png");
  happyDog_img = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800, 700);
  dog = createSprite(250,250);
  dog.addImage(dog_img);
dog.scale = 0.2;
  database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value",readStock)
}

function readStock(data){
  foodS = data.val();
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
function draw() {  
  background(46,139,87);
  textSize(35);
  fill("white");
  
  text("Food left: " + foodS,250,150);
  text("Press the UP_ARROW key to feed Mark milk!",50,50);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog_img);
  }
  drawSprites();
  //add styles here

}



