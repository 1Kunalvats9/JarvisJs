//Elements
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const speakBtn = document.getElementById("speak");
//Speech Recognition Setup

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

//Sr on start and end console logs
//sr start
recognition.onstart = () =>{
    console.log("Voice is activated, please speak into the microphone");
}

//sr stop
recognition.onend = () =>{
    console.log("Voice is deactivated");
}
recognition.onresult = (event) =>{
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;
    console.log(transcript);
}

startBtn.addEventListener("click", () =>{
    recognition.start();
})
stopBtn.addEventListener("click", () =>{
    recognition.stop();
})

//Friday Speech Recognition
function readOut(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;
    speech.volume = 1;
    speech.rate = 0.2;
    speech.pitch = 0.7;
    window.speechSynthesis.speak(speech);
    console.log("Speaking...");
}

//example of readOut
speakBtn.addEventListener("click", () =>{
    readOut("Kunal  4 baap ka");
})