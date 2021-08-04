// let video;
// let poseNet;
// let noseX = 0;
// let noseY = 0;
// let eyelX = 0;
// let eyelY = 0;
 
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   video = createCapture(VIDEO);
//   video.hide();
//   poseNet = ml5.poseNet(video, modelReady);
//   poseNet.on('pose', gotPoses);
// }

// function gotPoses(poses) {
//   // console.log(poses);
//   if (poses.length > 0) {
//     let nX = poses[0].pose.keypoints[0].position.x;
//     let nY = poses[0].pose.keypoints[0].position.y;
//     let eX = poses[0].pose.keypoints[1].position.x;
//     let eY = poses[0].pose.keypoints[1].position.y;
//     noseX = lerp(noseX, nX, 0.5);
//     noseY = lerp(noseY, nY, 0.5);
//     eyelX = lerp(eyelX, eX, 0.5);
//     eyelY = lerp(eyelY, eY, 0.5);
//   }
// }

// function modelReady() {
//   console.log('model ready');
// }

// function draw() {
//   background(255);

//   translate(video.width, 0);
//   //to flip the image
//   scale(-1, 1);
//   //draw video capture feed as image inside p5 canvas
//   image(video, 0, 0);
  
//   let d = dist(noseX, noseY, eyelX, eyelY);

//   fill(255, 0, 0);
//   ellipse(noseX, noseY, d/1.2);
//   fill(255);
//   ellipse(eyelX, eyelY, d/1.2);
//   fill(255,0,0);
//   ellipse(eyelX, eyelY, d/1.5);
// }

var model;

function preload(){
    model = loadModel("Emotive creature.obj");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(0);
}