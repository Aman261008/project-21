var canvas;
var music;
var b1,b2,b3,b4;
var ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(430,400);

    //create 4 different surfaces

b1=createSprite(50,390,100,16);
b1.shapeColor="blue";
b2=createSprite(160,390,100,16);
b2.shapeColor="orange";
b3=createSprite(270,390,100,16);
b3.shapeColor="red";
b4=createSprite(380,390,100,16);
b4.shapeColor="green";
ball=createSprite(random(20,350),50,20,20);
ball.velocityY=2;
ball.velocityX=2;
    //create box sprite and give velocity

}

function draw() {

    background(rgb(169,169,169));
    //create edgeSprite
createEdgeSprites();

ball.bounceOff(edges);



if(isTouching(ball,b1)&&ball.bounceOff(b1)){
    ball.shapeColor="blue";
    music.play();
}
if(isTouching(ball,b2)&&ball.bounceOff(b2)){
    ball.shapeColor="orange";
    ball.velocityX=0;
    ball.velocityY=0;
}
if(isTouching(ball,b3)&&ball.bounceOff(b3)){
    ball.shapeColor="red";
}
if(isTouching(ball,b4)&&ball.bounceOff(b4)){
    ball.shapeColor="green";
}

drawSprites();
    //add condition to check if box touching surface and make it box
}