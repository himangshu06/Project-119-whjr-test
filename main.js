function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.hide();
console.log("ml5Version:",ml5.version);
Classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/M7-GwsAtN/model.json",modelLoaded);
}

function modelLoaded(){
    console.log("ModelLoaded!");
}

function draw(){
image(video,0,0,300,300);
Classifier.classify(video,gotResult);
}

function gotResult(error,results){
  if (error){
      console.error(error);

  }
  else{
console.log(results);
document.getElementById("result_object").innerHTML=results[0].label;
document.getElementById("result_object_acccuracy").innerHTML=results[0].confidence.toFixed(3);

}
}

