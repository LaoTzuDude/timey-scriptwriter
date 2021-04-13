// DOM element
const textareaEl = document.querySelector('textarea');
const wordCounterEl = document.querySelector('#word_count');
const timeEstimate = document.querySelector('#time_estimate'); // experiment
let wpm;

// Get the value of textarea
// and calculate the total word
const getTotalWord = (element) => {
  let text = element.value;
  let totalWord = text.split(' ').length - 1;

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
  let totalTime = text.split(' ').length - 1;

  return text === '' ? 0 : totalTime * 0.48;
  }

const setTimeEstimate = (element, value) => {
  element.textContent = value;
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
