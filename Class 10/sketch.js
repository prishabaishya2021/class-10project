sea.addImage(seaImg)
ship.addImage(shipImg)
function preload(){
seaImg =loadImage ("sea.png");
shipImg1 = loadAnimation("ship-1.png")

}

function setup(){
  createCanvas(400,400);

}

function draw() {
 background("blue");
 //code to reset the background
 if(sea.x<0){
   sea.x =sea.width/2;
 }
}