// Practic
//Q1
const keyValuePairs = function (object) {
    let y=[]
    for (const key in object) {
        let x=[]
       x.push(key)
       x.push(object[key])
       y.push(x)
    }
    return y
  };
  
  keyValuePairs({ name: "John", age: 24 }); // => [["name", "John"], ["age", 24]]
  keyValuePairs({ firstName: "John", lastName: "Doe" }); // => [["firstName", "John"], ["lastName", "Doe"]]
  keyValuePairs({
    name: "Mark",
    position: "Full-Stack Developer",
    salary: 600,
  }); // => [["name", "Mark"], ["position", "Full-Stack Developer"], ["salary", 600]]
//Q2
const absoluteNumbers = function (grades) {
   for (const key in grades) {
    if (grades[key]<0) {
        grades[key]=grades[key]*-1
    }
   }
   return grades
  };
  
  absoluteNumbers({ science: 50, art: 60 }); // => {science: 50, art: 60}
  absoluteNumbers({ science: -80, art: 75, english: 77 }); // => {science: 80, art: 75, english: 77}
//Q3
const passedOrFailed = function (studentGrades) {
   for (const key in studentGrades) {
    if (studentGrades[key].grade<studentGrades[key].total/2) {
       return "The student have failed"
        
    }
   }
   return "The student have passed"

  };
  
  const studentOne = {
    math: { grade: 70, total: 120 },
    english: { grade: 80, total: 100 },
    art: { grade: 90, total: 100 },
  };
  
  const studentTwo = {
    math: { grade: 59, total: 120 },
    english: { grade: 80, total: 100 },
    art: { grade: 90, total: 100 },
  };
  
  passedOrFailed(studentOne); // =>  "The student have passed"
  passedOrFailed(studentTwo); // =>  "The student have failed"
//Q4
const convertToArray = function (object) {
    let x=[]
    for (const key in object) {
        
         x=[object[key-2],object[key-1],object[key]]
    }
    return x
  };
  
  convertToArray({ 0: "one", 1: "two", 2: "three" }); // => ["one", "two", "three"]
  convertToArray({ 0: "two", 1: "three", 2: "one" }); // => ["two", "three", "one"]
  convertToArray({ 0: "three", 1: "two", 2: "one" }); // => ["three", "two", "one"]
//Q5
const poisonousCompounds = {
    daphnetoxin: true,
    mercury: true,
    cyanide: true,
  };
  
  const safeToConsume = function (object) {
    for (const key in object) {
        
        if (poisonousCompounds[key]===true) {
            return "Poisonous do not consume"
        }
    }
    return "Safe to consume"
  };
  
  safeToConsume({ h2o: "10.0g" }); // => "Safe to consume"
  safeToConsume({ pyridoxine: "0.4mg", choline: "9.8mg", vitaminC: "8.7mg" }); // => "Safe to consume"
  safeToConsume({
    genkwanin: "3.1mg",
    mezerein: "2.7mg",
    daphnetoxin: "7.3mg",
  }); // => "Poisonous do not consume"
  safeToConsume({ h2o: "5.2mg", glucose: "1.3mg", cyanide: "4.0mg" }); // => "Poisonous do not consume"
//Q6
const toString = function (object) {
    let x=""
   for (const key in object) {
   x=x+", "+object[key]
   }
   return x
  };
  
  toString({ name: "John", age: 24 }); // => "John, 24"
  toString({ firstName: "John", lastName: "Doe" }); // => "John, Doe"
  toString({ name: "Mark", position: "Full-Stack Developer", salary: 600 }); // => "Mark, Full-Stack Developer, 600"
//Q7
// Make sure to loop over the bills object
const billsForJanuary = {
    waterBill: 25,
    electricityBill: 50,
    hospitalBill: 1000,
  };
  
  const billsForFebruary = {
    waterBill: 30,
    electricityBill: 45,
    insurance: 300,
  };
  
  const totalBill = function (billsObject) {
    let sum=0
    for (const key in billsObject) {
        sum+=billsObject[key]
    }
    return sum
  };
  
  totalBill(billsForJanuary); // => 1075
  totalBill(billsForFebruary); // => 375
//Q8
const users = {
    userOne: { username: "Jane", password: "123456" },
    userTwo: { username: "admin", password: "abc123" },
  };
  
  const login = function (username, password) {
    for (const key in users) {
        
        if (users[key].username===username&&users[key].password===password) {
          return "Login Successful"
            
        }
    }
    return "Login Failed"
  };
  
  login("Jane", "123456"); // => "Login Successful"
  login("Jane", "5321"); // => "Login Failed"
  login("Mark", "123456"); // => "Login Failed"
  login("admin", "abc123"); // => "Login Successful"
  login("admin", "aaabc123"); // => "Login Failed"
//Q9
const uniqueDogs = {
    max: { breed: "Labrador Retriever", color: "blond" },
    rex: { breed: "German Shepherd", color: "black and brown" },
    lucy: { breed: "Bulldog", color: "white" },
    lucifer: { breed: "Chihuahua", color: "brown" },
  };
  
  const createDog = function (name, dogBreed, furColor) {
    for (const key in uniqueDogs) {
        
        if (key===name) {
       
           return "The dog isn't unique enough :("   
        }
    }
    uniqueDogs[name]={
        breed: dogBreed, color: furColor
    }
    return "Added the dog successfully"
    
  };
  
  createDog("luna", "Husky", "black and white"); // => "Added the dog successfully"
  createDog("rex", "Golden Retriever", "blond"); //uniqueDogs => "The dog isn't unique enough :("
//Q10
const messageOne = {
    username: "John",
    message: "Hello",
    date: "01/01/2020",
    someKey: "someValue",
  };
  
  const messageTwo = {
    username: 10,
    message: "Hello",
    date: "01/01/2020",
  };
  
  const validateMessage = function (message) {
    for (const key in message) {
        if ( key!=="username"&&key!=="message"&&key!=="date") {
            
            delete message[key]
         }
        if (typeof message[key]!=="string") {
           return "invalid message"
        }
    }
   
    return message
  };
  validateMessage(messageOne); // => {username: "John", message: "Hello", date:"01/01/2020"}
  validateMessage(messageTwo); // => invalid message


