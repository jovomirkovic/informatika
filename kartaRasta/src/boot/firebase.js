// src/boot/firebase.js
return;
import { boot } from "quasar/wrappers";
import { messaging, getToken, onMessage } from "src/firebase/firebaseConfig";
import { Capacitor } from "@capacitor/core";

if (Capacitor.isNative) {
  // WebView information might be available in native code
  console.log("Native WebView version might be accessible in native code.");
} else {
  console.log("Browser version:", navigator.userAgent);
}
export default boot(async ({ app }) => {
  // Request permission and handle notifications
  async function requestPermission() {
    console.log("Requesting permission...");
    try {
      if (!window.Notification) {
        // Fallback code if Notification API is not available
        console.error("Notification API is not supported in this environment.");
      } else {
        // Normal notification code
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification("Hello!", { body: "You have a new message." });
          }
        });
      }

      // const status = await Notification.requestPermission();
      // if (status === "granted") {
      //   console.log("Notification permission granted.");
      //   const token = await getToken(messaging, { vapidKey: "your-vapid-key" });
      //   console.log("Token:", token);
      // } else {
      //   console.error("Notification permission denied.");
      // }
    } catch (error) {
      console.error("Error requesting permission:", error);
    }
  }

  requestPermission();

  // Handle incoming messages
  onMessage(messaging, (payload) => {
    console.log("Message received:", payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.icon,
    };

    if (Notification.permission === "granted") {
      new Notification(notificationTitle, notificationOptions);
    }
  });
});
