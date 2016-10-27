function processData(input) {
    //Enter your code here
  var lines = input.split('\n');
  var firstLine = lines[0].split(' ');
  var n = firstLine[0];
  var d = parseFloat(firstLine[1]);
  var arr = [...lines[1].split(' ')];
    // Read Data.
  
  var result = [];
  var amk = n-d;
  
  var pre = arr.slice(0,d);
  var aft = arr.slice(d,n);
  pre.reverse();
  aft.reverse();
  result = pre.concat(aft);
  result.reverse();
  console.log(result.join(' '));
} 

// this was fucking challenging tough.