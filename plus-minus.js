function main() {
  var n = parseInt(readLine());
  arr = readLine().split(' ');
  arr = arr.map(Number);
  let positives = 0;
  let negetives = 0;
  let zeros = 0;
  function whatFraction(a){
    if(a > 0){
      positives++;
    }
    else if(a < 0){
      negetives++;
    }else if(a == 0){
      zeros++;
    }
  }
  arr.map(whatFraction);
  positiveDecimal = positives / n;
  negetivesDecimal = negetives / n;
  zerosDecimal = zeros /n;
  console.log(positiveDecimal.toFixed(6));
  console.log(negetivesDecimal.toFixed(6));
  console.log(zerosDecimal.toFixed(6));
}
