
const fonts = ["Brush Script MT","Comic Sans MS","CourierMCY","Abrima","JetBrains Mono"];


const output = document.querySelector("#output");
const text = document.querySelector("#text");
const count = document.querySelector("#count");
const color = document.querySelector("#color");
const fontSize = document.querySelector("#fontSize");
const fontFamily = document.querySelector("#fontFamily");
const textToSpeech = document.querySelector("#text-to-speech");
const speechToText = document.querySelector("#speech-to-text");
const synth = window.speechSynthesis;

const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance();
  utterance.rate = 0.8;
  utterance.text = text;
   utterance.voice = synth.getVoices()[0];

   utterance.addEventListener('start', () =>{
    textToSpeech.classList.add("active");
   });

   utterance.addEventListener('end', () =>{
    textToSpeech.classList.remove("active");
   });
   synth.speak(utterance);
};

const listen = () => {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';
recognition.start();

recognition.addEventListener('start', () =>{
    speechToText.classList.add("active");
    speechToText.innerHTML = `<div class="spinner-border spinner-border-sm" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`;
})

recognition.addEventListener('end', () =>{
    speechToText.classList.remove("active");
    speechToText.innerHTML = `<i class="bi bi-mic"></i>`;
})

let transcript = '';

recognition.onresult = function(event) {
  transcript = event.results[0][0].transcript;
  text.value += transcript;
};

}

fonts.forEach((font) => {
    fontFamily.append(new Option(font,font));
})


text.addEventListener("keyup", (event) => {
    // console.log(text.value);
    // console.log(event.target.value);
    output.innerText = event.target.value;
    count.innerText = event.target.value.length;
});

color.addEventListener('change', (event) => {
    output.style.color = color.value;
});

fontSize.addEventListener('change', (event) => {
    output.style.fontSize = event.target.value + "px";
})

fontFamily.addEventListener('change', (event) => {
    console.log(event.target.value);
    output.style.fontFamily = event.target.value;
})

textToSpeech.addEventListener('click',() =>{
    speak(text.value);
});

speechToText.addEventListener('click', () => listen());