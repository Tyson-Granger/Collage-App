var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var Recognition = new SpeechRecognition();
function start() {
Recognition.start();
}
Recognition.onresult = function (event) {
  console.log(event);
  var Content = event.results[0][0].transcript;
  console.log(Content);
  if (Content == "Take my selfie.") {
    console.log("taking your selfie");
    speak();
  }
};
function speak() {
  var Synth = window.speechSynthesis;
  speak_data = "taking your selfie in 5 seconds";
  var utterthis = new SpeechSynthesisUtterance(speak_data);
  Synth.speak(utterthis);
  Webcam.attach(camera);
setTimeout(function () {
        img_id = "selfie1";
        take_snapshot();
        speak_data = "taking your selfie in 5 seconds";
        var utterthis = new SpeechSynthesisUtterance(speak_data);
        Synth.speak(utterthis);
  }, 5000);
setTimeout(function () {
  img_id = "selfie2";
  take_snapshot();
  speak_data = "taking your selfie in 10 seconds";
  var utterthis = new SpeechSynthesisUtterance(speak_data);
  Synth.speak(utterthis);
}, 10000);
setTimeout(function () {
  img_id = "selfie3";
  take_snapshot();
  speak_data = "taking your selfie in 15 seconds";
  var utterthis = new SpeechSynthesisUtterance(speak_data);
  Synth.speak(utterthis);
}, 15000);
}
Webcam.set({
  width: 360,
  height: 250,
  image_format: "png",
  png_quality: 90,
});
camera = document.getElementById("camera");
function take_snapshot() {
    Webcam.snap(function (data_uri) {
        if (img_id == "selfie1") {
          document.getElementById("result1").innerHTML =
                '<img id="selfie1" src="' + data_uri + '">';
        }
                if (img_id == "selfie2") {
                  document.getElementById("result2").innerHTML =
                    '<img id="selfie2" src="' + data_uri + '">';
                }
                        if (img_id == "selfie3") {
                          document.getElementById("result3").innerHTML =
                            '<img id="selfie3" src="' + data_uri + '">';
                        }
      });
}