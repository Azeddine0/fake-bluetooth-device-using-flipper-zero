const bleno = require("bleno");

const CHARACTERISTIC_UUID = "2a4d"; // HID Report Characteristic UUID
let BlenoPrimaryService = bleno.PrimaryService;
let BlenoCharacteristic = bleno.Characteristic;

class FakeKeyboardCharacteristic extends BlenoCharacteristic {
    constructor() {
        super({
            uuid: CHARACTERISTIC_UUID,
            properties: ["notify"],
            value: null,
            descriptors: [
                new bleno.Descriptor({
                    uuid: "2901",
                    value: "Fake Bluetooth Keyboard",
                }),
            ],
        });
    }

    onSubscribe(maxValueSize, callback) {
        console.log("Flipper connected as keyboard!");
        this.sendKeystroke("Hello from Flipper!");
    }

    sendKeystroke(text) {
        for (let char of text) {
            let buffer = Buffer.from(char, "utf-8");
            this.notify(buffer);
        }
    }
}

bleno.on("stateChange", (state) => {
    if (state === "poweredOn") {
        bleno.startAdvertising("Fake Keyboard", ["1812"]);
    } else {
        bleno.stopAdvertising();
    }
});

bleno.on("advertisingStart", (error) => {
    if (!error) {
        bleno.setServices([
            new BlenoPrimaryService({
                uuid: "1812", // HID Service
                characteristics: [new FakeKeyboardCharacteristic()],
            }),
        ]);
    }
});
