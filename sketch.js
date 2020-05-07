let factor = 0;
let r;
let angle;
const total = 200;

let noiseMax = 5
let slider;
let zoff = 0;
let xoff = 0;
let yoff = 0;

function setup(){
// createCanvas(600,600);
createCanvas(600,600,WEBGL);

slider = createSlider(0,10,5,0.1);

r = width/2 - 16;
}

function getVector(index, total){
   const angle = map(index % total, 0, total, 0, TWO_PI);
   const v = p5.Vector.fromAngle(angle + PI);
   v.mult(r);
   return v;
}

function draw(){
 background(0);

 //translate(width/2,height/2);

//   rotateX(total/5);
//   rotateY(factor*4);
//   rotateZ(factor*4);

 factor += 0.01;

 stroke(random(0,255), 105, 255);
 strokeWeight(2);
 noFill();
 ellipse(0, 0, r * 2);

  for(let i = 0; i < total; i++){
    const a = getVector(i, total);
    const b = getVector(i * factor, total);
    line(a.x,a.y,b.x,b.y);
 }

 rotateX(xoff);
 rotateY(yoff);
 rotateZ(zoff);

 stroke(random(0,255), random(0,255), random(0,255));
 strokeWeight(4);
 noFill();

 noiseMax = slider.value();

 
  beginShape();
 for(let a = 0; a < TWO_PI ; a += 0.1){
     let xoff = map(cos(a),-1,1,0,noiseMax)
     let yoff = map(sin(a),-1,1,0,noiseMax);
     let r = map(noise(xoff,yoff,zoff),0,1,100,200);
     let x = r * cos(a);
     let y = r * sin(a);
     let z = r * (-sin * cos(a));
     vertex(x,y,z);
  }
 endShape(CLOSE);

zoff += 0.1;
yoff += 0.05;
xoff += 0.05;

}