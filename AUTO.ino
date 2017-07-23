#define LED 2
int sensorPin = A0;
int sensorValue = 0;

void setup() {
  Serial.begin(9600);
  pinMode(A0,INPUT);
  pinMode(LED,OUTPUT);
}

void loop() {
   sensorValue = analogRead(sensorPin);
   Serial.println(sensorValue);
   delay(500);
   autoOPEN();

}
void autoOPEN(){
  if(sensorValue > 400)//dark have to open light
    digitalWrite(LED,HIGH);
  else
    digitalWrite(LED,LOW);
}




