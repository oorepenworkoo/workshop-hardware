#include <Servo.h>

#define TRIG1 5
#define ECHO1 6
#define TRIG2 8
#define ECHO2 9
#define NEAR 10
#define SERVO 3
#define OUTSIDE 2
#define INSIDE 1

Servo servo;
int human;

void setup() {
  Serial.begin(9600);
  pinMode(TRIG1, OUTPUT);
  pinMode(ECHO1, INPUT);
  pinMode(TRIG2, OUTPUT);
  pinMode(ECHO2, INPUT);
  servo.attach(SERVO);
  servo.write(90);
  human = 0;
}

void loop() {
  sonicSession();
}

float sonicSession() {
  float length = sonicSensor(INSIDE);
  if(length < NEAR && length >= 0) {
    moveDoor(180);
    human += 1;
    //PEOPLE_ENTER;
  }
  length = sonicSensor(OUTSIDE);
  if(length < NEAR && length >= 0) {
    moveDoor(0);
    human -= 1;
    //PEOPLE_OUT;
  }
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
    Serial.println(cm);
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

void moveDoor(int degree) {
  servo.write(degree);
  delay(3000);
  servo.write(90);
}






