function main() {
  var d1_temp = readLine().split(' ');
  var d1 = parseInt(d1_temp[0]);
  var m1 = parseInt(d1_temp[1]);
  var y1 = parseInt(d1_temp[2]);
  var d2_temp = readLine().split(' ');
  var d2 = parseInt(d2_temp[0]);
  var m2 = parseInt(d2_temp[1]);
  var y2 = parseInt(d2_temp[2]);

  if(d1_temp[2] > d2_temp[2]){
    console.log(10000);
    return 10000;
  }else if(d1_temp[2] < d2_temp[2]){
    console.log(0);
    return 0;
  }else if(d1_temp[1] > d2_temp[1]){
    let chargeMonths = d1_temp[1]-d2_temp[1];
    let charge  = 500 * chargeMonths;
    console.log(charge);
    return charge;
  }else if(d1_temp[1] < d2_temp[1]){
    console.log(0);
    return 0;
  }else if(d1_temp[0] > d2_temp[0]){
    let chargeDays = d1_temp[0]-d2_temp[0];
    let charge1 = 15 * chargeDays;
    console.log(charge1);
    return charge1;
  }else{
    console.log(0);
    return 0;
  }
}