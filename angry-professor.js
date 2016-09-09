function main() {
  var t = parseInt(readLine());
  let results = [];
  for(var a0 = 0; a0 < t; a0++){
    var n_temp = readLine().split(' ');
    var attendedStudent = parseInt(n_temp[0]);
    var minimumStudent = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    let studentsInClass = 0;
    let studentsLate = 0;
    a.map(function late(x){
      if (x <= 0 )
      {
        return studentsInClass++;
      }
      else if(x > 0)
      {
        return studentsLate++;
      }
    })
    if (studentsInClass >= minimumStudent){
      console.log('NO');
    }else if(studentsInClass < minimumStudent){
      console.log('YES');
    }
  }
}

