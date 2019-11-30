
let fs = require('fs');
let filename = 'trips';

// trip data
var tripastartmiles;
var tripbstartmiles;
var tripastarttime;
var tripbstarttime;

// basic info
var vin = getVin();
var make = getMake();
var model = getModel();
var age = getAge();
var fueltype = getFuelType()

// half min functions
var gas = getGas();
var odo = getOdo();
// trip a
var tripAdist = getTripA();
var tripAmpg = getTripAMpg();
var tripAtime = getTripATime();
//trip b
var tripBdist = getTripB();
var tripBmpg = getTripBMpg();
var tripBtime = getTripBTime();


// second functions
var time = String(new Date()).substring(16, 24);
var temp = getTemp();
var mpg = getMpg();

// ms functions
var throttle = getThrottle();
var rpm = getRpm();
var speed = getSpeed();


function loadtrips() {
  //Check if file exists
  if (fs.existsSync(filename)) {
    let data = fs.readFileSync(filename, 'utf8').split('\n');
    console.log(data);
  } else {
    console.log("File Doesn\'t Exist. Creating new file.")
    fs.writeFile(filename, "a: "+ getOdo() +" "+ Math.floor(Date.now()/86400000) +" "+ "0" + "\n" + "b: "+ getOdo() +" "+ Math.floor(Date.now()/86400000) +" "+ "0", (err) => {
      if (err) {
        console.log(err)
      }
    })
  }
}
function resetTripA(){
  fs.writeFile(filename, "a: "+ getOdo() +" "+ Math.floor(Date.now()/86400000)+" "+ "0" + "\n" + "b: "+ tripastbstartmiles +" "+ tripbstartime +" "+ "0"  )
  tripastartmiles = 0;
  tripastarttime = 0;

}
function resetTripB(){
  fs.writeFile(filename, "a: "+ tripastastartmiles +" "+ tripastartime +" "+ "0" +"\n"+ "b:"+ getOdo() +" "+ Math.floor(Date.now()/86400000)+" "+"0" )
  tripbstarttime = 0;
  tripbstartmiles = 0;
}

loadtrips();


function getVin() {
  return "JT2BG22K310******";
}

function getMake() {
  maker = "UNKNOWN";
  var vinnumber = getVin()

  console.log(matchmaker(man[0]));
  man.forEach(matchmaker)
  function matchmaker(value){
    console.log(value);
    if (value.includes(vinnumber.substring(0,3)) || value.includes(vinnumber.substring(0,2))){
      maker = value[0];
    }
  }
  return maker
}

function getModel() {
  return "Not available";
}

function getAge() {
  return age = 200 + vin.substring(9, 10);
}

function getGas() {
  return Math.floor(Math.random() * 100);
}

function getOdo() {
  return Math.floor(Math.random() * 500000);
}

function getTripA() {
 return getOdo()-
}

function getTripAMpg() {
  return;
}

function getTripATime() {
  return Math.floor(Date.now()/86400000) - tripastartime;
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
  return Math.floor(Math.random() * 245)-40;
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
  return "placeholder";
}

function getFuelType(){
  return "placeholder, % ethnol";
}
function getTorque(){
  return "placeholder";
}
