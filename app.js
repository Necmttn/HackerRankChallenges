function printNumbers() {
  var numbers = [0, 1, 2, 3, 4, 6];
  for(var i = 0; i < numbers.length; i++){
    setInterval(function(){
      if (i == numbers.length) clearInterval(this);
      else console.log(numbers[i]);
    }, 1000);
  }
}
printNumbers();