// i also didn't get it much about this code.

function main() {
  var n = parseInt(readLine());
  for (var i = 0; i < n ; i++){
    line = '';
    for(var j = 0; j < n; j++){
      if(n - i - 2 < j)
      {
        line += "#";
      }
      else
      {
        line += " ";
      }
    }
    console.log(line);
  }
}

