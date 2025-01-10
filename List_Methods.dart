void main(){
  
  var arr = [1,2,3,4,5]; 
  print("The length of the array is:${arr.length}"); 
  print("The value of index 2 is${arr[3]}"); 
  print("The index of value 3 is${arr.indexOf(4)}"); 
  List<int> num1 = [11,12,13,14,15]; 
  print("The first element is:${num1.first}"); 
  print("The last element is:${num1.last}");
  List<int> num2 = []; 
  print("List num1 is empty:" + num1.isEmpty.toString());
  print("List num2 is empty:" + num2.isEmpty.toString()); 
  print("List num1 is not empty:" + num1.isNotEmpty.toString()); 
  print("List num2 is not empty:" + num2.isNotEmpty.toString()); 
  
}
