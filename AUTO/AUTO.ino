#define AIRCON 2
int sensorPin = A0;
int sensorValue = 0;

void setup() {
  Serial.begin(9600);
  pinMode(A0,INPUT);
  pinMode(AIRCON,OUTPUT);
}

void loop() {
   sensorValue = analogRead(sensorPin);
   Serial.println(sensorValue);
   delay(500);
   autoOPEN();

}
void autoOPEN(){
  if(sensorValue > 400)//dark have to open light
    digitalWrite(AIRCON,HIGH);
  else
    digitalWrite(AIRCON,LOW);
}




