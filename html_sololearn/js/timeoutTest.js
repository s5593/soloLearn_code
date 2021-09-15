mymy = function(){
    alert("tototo")
  }
  console.log("before")
  let a = setInterval(mymy, 1000)
  console.log("after")
  
  setTimeout(function(){
    console.log("time")
    clearInterval(a)
  },5000)