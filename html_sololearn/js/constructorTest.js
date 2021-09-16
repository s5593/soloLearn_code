class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    
    get area() {
      return this.calcArea();
    }
  
    calcArea() {
      return this.height * this.width;
    }
  }
  class Exams{
      //your code goes here
      constructor(ex1, ex2, ex3){
          this.exam1 = ex1;
          this.exam2 = ex2;
          this.exam3 = ex3;
      }
  
      get average(){
          return this.calcAverage();
      }
      calcAverage(){
          return (this.exam1+this.exam2+this.exam3)/3
      }
  }
  const square = new Rectangle(5, 5);
  const sqsuare = new Exams(14,2,34);
  console.log(sqsuare.average)
  console.log(square.area); // 25

  class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(this.name + ' makes a noise.');
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(this.name + ' barks.');
      console.log(this.name + ' barks.');
      console.log(this.name + ' barks.');
      console.log(this.name + ' barks.');
      super.speak(); // Super
    }
  }
  
  let dog = new Dog('Rex');
  dog.speak();
  // Rex makes a noise.
  // Rex barks.