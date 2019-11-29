let $ = require('jquery');
let fs = require('fs');
let filename = 'trips';


function loadtrips() {

  //Check if file exists
  if (fs.existsSync(filename)) {
    let data = fs.readFileSync(filename, 'utf8').split('\n');
    console.log(data);
  } else {
    console.log("File Doesn\'t Exist. Creating new file.")
    fs.writeFile(filename, '', (err) => {
      if (err) {
        console.log(err)
      }
    })
  }
}

loadtrips()


function getVin() {
  return "JT2BG22K310******";
}

function getMake() {
  return;
}

function getModel() {
  return "Not available";
}

function getAge() {
  return;
}

function getGas() {
  return;
}

function getOdo() {
  return;
}

function getTripA() {
  return;
}

function getTripAMpg() {
  return;
}

function getTripATime() {
  return;
}

function getTripB() {
  return;
}

function getTripBMpg() {
  return;
}

function getTripBTime() {
  return;
}

function getTemp() {
  return;
}

function getThrottle() {
  return Math.floor(Math.random() * 100);
}

function getRpm() {
  return Math.floor(Math.random() * 7000);
}

function getSpeed() {
  return Math.floor(Math.random() * 140);
}

function getMpg() {
  return;
}
