class card{

constructor(xpos,ypos){

    this.size=50;
    if (xpos==undefined){
    this.x = random(0+this.size,width-this.size);} else {
    this.x = xpos;
    }
    if (ypos==undefined){
    this.y = random(0+this.size,height-this.size);} else {
    this.y = ypos;
    }
    this.xSpeed=2;
    this.ySpeed=2;
if (random()<.5){
this.xSpeed*=-1;
}
if (random()<.5){
this.ySpeed*=-1;
}

this.randomColor=random();

this.grabbed=false;

this.move=true;

}


display(){

push ();
if (this.randomColor<.33){
fill(255,0,0);
} else if (this.randomColor>=.33 && this.randomColor<=.66){
fill(0,255,0);
} else {
fill (0,0,255);
}
ellipse(this.x,this.y,this.size);  
pop ();
if (this.x<0+this.size/2 || this.x>width-this.size/2){
this.xSpeed*=-1;
}
if (this.y<0+this.size/2 || this.y>height-this.size/2){
this.ySpeed*=-1;
}
if (this.move){
this.x+=this.xSpeed;
this.y+=this.ySpeed;}

if (this.grabbed){
    this.changeColour();
    this.x=mouseX;
    this.y=mouseY;


let v0=createVector(this.x,this.y);
let v1=createVector(this.size*Math.sign(this.xSpeed),this.size*Math.sign(this.ySpeed));

    drawArrow(v0,v1,'black');
    }

if (this.x<this.size/2/1.1){this.x=this.size/2/1.1+1;}
if (this.x>width-this.size/2/1.1){this.x=width-this.size/2/1.1-1;}
if (this.y<this.size/2/1.1){this.y=this.size/2/1.1+1;}
if (this.y>height-this.size/2/1.1){this.y=height-this.size/2/1.1-1;}



}

changeColour(){
this.oldRandom=this.randomColor;
    this.randomColor=random();
if (this.oldRandom<.33 && this.randomColor<.33 || 
    this.oldRandom>=.33 && this.oldRandom<=.66 &&
    this.randomColor>=.33 && this.randomColor<=.66 ||
    this.oldRandom>.66 && this.randomColor>.66){
this.changeColour();
}

}

}