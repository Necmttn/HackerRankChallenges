var cols = arr.length;
var rows = arr[0].length;
var tempSum = -1000000;  //sake of stupidty. 

for (var i = 0; i < cols-2; i++ ){
    for (var j = 0; j < rows-2; j++){
        var item = arr[i][j];
        var tempSumHourGlass = arr[i][j] + arr[i][j+1] + arr[i][j+2]  + arr[i+1][j+1]  + arr[i+2][j] +  arr[i+2][j+1] + arr[i+2][j+2]
        if (tempSumHourGlass >= tempSum ){
            sum = tempSumHourGlass;
        }
    }
}

// console.log(sum);