const bleno = require("bleno");

const fakeDevices = [
    "Free Wi-Fi 😈",
    "NSA Listening Van 🚐",
    "Virus.exe",
    "Flipper Zero 2.0",
    "HackThePlanet",
    "AirPods Max Pro+",
    "FBI Surveillance 🚔",
    "Free Netflix 🔥"
];

let index = 0;

function startSpam() {
    bleno.on("stateChange", (state) => {
        if (state === "poweredOn") {
            spam();
        } else {
            bleno.stopAdvertising();
        }
    });

    function spam() {
        setInterval(() => {
            let deviceName = fakeDevices[index % fakeDevices.length];
            console.log(`Advertising: ${deviceName}`);
            bleno.startAdvertising(deviceName, ["1812"]);
            index++;
        }, 5000);
    }
}

startSpam();
