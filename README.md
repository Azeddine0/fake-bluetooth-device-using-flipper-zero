# fake-bluetooth-device-using-flipper-zero

Turn your **Flipper Zero** (or any Bluetooth-capable device) into:
✅ A **Fake Bluetooth Keyboard** (sends keystrokes)  
✅ A **Fake Bluetooth Mouse** (random cursor movements)  
✅ A **Bluetooth Spammer** (advertises multiple fake devices)  

---

## 🚀 Features
- Emulate a **keyboard** that auto-types messages.
- Emulate a **mouse** that moves randomly.
- Spam Bluetooth with **fake device names** (prank nearby users).

---

## 📌 Requirements
- Install **Node.js** (v16+) – [Download Here](https://nodejs.org/)
- Install required dependencies:
  ```sh
  npm install bleno node-hid
  ```
- 💡 **Note:** On Windows, you might need to enable Bluetooth permissions.

---

## 🔧 Installation & Usage

### 1️⃣ Start a Fake Bluetooth Keyboard
This script makes the device appear as a Bluetooth keyboard that sends keystrokes.
```sh
node fake-keyboard.js
```
**Flipper Zero Steps:**  
- Go to **Bluetooth > Connect**  
- Find **"Fake Keyboard"**  
- Connect and watch it type automatically!  

---

### 2️⃣ Start a Fake Bluetooth Mouse
This script makes the device appear as a **mouse**, randomly moving the cursor.
```sh
node fake-mouse.js
```
**Flipper Zero Steps:**  
- Go to **Bluetooth > Connect**  
- Find **"Fake Mouse"**  
- Connect and watch the cursor move randomly!  

---

### 3️⃣ Bluetooth Spam (Fake Device Advertisements)
This script **spams multiple fake Bluetooth devices** in the area.
```sh
node bluetooth-spam.js
```
Nearby Bluetooth devices will see fake names like:
- **Free Wi-Fi 😈**
- **NSA Listening Van 🚐**
- **HackThePlanet**
- **AirPods Max Pro+**

---

## ⚡ Run Everything Together
Want to **run all scripts** at the same time? Use this command:
```sh
node fake-keyboard.js & node fake-mouse.js & node bluetooth-spam.js
```
Now your Flipper acts like a **keyboard, mouse, and Bluetooth spammer at the same time!**  

---

## 🔹 Next Steps & Customization
- Add **custom keypress sequences** for pranks.
- Make the **mouse follow patterns** instead of random movement.
- Create **fake Bluetooth speakers, controllers, or headphones**.

---

### ⚠️ Disclaimer
🚨 **This project is for educational and ethical purposes only.**  
🚨 Do **not** use it to disrupt public networks or prank people without consent.  

---

### 📌 License
📝 MIT License – Free to use and modify.  
