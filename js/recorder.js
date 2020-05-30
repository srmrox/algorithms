let canvas = "";
let recorder = "";

function loadFunc() {
    canvas = document.getElementById('defaultCanvas0');
    recorder = new CanvasRecorder(canvas);
    recorder.start();
    console.log("Recording started");
}

function stopFunc() {
    recorder.stop();
    console.log("Recording stopped, saving...");
    recorder.save();
    console.log("Recording saved");
}