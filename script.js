let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

//AI voice generate convert text into speech
function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 2;
  text_speak.lang = "hi-GB";
  window.speechSynthesis.speak(text_speak);
}

//Wish GM , GA , GE , GN According To Time
function wishMe() {
  let day = new Date();
  let hours = day.getHours();
  if (hours >= 0 && hours < 12) {
    speak("Good Morning aman Have a nice Day");
  } else if (hours >= 12 && hours < 16) {
    speak("Good Afternoon muskan");
  } else {
    speak("Good Evening muskan");
  }
}

window.addEventListener("load", () => {
  setTimeout(wishMe, 3000);
});

let speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript;
  content.innerText = transcript;
  takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  recognition.start();
  btn.style.display = "none";
  voice.style.display = "block";
});
//take command and work according to command
function takeCommand(message) {
  btn.style.display = "flex";
  voice.style.display = "none";
  if (
    message.includes("hello") ||
    message.includes("hey") ||
    message.includes("hii")
  ) {
    speak("Hello aman, How can i help you?");
  } else if (message.includes("who are you")) {
    speak("I am aman's virtual assistant");
  } else if (message.includes("open youtube")) {
    speak("open youtube");
    window.open("https://www.youtube.com/", "_blank");
  } else if (message.includes("open google")) {
    speak("Open google");
    window.open("https://www.google.co.in/", "_blank");
  } else if (message.includes("open facebook")) {
    speak("Open Youtube");
    window.open("https://www.facebook.com/", "_blank");
  } else if (message.includes("open instagram")) {
    speak("Open instagram");
    window.open("https://www.instagram.com/", "_blank");
  } else if (message.includes("open twitter")) {
    speak("Open twitter");
    window.open("https://www.twitter.com", "_blank");
  } else if (message.includes("open linkedin")) {
    speak("Open linkedin");
    window.open("https://www.linkedin.com");
  } else if (message.includes("open calculator")) {
    speak("Open calculator");
    window.open("calculator://");
  } else if (message.includes("open folder")) {
    speak("Open folders");
    window.open("files://");
  } else if (message.includes("open calculator")) {
    speak("Open vs code");
    window.open("vs code://");
  } else if (message.includes("open terminal")) {
    speak("Open terminal");
    window.open("terminal://");
  } else if (message.includes("time")) {
    let time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    speak(time);
  } else if (message.includes("date")) {
    let date = new Date().toLocaleString(undefined, {
      day: "numeric",
      month: "short",
    });
    speak(date);
  } else {
    speak(
      `This is what i found on internet regarding ${
        message.replace("shifra", "") || message.replace("shipra", "")
      }`,
      "_blank"
    );
    window.open(
      `https://www.google.com/search?q=${message.replace("shipra", "")}`,
      "_blank"
    );
  }
}
