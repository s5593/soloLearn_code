let arr = {a: 1, b:2, c:3}
let a = Object.assign({b:5, d: 2},arr)
for(var i in a){
  document.write(a[i]+i+"<br>")
}