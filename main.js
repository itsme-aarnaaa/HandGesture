//https://teachablemachine.withgoogle.com/models/hY5fH31r7/
var prediction1= "";
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
var cam= document.getElementById("camera");
Webcam.attach("#camera");
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= "<img id='capturedimg' src='"+data_uri+"'>";
    });
}
console.log("ml5 version",ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4k2SkVa2b/model.json",modelloaded);
function modelloaded(){
    console.log("model is loaded");
}
function speak(){
    var synth= window.speechSynthesis;
    speakdata1= "the first prediction is "+prediction1;
    var utterthis= new SpeechSynthesisUtterance(speakdata1);
    synth.speak(utterthis);
}
function check(){
    img= document.getElementById("capturedimg");
    classifier.classify(img,gotresult);
}
function gotresult(error,results){
    if(error){
        console.log(error);
    }
    else{
     console.log(results);
     document.getElementById("result_emotion_name1").innerHTML= results[0].label;
     prediction1= results[0].label;
     speak();
     if(results[0].label == "victory"){
        document.getElementById("update_emoji1").innerHTML= "&#9996";
     }
     if(results[0].label == "thumbs up"){
        document.getElementById("update_emoji1").innerHTML= "&#128077";
     }
     if(results[0].label == "ok"){
        document.getElementById("update_emoji1").innerHTML= "&#128076";
     }
    }
}