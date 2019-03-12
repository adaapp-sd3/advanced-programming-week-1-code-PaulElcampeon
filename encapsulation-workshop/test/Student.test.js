const chai = require('chai')
const expect = chai.expect;

const Student = require('../classes/Student.js');

describe('Student', ()=>{

    let newStudent = new Student("Dan", "7C");
    
    it('should create a Student object with name Dan and form 7C', ()=>{
        expect(newStudent.name).equals("Dan");
        expect(newStudent.form).equals("C");
    })
})

describe('Student', ()=>{

    let newStudent = new Student("Dan", "7C");
    
    it('should return Dan', ()=>{
        expect(newStudent.getName()).equals("Dan");
    })
})

describe('Student', ()=>{

    let newStudent = new Student("Dan", "7C");
    
    it('should return Dan', ()=>{
        expect(newStudent.getForm()).equals("C");
    })
})

describe('Student', ()=>{
    
    it('should return C', ()=>{
        expect(Student.extractForm("7C")).equals("C");
    })
})

describe('Student', ()=>{
    
    it('should return the year', ()=>{
        expect(Student.extractYear("7C")).equals("7");
        expect(Student.extractYear("11A")).equals("11");

    })
})

describe('Student', ()=>{

    let newStudent = new Student("Dan", "7C");
    
    it('should return the year', ()=>{
        console.log(newStudent.year)

        console.log(newStudent.form)

        expect(newStudent.year).equals("7");
        expect(newStudent.form).equals("C");

    })
})