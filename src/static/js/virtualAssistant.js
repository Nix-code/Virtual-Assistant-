//  Welcome, to the basic javaScript Virtual Assistant
// This is created by Nishant Banjade 
const btn_click = document.querySelector('.SpeakToMe');
const content = document.querySelector('.content');

// Greetings
const greet_me = [
    "Hello Nishant",
    "Hello Friend",
    "Hi man",
    "Hi bro",
    "Hi Hommie"
];


const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

// SpeechRecognition object
const recognition = new SpeechRecognition();

window.addEventListener("load",function() {
   
    speak('Activating Virtual Assistant');
    speak('Here we go');
    wishMe();
});
// speak function

function speak(sentence) {
    const utterance = new SpeechSynthesisUtterance(sentence)

    utterance.rate = 1
    utterance.pitch = 1

    window.speechSynthesis.speak(utterance)
}
// wishme() function

function wishMe(){
    var day = new Date();
    var hour = day.getHours();
    if(hour >=0 && hour <12){
        speak("Good Morning sir");
    }
    else if(hour ==12){
        speak("Good noon sir");
    }
    else if(hour >=12 && hour <=17){
        speak("Good Afternoon sir");
    }
    else {
        speak("Good Evening sir");
    }
}

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn_click.addEventListener('click', () => {
    recognition.start();
});


