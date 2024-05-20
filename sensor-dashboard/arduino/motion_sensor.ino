// #include <ESP8266WiFi.h>
// #include <ESP8266HTTPClient.h>

// const char* ssid = "SSID";
// const char* password = "PASSWORD";
// const char* serverName = "http://your_server_address/api/sensor-data";

// int sensorPin = D1; // PIR motion sensor connected to pin D1
// int sensorState = LOW;

// void setup() {
//   Serial.begin(115200);
//   pinMode(sensorPin, INPUT);
//   WiFi.begin(ssid, password);
//   Serial.print("Connecting to ");
//   Serial.println(ssid);

//   while (WiFi.status() != WL_CONNECTED) {
//     delay(500);
//     Serial.print(".");
//   }

//   Serial.println("");
//   Serial.println("WiFi connected");
//   Serial.println("IP address: ");
//   Serial.println(WiFi.localIP());
// }

// void loop() {
//   sensorState = digitalRead(sensorPin);

//   if (sensorState == HIGH) {
//     Serial.println("Motion detected!");

//     if (WiFi.status() == WL_CONNECTED) {
//       HTTPClient http;
//       http.begin(serverName);
//       http.addHeader("Content-Type", "application/json");

//       String postData = "{\"motionDetected\": true}";

//       int httpResponseCode = http.POST(postData);

//       if (httpResponseCode > 0) {
//         String response = http.getString();
//         Serial.println(httpResponseCode);
//         Serial.println(response);
//       } else {
//         Serial.print("Error on sending POST: ");
//         Serial.println(httpResponseCode);
//       }

//       http.end();
//     }

//     delay(10000); // delay for 10 seconds to avoid multiple detections
//   }

//   delay(500); // check sensor state every 500 milliseconds
// }
