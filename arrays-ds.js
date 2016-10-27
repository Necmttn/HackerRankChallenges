function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var result = [];
    for( var i = n; i > 0; i--){
      result.push(arr[i-1]);
    }
    console.log(result.join(' '));
}
