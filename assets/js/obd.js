let fs = require('fs');
let filename = 'trips';

// trip data
var tripastartmiles = 0;
var tripbstartmiles = 0;
var tripastarttime = 0;
var tripbstarttime = 0;

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

var tripraw = ["a: " + getOdo() + " " + Math.floor(Date.now() / 86400000) + " " + "0", "b: " + getOdo() + " " + Math.floor(Date.now() / 86400000) + " " + "0"];
loadtrips();
processTripData();

function loadtrips() {
    //Check if file exists
    if (fs.existsSync(filename)) {
        let data = fs.readFileSync(filename, 'utf8').split('\n');
        // console.log(data);
        tripraw = data;
    } else {
        console.log("File Doesn\'t Exist. Creating new file.")
        odo = getOdo();
        fs.writeFile(filename, "a: " + odo + " " + Math.floor(Date.now() / 86400000) + " " + "0" + "\n" + "b: " + odo + " " + Math.floor(Date.now() / 86400000) + " " + "0", (err) => {
            if (err) {
                console.log(err)
            }
        })
    }
}


function processTripData() {
    var trips = [(tripraw[0]).split(" "), (tripraw[1]).split(" ")];
    tripastartmiles = trips[0][1];
    tripastartmiles = trips[1][1];
    tripastarttime = trips[0][2];
    tripbstarttime = trips[1][2];
    return tripbstarttime;
}




function resetTripA() {
    odo = getOdo();
    fs.writeFile(filename, "a: " + odo + " " + Math.floor(Date.now() / 86400000) + " " + "0" + "\n" + "b: " + tripastbstartmiles + " " + tripbstartime + " " + "0")
    tripastartmiles = odo;
    tripastarttime = Math.floor(Date.now() / 86400000);

}

function resetTripB() {
    odo = getOdo()
    fs.writeFile(filename, "a: " + tripastastartmiles + " " + tripastartime + " " + "0" + "\n" + "b:" + odo + " " + Math.floor(Date.now() / 86400000) + " " + "0")
    tripbstarttime = odo;
    tripbstartmiles = Math.floor(Date.now() / 86400000);
}

loadtrips();


function getVin() {
    return "JT2BG22K310******";
}

function getMake() {
    maker = "UNKNOWN";
    var vinnumber = getVin()

    // console.log(matchmaker(man[0]));
    man.forEach(matchmaker)

    function matchmaker(value) {
        // console.log(value);
        if (value.includes(vinnumber.substring(0, 3)) || value.includes(vinnumber.substring(0, 2))) {
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
    return odo - tripastartmiles;
}

function getTripAMpg() {
    return 0;
}

function getTripATime() {
    return Math.floor(Date.now() / 86400000) - tripastarttime;
}

function getTripB() {
    return odo - tripbstartmiles;
}

function getTripBMpg() {
    return 0;
}

function getTripBTime() {
    return Math.floor(Date.now() / 86400000) - tripastarttime;
}

function getTemp() {
    return Math.floor(Math.random() * 245) - 40;
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

function getFuelType() {
    return "placeholder, % ethnol";
}

function getTorque() {
    return "placeholder";
}