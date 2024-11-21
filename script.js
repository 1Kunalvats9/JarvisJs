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
    transcript = transcript.toLowerCase();
    console.log(transcript);
    if(transcript.includes("hi Jarvis")||transcript.includes("hello Jarvis")){
        readOut("Hello, how are you?");
        console.log("Hello Sir");
    }
    if(transcript.includes("open youtube")){
        readOut("Opening Youtube");
        window.open("https://www.youtube.com");
    }
    if(transcript.includes("open google")){
        readOut("Opening Google");
        window.open("https://www.google.com");
    }
    if(transcript.includes("open my github")){
        readOut("Opening Your Github Profile");
        window.open("https://github.com/1Kunalvats9");
    }
    if(transcript.includes("open my linkedin")){
        readOut("Opening Your Linkedin Profile");
        window.open("www.linkedin.com/in/kunal-vats-b67aa2309");
    }
    //google search
    if(transcript.includes("search for")){
        readOut("Here are the results for "+transcript.replace("search for", ""));
        window.open("https://www.google.com/search?q="+transcript.replace("search for", ""));
    }
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
// speakBtn.addEventListener("click", () =>{
//     readOut("Kunal  4 baap ka");
// })