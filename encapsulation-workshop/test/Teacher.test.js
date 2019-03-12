const chai = require('chai')
const expect = chai.expect;

const Teacher = require('../classes/Teacher.js');

describe('Teacher', ()=>{

    let newTeacher = new Teacher("Sally", "S.O", "Maths");
    
    it('should create a Teacher object with all relevant fields', ()=>{
        expect(newTeacher.yearsOfService).equals(0);
        expect(newTeacher.name).equals("Sally");
        expect(newTeacher.initials).equals("S.O");
        expect(newTeacher.subject).equals("Maths");
    })
})


describe('Teacher', ()=>{

    let newTeacher = new Teacher("Sally", "S.O", "Maths");
    
    it('should return Sally', ()=>{
        expect(newTeacher.getName()).equals("Sally");
    })
})

describe('Teacher', ()=>{

    let newTeacher = new Teacher("Sally", "S.O", "Maths");
    
    it('should return S.O', ()=>{
        expect(newTeacher.getInitials()).equals("S.O");
    })
})

describe('Teacher', ()=>{

    let newTeacher = new Teacher("Sally", "S.O", "Maths");
    
    it('should return Maths', ()=>{
        expect(newTeacher.getSubject()).equals("Maths");
    })
})

describe('Teacher', ()=>{

    let newTeacher = new Teacher("Sally", "S.O", "Maths");
    
    it('should return 0', ()=>{
        expect(newTeacher.getYearsOfService()).equals(0);
    })
})

describe('Teacher', ()=>{

    let newTeacher = new Teacher("Sally", "S.O", "Maths");

    newTeacher.setYearsOfService(5);
    
    it('should return 5', ()=>{
        expect(newTeacher.getYearsOfService()).equals(5);
    })
})