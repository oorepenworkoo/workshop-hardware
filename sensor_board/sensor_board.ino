#include <UnoWiFiDevEd.h>
#include <Wire.h>
#include <dht.h>

#define CONNECTOR "mountz"
#define SERVER_ADDR "158.108.165.223"
#define TRIG1 5
#define ECHO1 6
#define TRIG2 8
#define ECHO2 9
#define NEAR 5
#define OUTSIDE 2
#define INSIDE 1
#define LIGHT A0
#define DHT11 7

int person = 0;
int light = 0;
int led = 0;
int temperature = 0;
int humidity = 0;
int door_degree = 90;
int StateOfAir = 0;

String str = "";
dht DHT;

void setup() {
  Ciao.begin();
  pinMode(TRIG1, OUTPUT);
  pinMode(ECHO1, INPUT);
  pinMode(TRIG2, OUTPUT);
  pinMode(ECHO2, INPUT);
  pinMode(LIGHT, INPUT);
  Serial.println("Done Setup");
}

void loop() {
  Serial.println("Start");
  temperSession();
  Serial.println("Temper");
  sonicSession();
  Serial.println("Sonic");
  lightSession();
  Serial.println("Light");
  sendData();
  Serial.println("Data Send");
}

float sonicSession() {
  float length1 = sonicSensor(INSIDE);
  float length2 = sonicSensor(OUTSIDE);
  if(length1 < NEAR && length1 >= 0) {
    door_degree = 180;
    person += 1;
    //PEOPLE_ENTER;
  }
  else if(length2 < NEAR && length2 >= 0) {
    door_degree = 0;
    person -= 1;
    //PEOPLE_OUT;
  }
  else door_degree = 90;
}

float sonicSensor(int sensor) {
  float cm = 0;
  if(sensor == 1) {
    digitalWrite(TRIG1, LOW);
    delay(2);
    digitalWrite(TRIG1, HIGH);
    delay(2);
    digitalWrite(TRIG1, LOW);
    int timing = pulseIn(ECHO1, HIGH);
    cm = timing * 0.01724;
    //Serial.println(cm);
    delay(100);
  }
  else {
    digitalWrite(TRIG2, LOW);
    delay(2);
    digitalWrite(TRIG2, HIGH);
    delay(2);
    digitalWrite(TRIG2, LOW);
    int timing = pulseIn(ECHO2, HIGH);
    cm = timing * 0.01724;
    Serial.println(cm);
    delay(100); 
  }
  return cm;
}

void lightSession() {
  int lightValue = analogRead(LIGHT);
  if(lightValue > 400)//dark
    led = 1;
  else
    led = 0;
}

void temperSession() {
  int checkDHT = DHT.read11(DHT11);//return 0 and -1 maybe? ithink
  temperature = DHT.temperature;//can sent to server
  humidity = DHT.humidity;
  Serial.print(temperature);  
  Serial.print("\t");// just a simple interface
  Serial.println(humidity);
  delay(100);
}

void sendData() {
  str = "/data/groupZeedUp/Humidity/set/" + String(humidity);
  Ciao.write(CONNECTOR, SERVER_ADDR, str);
  str = "/data/groupZeedUp/Person/set/" + String(person);
  Ciao.write(CONNECTOR, SERVER_ADDR, str);
  str = "/data/groupZeedUp/Temperature/set/" + String(temperature);
  Ciao.write(CONNECTOR, SERVER_ADDR, str);
  str = "/data/groupZeedUp/Light/set/" + String(light);
  Ciao.write(CONNECTOR, SERVER_ADDR, str);
  str = "/data/groupZeedUp/DegreeOfDoor/set/" + String(door_degree);
  Ciao.write(CONNECTOR, SERVER_ADDR, str);
  str = "/data/groupZeedUp/LED01/set/" + String(led);
  Ciao.write(CONNECTOR, SERVER_ADDR, str);
  
  delay(1000);  //for not send too much data
}

