function main() {
  var n = parseInt(readLine());
  arr = readLine().split(' ');
  arr = arr.map(Number);
  function add(pre, cur){
    return pre + cur;
  }
  sum = arr.reduce(add, 0);
  console.log(sum);
}