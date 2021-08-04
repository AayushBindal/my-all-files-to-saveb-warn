let bot;
let textInput, textOutput;
let speech;
var searchValue;
var video;
var mic;
let speechRec;
let input;
let reply;

async function loadBot() {
  await bot.loadFile('brain.rive.txt');
  bot.sortReplies();
}

async function chat() {
  let txt = textInput.value();
  reply = await bot.reply('local-user', txt);
  searchValue = textInput.value();
  var s = createP(searchValue);
  s.addClass("userchat");
  speech.speak(reply);
  botch = createP(reply).addClass('botchat');
  
  createA("https://www.google.com/search?q="+searchValue+"&cvid=ba194626fbac4114be33953f19549c7a&aqs=edge.0.0l7.579j0j1&pglt=931&FORM=ANNTA1&PC=HCTS","my I search it for you","_blank");
  botch.id="botchatId";
  console.log(botch.id);
  if(reply.toLowerCase()==="ok! opening the mirror"){
    video = createCapture(VIDEO);
    console.log("camera enabled");
  }
  else if(reply.toLowerCase()==="ok closing the mirror."){
    if(video !== null){
    video.hide();
    }
  }

}

function setup() {
  noCanvas();
  
  speech = new p5.Speech();  
  console.log(speech.voices);
  speech.setPitch(1.9);
  speech.speak("Hi! I am Eureka the chatbot, type into chatbox for my help.");
  
  // speechRec = new p5.SpeechRec('en-US', gotSpeech);
  // let continuous = true;
  // let interim = false;
  // speechRec.start(continuous, interim);

  bot = new RiveScript();
  let button = select('#submit');
  textInput = select('#user_input');
  textOutput = select('#output');
  loadBot();
  button.mousePressed(()=>{
    chat();
  })
}

function draw(){
  speech.setVoice(random(speech.voices));
}

function keyReleased() {
  if(keyCode === 13){
    chat();
  }
}

function cancelSpeech(){
  speech.setVolume(0);
  console.log("speech set to 0");
  speech.cancel();
}

function enableSpeech(){
  speech.setVolume(1.0);
  console.log("speech enabled");
}

// function gotSpeech() {
//   if (speechRec.resultValue) {
//     input = speechRec.resultString;
//     user_input.value(input);
//   }
// }

async function getData(){
  var response = await fetch("http://worldclockapi.com/api/json/est/now");
  var responseJSON = await response.json();
  var dateTime = responseJSON.currentDateTime;
  var year = dateTime.slice(0,4);
  var month = dateTime.slice(5,7);
  var date = dateTime.slice(8,10);
  var day = responseJSON.dayOfTheWeek;
  var timezone = responseJSON.timeZoneName;
  var dayLightSavingTime = responseJSON.isDayLightSavingsTime;
  var response2 = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON2 = await response2.json();
  var clientIp = responseJSON2.client_ip;
}

async function astro(){
  var response = await fetch("http://api.open-notify.org/astros.json?");
  var responseJSON = await response.json();
  var numberOfAstrologers = responseJSON.number;
  var message = responseJSON.message;
  await bot.reply('local-user', 'set ' + numberOfAstrologers);
}

function copyToClipboard(text) {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

function light(){
  document.write("<style>body{background-color: white; color: black}</style>");
}