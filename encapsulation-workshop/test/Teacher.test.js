const chai = require('chai')
const expect = chai.expect;

const Teacher = require('../classes/Teacher.js');

describe('Teacher', ()=>{

    let newTeacher = new Teacher("Sally", "S.O", "Maths");
    
    it('should create a Teacher object with all relevant fields', ()=>{
        expect(newTeacher.yearsOfService).equals(1);
        expect(newTeacher.name).equals("Sally");
        expect(newTeacher.initials).equals("S.O");
        expect(newTeacher.subject).equals("Maths");

    })
})