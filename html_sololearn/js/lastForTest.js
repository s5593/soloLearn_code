let ob = {a: 1, b: 2};
for(let v in ob){
  document.write("123: "+v+"<br>")
}
let bba = [1,2,3,5,3,4,8,5,2,3]
for(let vv of bba){
  document.write(" | "+vv+" | ")
}
bba.forEach(function(item, index,array){
  document.write("item"+index+": "+item+"<br>")
  document.write(array+"<br>")
})