function main() {
    var time = readLine();
    var timeValue = time.slice(-2);
    let timeData = time.slice(0,8).split(':');
    if(timeValue == 'PM'){
     var hour = Math.floor(timeData[0]);
     hour += 12;
    }else if(hour === 12){
      hour = '00';
    }
    console.log(hour + ':' + timeData[1] + ':' + timeData[2]);
}
