function processData(input) {
    //Enter your code here
  let data = input.split('\n');
  let n = parseFloat(data[0]) + 1;
  var inputs = [];
  for(var i=1; i < n; i++){
    inputs.push(data[i].split(' ')); 
  }
  let numInputs = inputs.map(input => input.map(i =>parseFloat(i)));
  for(var i=0; i < numInputs.length; i++){
    let diffOne = numInputs[i][2] - numInputs[i][0];
    let diffTwo = numInputs[i][3] - numInputs[i][1];
    let nextA = numInputs[i][2] + diffOne;
    let nextB = numInputs[i][3] + diffTwo;
    console.log(nextA + ' ' + nextB);
  }
} 