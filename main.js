Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90,

    constraints:{
        facingMode:"environment"
    }
})
Webcam.attach("camera")

function capture() {
    Webcam.snap(
        function(img) {
         document.getElementById("result").innerHTML=`<img src=${img} id="capimg">`   
        }
       
    )
}

//Check ML5 versionn
console.log("ml5 version:",ml5.version)

//Import the model
classifier= ml5.imageClassifier('MobileNet',modelloaded)
function modelloaded() {
    console.log("The 'modelloded' protocal has been succsessfully carried on")
}

function identify() {
      image= document.getElementById("capimg")
      classifier.classify(image, gotresult)
}

function gotresult(error, results){
    if (error) {
        console.log(error)
    } else {
        console.log(results) 
        document.getElementById("objectname").innerHTML=results[0].label
    }
}
