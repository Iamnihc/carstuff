var speedopts = {
    angle: -0.2, // The span of the gauge arc
    lineWidth: 0.2, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.6, // // Relative to gauge radius
        strokeWidth: 0.035, // The thickness
        color: '#FFF' // Fill color
    },
    renderTicks: {
        divisions: 13,
        divWidth: 1.1,
        divLength: 0.5,
        divColor: "#111111",
        subDivisions: 2,
        subLength: 0.5,
        subWidth: 0.3,
        subColor: "#333333"
    },
    limitMax: true, // If false, max value increases automatically if value > maxValue
    limitMin: true, // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF', // Colors
    colorStop: '#8FC0DA', // just experiment with them
    strokeColor: '#E0E0E0', // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true, // High resolution support
    staticLabels: {
        font: "10px sans-serif", // Specifies font
        labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140], // Print labels at these values
        color: "#FFF", // Optional: Label text color
        fractionDigits: 0 // Optional: Numerical precision. 0=round off.
    },

    staticZones: [{
            strokeStyle: "#0F0",
            min: 0,
            max: 30
        }, // Green
        {
            strokeStyle: "yellow",
            min: 30,
            max: 70
        }, // Green
        {
            strokeStyle: "orange",
            min: 70,
            max: 105
        }, // Yellow
        {
            strokeStyle: "#F00",
            min: 105,
            max: 140
        }, // Yellow
    ],
};

var speedtarget = document.getElementById('speedmeter'); // your canvas element
var speedgauge = new Gauge(speedtarget).setOptions(speedopts); // create sexy gauge!
speedgauge.maxValue = 140; // set max gauge value
speedgauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
speedgauge.animationSpeed = 32; // set animation speed (32 is default value)
speedgauge.set(65); // set actual value


var rpmopts = {
    angle: -0.2, // The span of the gauge arc
    lineWidth: 0.2, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.6, // // Relative to gauge radius
        strokeWidth: 0.035, // The thickness
        color: '#FFF' // Fill color
    },
    renderTicks: {
        divisions: 9,
        divWidth: 1.1,
        divLength: 0.5,
        divColor: "#111111",
        subDivisions: 4,
        subLength: 0.5,
        subWidth: 0.5,
        subColor: "#333333"
    },
    limitMax: true, // If false, max value increases automatically if value > maxValue
    limitMin: true, // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF', // Colors
    colorStop: '#8FC0DA', // just experiment with them
    strokeColor: '#E0E0E0', // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true, // High resolution support
    staticLabels: {
        font: "10px sans-serif", // Specifies font
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // Print labels at these values
        color: "#FFF", // Optional: Label text color
        fractionDigits: 0 // Optional: Numerical precision. 0=round off.
    },

    staticZones: [{
            strokeStyle: "#0F0",
            min: 0,
            max: 5.5
        }, // Green
        {
            strokeStyle: "orange",
            min: 5.5,
            max: 7.5
        }, // orange

        {
            strokeStyle: "#F00",
            min: 7.5,
            max: 9
        }, // red
    ],
};

var rpmtarget = document.getElementById('rpmmeter'); // your canvas element
var rpmgauge = new Gauge(rpmtarget).setOptions(rpmopts); // create sexy gauge!
rpmgauge.maxValue = 9; // set max gauge value
rpmgauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
rpmgauge.animationSpeed = 32; // set animation speed (32 is default value)
rpmgauge.set(1.5); // set actual value