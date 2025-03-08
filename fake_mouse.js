const bleno = require("bleno");

const MOUSE_UUID = "2a4d"; // HID Report Characteristic UUID
let BlenoPrimaryService = bleno.PrimaryService;
let BlenoCharacteristic = bleno.Characteristic;

class FakeMouseCharacteristic extends BlenoCharacteristic {
    constructor() {
        super({
            uuid: MOUSE_UUID,
            properties: ["notify"],
            value: null,
            descriptors: [
                new bleno.Descriptor({
                    uuid: "2901",
                    value: "Fake Bluetooth Mouse",
                }),
            ],
        });

        this.interval = null;
    }

    onSubscribe(maxValueSize, callback) {
        console.log("Flipper connected as a mouse!");
        this.startMoving();
    }

    onUnsubscribe() {
        console.log("Flipper disconnected!");
        clearInterval(this.interval);
    }

    startMoving() {
        this.interval = setInterval(() => {
            let movement = Buffer.from([0x00, Math.random() * 10, Math.random() * 10, 0x00]);
            this.notify(movement);
            console.log("Moving mouse...");
        }, 1000);
    }
}

bleno.on("stateChange", (state) => {
    if (state === "poweredOn") {
        bleno.startAdvertising("Fake Mouse", ["1812"]);
    } else {
        bleno.stopAdvertising();
    }
});

bleno.on("advertisingStart", (error) => {
    if (!error) {
        bleno.setServices([
            new BlenoPrimaryService({
                uuid: "1812", // HID Service
                characteristics: [new FakeMouseCharacteristic()],
            }),
        ]);
    }
});
