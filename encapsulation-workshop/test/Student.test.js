const chai = require('chai')
const expect = chai.expect;

const Student = require('../classes/Student.js');

describe('Student', ()=>{

    let newStudent = new Student("Dan", "7C");
    
    it('should create a Student object with name Dan and form 7C', ()=>{
        expect(newStudent.name).equals("Dan");
        expect(newStudent.form).equals("7C");
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
        expect(newStudent.getForm()).equals("7C");
    })
})