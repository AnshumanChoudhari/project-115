    function setup(){
        canvas = createCanvas(300,300);
    canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
        
    }
        function preload(){
            mustach = loadImage('https://image.shutterstock.com/image-vector/italy-mustache-icon-simple-illustration-260nw-776460166.jpg')
    }

    function draw(){
image(video,0,0,640,480);
    }

    function take_snapshot(){
    save('Anshuman.png');
}

function modelLoaded(){
    console.log("poseNet is initialized");
   }