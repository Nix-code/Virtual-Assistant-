//  Welcome, to the basic javaScript Virtual Assistant
// This is created by Nishant Banjade 
const btn_click = document.querySelector('.SpeakToMe');
const content = document.querySelector('.content');
const answer = document.querySelector('.answer');

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
// Remove this to listen something everytime you load the page
btn_click.addEventListener('click', ()=> {
    recognition.start();
});


function speakThis(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = "Sorry, I couldn't understand what you have said";

    if(message.includes('hi') || message.includes('hello') || message.includes('hy') || message.includes('hii')){
        const finalAns = greet_me[Math.floor(Math.random() * greet_me.length)];
        speech.text = finalAns;
    }
    else if(message.includes('how are you') || message.includes('whats up')){
        const finalAns = "I am fine, How are you";
        speech.text = finalAns;
    }
    else if(message.includes('tell me the time') || message.includes('current time') || message.includes('time')){
        const time = new Date().toLocaleString(undefined, {hour:"numeric", minute:"numeric"});
        
        const finalAns = time;
        speech.text = finalAns;
    }
    else if(message.includes("today's date") || message.includes('tell me the date') || message.includes('date')){
        const date = new Date().toLocaleString(undefined, {month:"short", day:"numeric"});
        
        const finalAns = date;
        speech.text = finalAns;
    }
    else if(message.includes("your name") || message.includes("who are you")){
        const finalAns = "I am Jarvis";
        speech.text = finalAns;
    }
    else if(message.includes("my name")){
        const finalAns = "Your name is Nishant";
        speech.text = finalAns;
    }
    else if (message.includes('open google')) {
        window.open(`http://google.com`, "_blank");
        const finalAns = 'opening google';
        speech.text = finalAns;
    }

    else if (message.includes('open instagram')) {
        window.open(`http://instagram.com`, "_blank");
        const finalAns = 'opening instagram';
        speech.text = finalAns;
    }

    else if (message.includes('open youtube')) {
        window.open(`http://youtube.com`, "_blank");
        const finalAns = 'opening youtube';
        speech.text = finalAns;
    }
    else if (message.includes('open facebook')) {
        window.open(`http://facebook.com`, "_blank");
        const finalAns = 'opening facebook';
        speech.text = finalAns;
    }
    

    
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
    
}
