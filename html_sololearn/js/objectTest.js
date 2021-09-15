objectTest = {
    name: "test",
    age: 31,
    favColor: "green",
    introduceMyself: function() {
      document.write("name : "+this.name+"<br>")
      document.write("age : "+this.age+"<br>")
      document.write("favColor : "+this.favColor+"<br>")
    }
  }
  objectInsert = {
    name: "",
    age: 0,
    favColor: "",
    gender: "",
    objectPrint:function(){},
    objectInsert: function(name, age, favColor, gender){
      this.name = name
      this.age = age
      this.favColor = favColor
      this.gender = gender
      this.objectPrint = print
    },
 
  }
  function print(){
      return "이름은 "+this.name+"이고 나이는"+this.age+"입니다."
  }

  document.write(objectTest.name+"<br/>")
  document.write(objectTest.name.length+"<br/>")
  document.write(objectTest['age']+"<br/>")
  objectTest.introduceMyself()
  let a = new objectInsert.objectInsert("kbs", 25, "black", "man")
  document.write(a.name)
  document.write(a.objectPrint())