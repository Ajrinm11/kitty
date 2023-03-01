function preload()
{

}

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Model loaded! :)");
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);

        console.log("eye left x = "+ results[0].pose.leftEye.x);
        console.log("eye left y = "+ results[0].pose.leftEye.y);

        console.log("eye right x = "+ results[0].pose.rightEye.x);
        console.log("eye right y = "+ results[0].pose.rightEye.y);
    }
}

function draw()
{
    image(video, 0, 0, 400, 400);
}

function take_snapshot()
{
    save('myFilterImage.png');
}