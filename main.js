noseX = 0;
noseY = 0;
function preload() {
}

function setup() {
  canvas = createCanvas(640,400);
  canvas.center()
  video = createCapture(VIDEO);
  video.size(640,400);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function draw() {
  image(video, 0, 0, 640, 400);
  fill(255,0,0);
  stroke(255,255,0);
  circle(noseX, NoseY,20)
}
function take_snapshot(){
save('lookoutTHEWINDOW:).png');
}

function modelLoaded(){
  console.log('poseNet is Initializing');
}
function gotPoses(results){
if(results.length > 0){
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("nose x = " + noseX);
console.log("nose y = " + noseY);
}
}
