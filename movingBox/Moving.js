let myPosX = 25;
let myPosY = 25;
let mySpeed = 20;


let enemyPosX,enemyPosY;
let enemyWidth,enemyHeight;

let points=0


let clefairy;
let togepi;


function setup(){
    createCanvas(500,500);
    background(0);

    rectMode(CENTER);

    enemyPosX = random(25,475);
    enemyPosY = random (100, 475);

    //Load images

    clefairy= loadImage("clefairy.png");
    togepi = loadImage("togepi.png")
}

function draw() {

    background(0);

    fill(0,0,255);
    rect(myPosX,myPosY,50,50);

    fill(255,0,0);
    rect(enemyPosX,enemyPosY,50,50);


    if (keyIsDown(LEFT_ARROW)) {
        myPosX -= mySpeed;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        myPosX += mySpeed;
    }

    if (keyIsDown(UP_ARROW)) {
        myPosY -= mySpeed;
    }

    if (keyIsDown(DOWN_ARROW)) {
        myPosY += mySpeed;
    }

    if (myPosX<25) {
        myPosX=25;
    }

    if (myPosX>=475) {
        myPosX = 475;
    }

    if (myPosY<25) {
        myPosY=25;
    }

    if (myPosY >= 475) {
        myPosY = 475;
    }

    myLeft= myPosX-25;
    myRight= myPosX+25;
    myTop = myPosY-25;
    myBottom = myPosY+25;


    enemyLeft = enemyPosX-25;
    enemyRight = enemyPosX +25;
    enemyTop = enemyPosY-25;
    enemyBottom = enemyPosY+25;

    if(myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom|| myBottom < enemyTop) {

    }

    else{
        console.log("collision");
        
        points++

        enemyPosX = random(25,475);
        enemyPosY = random (100, 475)

    }

    fill(255);
    text("Enemies collected:" + points, 340, 25);

}