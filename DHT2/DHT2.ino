#include <dht.h>//dht liberry



#define DHT11 3 //set DHT to pin 3

dht DHT;//set object



void setup() {
Serial.begin(9600);
}

void loop() {
  GetDHT(DHT11);//declare methord
}

void GetDHT(int pin)
{
  int checkDHT = DHT.read11(DHT11);//return 0 and -1 maybe? ithink
  float temperature;   float humidity;
  temperature = (float)DHT.temperature;//can sent to server
  humidity = (float)DHT.humidity;
  Serial.print(temperature);  Serial.print("/t");// just a simple interface
  Serial.print(humidity);  Serial.print("/n");
  delay(300);//delay just 500 is good or 1000
}



