// DOM element
const textareaEl = document.querySelector('textarea');
const wordCounterEl = document.querySelector('#word_count');
const timeEstimate = document.querySelector('#time_estimate'); // experiment
let wpm;

// Get the value of textarea
// and calculate the total word
const getTotalWord = (element) => {
  let text = element.value;
  let totalWord = text.split(' ').filter((str) => str !== "").length;

  return text === '' ? 0 : totalWord;
}

// Update the word counter element
const setWordCounter = (element, value) => {
  element.textContent = value;
}

// Fire this function when the user is typing
textareaEl.addEventListener('keyup', () => {
  let totalWord = getTotalWord(textareaEl);
  setWordCounter(wordCounterEl, totalWord);
});

// Get the time estimate

const getTotalTime = (element) => {
  let text = element.value;
  let totalTime = text.split(' ').filter((str) => str !== "").length;

  // let totalTime = text.split(/ +/);

  // let words = text.split(' ');

  // let totalTime = 0;
  // for (let i = 0; i < totalTime.length; i+= 1) {
  //   let word = totalTime[i];
  //   if (word !== "") {
  //     totalTime = totalTime + 1;
  //   }
  // }
  // for (let word in totalTime) {
  //   if (word !== "") {
  //     totalTime = totalTime + 1;
  //   }
  // }

  return text === '' ? 0 : totalTime * 0.48;
  }

const setTimeEstimate = (element, value) => {
  element.textContent = Math.ceil(value);
}

textareaEl.addEventListener('keyup', () => {
  let totalTime = getTotalTime(textareaEl);
  setTimeEstimate (timeEstimate, totalTime);
})

// the timer
// https://dev.to/walternascimentobarroso/creating-a-timer-with-javascript-8b7

"use strict";

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(cron);
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById('hour').innerText = '00';
  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';
  document.getElementById('millisecond').innerText = '000';
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour').innerText = returnData(hour);
  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
  document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
  return input > 10 ? input : `0${input}`
}

// speech to text feature based on https://dev.to/asaoluelijah/text-to-speech-in-3-lines-of-javascript-b8h
// it doesn't work yet!!

if ('speechSynthesis' in window) {
 // Speech Synthesis supported 🎉
}else{
  // Speech Synthesis Not Supported 😣
  alert("Sorry, your browser doesn't support text to speech!");
}

// create a new speechSynthesis object, add required property and make our app talk👇

var msg = new SpeechSynthesisUtterance();

speechSynthesis.getVoices().forEach(function(voice) {
  console.log(voice.name, voice.default ? voice.default :'');
});

msg.text = "Good Morning";
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[10];
msg.volume = 1; // From 0 to 1
msg.rate = 1; // From 0.1 to 10
msg.pitch = 0; // From 0 to 2
msg.text = "Welcome to the scriptwriter, we love you!";
msg.lang = 'en';
window.speechSynthesis.speak(msg);
