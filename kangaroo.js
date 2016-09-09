function main() {
  var x1_temp = readLine().split(' ');
  var x1 = parseInt(x1_temp[0]);
  var v1 = parseInt(x1_temp[1]);
  var x2 = parseInt(x1_temp[2]);
  var v2 = parseInt(x1_temp[3]);
  if(x1 < x2 && v1 < v2){
    console.log('NO');
  }else if(x1 < x2 && v1 > v2){
    while (x1 < x2){
      x1 += v1;
      x2 += v2;
      if(x1 === x2){
        return console.log('YES')
      }
    }
    console.log('NO')
  }else{
    return console.log('NO')
  }
}