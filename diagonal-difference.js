// Dumb version. actually it's how i figure out it.
function main() {
  var n = parseInt(readLine());
  var a = [];
  for(a_i = 0; a_i < n; a_i++){
    a[a_i] = readLine().split(' ');
    a[a_i] = a[a_i].map(Number);
  }
  function DifferenceOfDiagonals(mainArray){
    function sum(pre, cur){
      return pre + cur;
    }

    let primaryDiagonals = [];
    for (var i=0; i < mainArray.length;i++){
      primaryDiagonals.push(mainArray[i][i]);
    }
    var sumOfprimaryDiagonals = primaryDiagonals.reduce(sum,0);
    console.log('sumOfprimaryDiagonals :' + sumOfprimaryDiagonals)

    let secondaryDiagonals = [];
    for (var i = 0; i < mainArray.length; i++ ){
      secondaryDiagonals.push(mainArray[i][mainArray.length - i - 1]);
    }
    var sumOfsecondaryDiagonals = secondaryDiagonals.reduce(sum,0);
    console.log('sumOfsecondaryDiagonals :' + sumOfsecondaryDiagonals)

    let result = sumOfprimaryDiagonals - sumOfsecondaryDiagonals;
    return Math.abs(result);
  }
  console.log( 'primaryDiagonal :' + DifferenceOfDiagonals(a));
}


//Clean version. without console.logs  i try to make it Functional programming focused. And still i like to keep my code readability. i leave long var names.

function main() {
  var n = parseInt(readLine());
  var a = [];
  for(a_i = 0; a_i < n; a_i++){
    a[a_i] = readLine().split(' ');
    a[a_i] = a[a_i].map(Number);
  }
  function DifferenceOfDiagonals(mainArray){
    function sum(pre, cur){
      return pre + cur;
    }
    let primaryDiagonals = [];
    for (var i=0; i < mainArray.length;i++){
      primaryDiagonals.push(mainArray[i][i]);
    }
    var sumOfprimaryDiagonals = primaryDiagonals.reduce(sum,0);
    let secondaryDiagonals = [];
    for (var i = 0; i < mainArray.length; i++ ){
      secondaryDiagonals.push(mainArray[i][mainArray.length - i - 1]);
    }
    var sumOfsecondaryDiagonals = secondaryDiagonals.reduce(sum,0);
    let result = sumOfprimaryDiagonals - sumOfsecondaryDiagonals;
    return Math.abs(result);
  }
  console.log(DifferenceOfDiagonals(a));
}