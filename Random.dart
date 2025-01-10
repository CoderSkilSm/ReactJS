
import 'dart:math'; 

void main(){
  
  Random random = new Random(); 
  int randomNumber1 = random.nextInt(10); 
  print("The random number between 0 to 9 is: $randomNumber1"); 
  int randomNumber2 = random.nextInt(20); 
  print("The random number between 0 to 19 is:$randomNumber2"); 
  
  
  double randomDouble = random.nextDouble(); 
  print("The random double is: $randomDouble"); 
  
  bool randomBool = random.nextBool(); 
  print("The random bool is: $randomBool"); 
  
  
  
  
  
  int num1 = 10; 
  int num2 = 20; 
  
  num maxnum = max(num1,num2); 
  num minnum = min(num1,num2); 
  num pownum = pow(num1,num2); 
  num squareroot = sqrt(25); 
  
  
  print("The maximum number is:$maxnum"); 
  print("The minimum number is:$minnum"); 
  print("The pow of two numbers is:$pownum"); 
  print("The squreroot of 25 is:$squareroot"); 
  
}
