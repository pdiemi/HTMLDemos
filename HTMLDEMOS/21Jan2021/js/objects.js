// {}
//object literal
var students={id:101, name:"admin"}
console.log(students.id + "\t" +students.name)

//object with new keyword
var employees=new Object()
employees.id=1001
employees.name="admin"
console.log(employees)

//object with constructor
function employee(id, name){
    this.id=id
    this.name=name
}
var emp=new employee(1002,"admin")
console.log(emp)