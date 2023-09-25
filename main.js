noseX=0;
noseY=0;

function preload() {

}

function setup() {
Canvas = createCanvas(300, 300);
Canvas.position(200, 170);
Canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
}

function draw(){
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX, noseY, 20);
}

function save() {
    save("My Filter Picture")
}