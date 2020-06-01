var circles=[];



function setup(){


    createCanvas(500,500);
for (let index = 0; index < 2; index++) {
    spawnNew();
    
}

    
}

function draw(){


    background(200);



for (let index = 0; index < circles.length; index++) {

    circles[index].display(); 

    for (let i = 0; i < circles.length; i++) {

if (index!=i){
if (getDistance(circles[index].x,circles[index].y,circles[i].x,circles[i].y)<circles[index].size){
if (circles[index].xSpeed!=circles[i].xSpeed){
circles[index].xSpeed*=-1;
circles[i].xSpeed*=-1;}
if (circles[index].ySpeed!=circles[i].ySpeed){
circles[index].ySpeed*=-1;
circles[i].ySpeed*=-1;}
}
}
    }
}


}

function spawnNew(x,y){

        circles.push(new card(x,y));


}

function mousePressed(){
var checkShit=1;

    for (let index = 0; index < circles.length; index++) {

    if (mouseX<circles[index].x+circles[index].size/2 && mouseX>circles[index].x-circles[index].size/2
&& mouseY<circles[index].y+circles[index].size/2 && mouseY>circles[index].y-circles[index].size/2){
    if(circles[index].grabbed){
    circles[index].grabbed=false;} else{
    circles[index].grabbed=true;
    } 
checkShit=0;
}

}
if (checkShit==1){
    circles.push(new card(mouseX,mouseY));   
}
console.log(checkShit);
}


function drawArrow(base, vec, myColor) {
    push();
    stroke(myColor);
    strokeWeight(3);
    fill(myColor);
    translate(base.x, base.y);
    line(0, 0, vec.x, vec.y);
    rotate(vec.heading());
    let arrowSize = 7;
    translate(vec.mag() - arrowSize, 0);
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
  }

function getDistance(x1,y1,x2,y2){
let xDist=x2-x1;
let yDist=y2-y1;

return Math.sqrt(Math.pow(xDist,2)+Math.pow(yDist,2));

}