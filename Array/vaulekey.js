/** const student = new Object();
student.name = "budi";
student.age = 25;

console.log(student);
**/
/**
const student = Object.assign({name : "budi", age: 25});

console.log(student);
**/
class studentnew{
constructor(name,age){
    this.nama = name;
    this.age = age;
}
}

const newStudent = new studentnew("budo",30);
console.log(newStudent);
