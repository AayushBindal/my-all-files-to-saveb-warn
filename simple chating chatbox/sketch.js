let bot;
let text_input, text_output;
let replyGlobal;
let speech;
let rand;

async function loadBot() {
  await bot.loadFile('brain.rive.txt');
  bot.sortReplies();
  let num = floor(random(10)) + 1;
  console.log(num);
  await bot.reply('local-user', 'set ' + num);
}

async function chat() {
  let txt = text_input.value();
  let reply = await bot.reply('local-user', txt);
  text_output.html(reply);
  replyGlobal = reply;
  speech.speak(reply);
}

function setup() {
  noCanvas();
  bot = new RiveScript();
  let button = select('#submit');
  text_input = select('#user_input');
  text_output = select('#output');
  loadBot();
  speech = new p5.Speech();
  button.mousePressed(chat);
  speech.speak("Hi! I am Eureka the chatbot, type into chatbox for my help.");
}