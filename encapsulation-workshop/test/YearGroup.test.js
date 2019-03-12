const chai = require('chai')
const expect = chai.expect;

const YearGroup = require('../classes/YearGroup.js');

describe('YearGroup', ()=>{

    let myYearGroup = new YearGroup();
    
    it('should create an object instantiated from the class', ()=>{
        expect(myYearGroup).to.be.an.instanceOf(YearGroup);
    })
})

describe('YearGroup', ()=>{

    let myYearGroup = new YearGroup(7,"Sally");
    
    it('Should create a year group with year 7 and headOfYear Sally', ()=>{
        expect(myYearGroup.year).equals(7);
        expect(myYearGroup.headOfYear).equals("Sally");
    })
})

describe('YearGroup', ()=>{

    let myYearGroup = new YearGroup(7,"Sally");
    
    it('Should return 7', ()=>{
        expect(myYearGroup.getYear()).equals(7);
    })
})

describe('YearGroup', ()=>{

    let myYearGroup = new YearGroup(7,"Sally");
    
    it('Should Sally', ()=>{
        expect(myYearGroup.getHeadOfYear()).equals("Sally");
    })
})