function setup(){
    video = createCapture(VIDEO);
    video.size(600, 500);
    video.position(100, 150);

    canvas = createCanvas(600, 500);
    canvas.position(800, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("#FFA500");
}

function modelLoaded() {
    console.log("PoseNet Model Is loaded!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}
