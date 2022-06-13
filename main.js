nosex = 0;
nosey = 0;

rightWrist = 0;
leftWrist = 0;
difference = 0;

function setup(){

video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(550, 500);
canvas.position(660, 150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){

background('#ceced6');

document.getElementById("square_side").innerHTML = "Width and Height of the square will be = " + difference + "px";

fill('#865d8f');
stroke('#865d8f');
square(nosex, nosey, difference);

}

function modelLoaded(){

console.log("wow it works");

}

function gotPoses(results){

if(results.length > 0){
    console.log(results);

    nosex = results[0].pose.nose.x;
    nosey = results[0].pose.nose.y;
    console.log("nose x =" + nosex + "and nose y =" + nosey);

    rightWrist = results[0].pose.rightWrist.x;
    leftWrist = results[0].pose.leftWrist.y;
    difference = floor(leftWrist - rightWrist);
    console.log("left wrist x =" + leftWrist + "right wrist x = " + rightWrist + "difference = " + difference);
}
}