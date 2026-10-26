const student={
    name:"John",
    age:20,
    branch:"AIML"       
}
const newstudent={...student,
    address:
    {
        street1:"sector-15",
        city:"Noida",
        state:"UP",
        pincode:201301
    }
}
console.log("newstudent=",newstudent);
console.log("student=",student);