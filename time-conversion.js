function main() {
    var time = readLine();
    var timeValue = time.slice(-2);
    let timeData = time.slice(0,8).split(':');
    let hour = Math.floor(timeData[0]);
    if(timeValue == 'PM'){
     hour += 12;
    }
    console.log(hour + ':' + timeData[1] + ':' + timeData[2]);
}