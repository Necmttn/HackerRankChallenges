function processData(input) {
    //Enter your code here
  var data = input.split('\n');
  var n = parseFloat(data[0]);
  var strings = [];
  for(var i=1; i <= n; i++){
    strings.push(data[i]);
  }
  var q = parseFloat(data[n +1]);
  var queries = [];
  
  for(var i= n+2; i < n+q+2; i++){
    queries.push(data[i]);
  }
  var amk = [];
  function checkQueries(querie){
    var temp = 0;
    for(var i=0; i < strings.length; i++){
      if(querie == strings[i]){
        temp = temp + 1;
      }
    } 
    console.log(temp);
  }
  
  queries.map(checkQueries);
  
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
