function main() {
  var n = parseInt(readLine());
  for (var i = 1; i < n ; i++){
    line = '';
    for(var j = 1; j < n; j++){
      if(n - i < j)
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

