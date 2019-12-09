function updateMs() {
    throttle = getThrottle();
    rpm = getRpm();
    rpmgauge.set(rpm / 1000);
    document.getElementById("rpmnumber").innerHTML = rpm;
    speed = getSpeed();
    speedgauge.set(speed);
    document.getElementById("speednumber").innerHTML = speed;
}

function updateSec() {
    time = String(new Date()).substring(16, 24);
    temp = getTemp();
    mpg = getMpg();
    document.getElementById("time").innerHTML = time;
}


function updateMin() {
    gas = getGas();
    odo = getOdo();
    // trip a
    tripAdist = getTripA();
    tripAmpg = getTripAMpg();
    tripAtime = getTripATime();
    //trip b
    tripBdist = getTripB();
    tripBmpg = getTripBMpg();
    tripBtime = getTripBTime();

    document.getElementById("disttripa").innerHTML = tripAdist;
    document.getElementById("disttripb").innerHTML = tripBdist;

    document.getElementById("mpgtripa").innerHTML = tripAmpg;
    document.getElementById("mpgtripb").innerHTML = tripBmpg;

    document.getElementById("daytripa").innerHTML = tripAtime;
    document.getElementById("daytripb").innerHTML = tripBtime;

    document.getElementById("mainodo").innerHTML = odo;


}

// INIT EVERYTHING
function setStarters() {
    vin = getVin();
    make = getMake();
    model = getModel();
    age = getAge();
    fueltype = getFuelType();
    torque = getTorque();
    document.getElementById("carmake").innerHTML = make;

    // car info
    document.getElementById("vinnum").innerHTML = vin;
    document.getElementById("mannum").innerHTML = make;
    document.getElementById("yearnum").innerHTML = age;
    document.getElementById("fueltypenum").innerHTML = fueltype;
    document.getElementById("torquenum").innerHTML = torque;

    updateMs();
    updateSec();
    updateMin();
}

setStarters();
setInterval(updateMin, 30000);
setInterval(updateSec, 1000);
setInterval(updateMs, 200);