song_1 = "";
song_2 = "";

function preload()
{
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}
function setup() 
{
    canvas = createCanvas(400, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
}

function draw()
{
    image(video, 0, 0, 400, 300);
}
