var vin = getVin();
var make = getMake();
var model = getModel();
var age = getAge();

// half min functions
var gas = getGas();
var odo = getOdo();
// trip a
var tripAdist = getTripA();
var tripAmpg = getTripAMpg();
var tripAtime= getTripATime();
//trip b
var tripBdist = getTripB();
var tripBmpg = getTripBMpg();
var tripBtime = getTripBTime();


// second functions
var time = String(new Date()).substring(16,24);
var temp =getTemp();
var mpg = getMpg();

// ms functions
var throttle = getThrottle();
var rpm = getRpm();
var speed = getSpeed();

function updateMs(){
   throttle = getThrottle();
   rpm = getRpm();
   speed = getSpeed();
   // speedgauge.set(speed);
   document.getElementById("speednumber").innerHTML = speed;
}
function updateSec(){
   time = String(new Date()).substring(16,24);
   temp =getTemp();
   mpg = getMpg();
  document.getElementById("time").innerHTML=time;
}
function updateMin(){
   gas = getGas();
   odo = getOdo();
  // trip a
   tripAdist = getTripA();
   tripAmpg = getTripAMpg();
   tripAtime= getTripATime();
  //trip b
   tripBdist = getTripB();
   tripBmpg = getTripBMpg();
   tripBtime = getTripBTime();
}

// INIT EVERYTHING
function setStarters(){
  vin = getVin();
  age = getAge();
  vin = 'JT2BG22K310******'
  age = 200 + vin.substring(9,10);

  updateMs();
  updateSec();
  updateMin();
}

setStarters();
setInterval(updateMin, 30000);
setInterval(updateSec, 1000);
setInterval(updateMs, 200);
