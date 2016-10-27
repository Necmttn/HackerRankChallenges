var arr =   [ [ 1, 1, 1, 0, 0, 0 ],
            [ 0, 1, 0, 0, 0, 0 ],
            [ 1, 1, 1, 0, 0, 0 ],
            [ 0, 9, 2, -4, -4, 0 ],
            [ 0, 0, 0, -2, 0, 0 ],
            [ 0, 0, -1, -2, -4, 0 ] ];

var cols = arr.length;
var rows = arr[0].length;

for (var i = 0; i < cols-2; i++ ){
    for (var j = 0; j < rows-2; j++){
        var item = arr[i][j];
        // var hourglass =  [
        //                     arr[i][j] ,    arr[i][j+1]   ,  arr[i][j+2] ,
        //                   /*arr[i+1][j] */ arr[i+1][j+1] , /*arr[i+1][j+2]*/
        //                     arr[i+2][j] ,  arr[i+2][j+1] ,  arr[i+2][j+2]
        //                  ];


        var sumHourGlass = arr[i][j] + arr[i][j+1] + arr[i][j+2]  + arr[i+1][j+1]  + arr[i+2][j] +  arr[i+2][j+1] + arr[i+2][j+2]
        console.log(sumHourGlass);
    }
}