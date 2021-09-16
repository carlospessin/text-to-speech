let speech = new SpeechSynthesisUtterance();
speech.lang = "pt-BR";

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[16];
    // [0] - Daniel
    // [1] - Maria
    // [16] - Google
};

// PLAY
document.querySelector("#play").addEventListener("click", () => {
    play = document.querySelector("#play")
    pause = document.querySelector("#pause")

    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);

    play.classList.add('hidden');
    pause.classList.remove('hidden');

    reload();
});

// PAUSE
document.querySelector("#pause").addEventListener("click", () => {
    pause = document.querySelector("#pause")
    resume = document.querySelector("#resume")

    window.speechSynthesis.pause();

    pause.classList.add('hidden');
    resume.classList.remove('hidden');
});

// RESUME
document.querySelector("#resume").addEventListener("click", () => {
    pause = document.querySelector("#pause")
    resume = document.querySelector("#resume")

    window.speechSynthesis.resume();

    resume.classList.add('hidden');
    pause.classList.remove('hidden');
});

// STOP
document.querySelector("#stop").addEventListener("click", () => {
    play = document.querySelector("#play")
    pause = document.querySelector("#pause")
    resume = document.querySelector("#resume")

    window.speechSynthesis.cancel();

    pause.classList.add('hidden');
    resume.classList.add('hidden');
    play.classList.remove('hidden');
});


 function reload() {
    let r = setInterval(() => {

        console.log('reload');
        clearInterval(r);
        
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();

        reload();
        
    }, 13000);
}

speech.onend = function() { 
    play = document.querySelector("#play")
    pause = document.querySelector("#pause")
    resume = document.querySelector("#resume")

    pause.classList.add('hidden');
    resume.classList.add('hidden');
    play.classList.remove('hidden');
 };