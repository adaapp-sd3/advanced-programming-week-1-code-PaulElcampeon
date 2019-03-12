const chai = require('chai')
const expect = chai.expect;

const YearGroup = require('../classes/YearGroup.js');

describe('YearGroup', ()=>{

    let myYearGroup = new YearGroup();
    
    it('should create an object instantiated from the class', ()=>{
        expect(myYearGroup).to.be.an.instanceOf(YearGroup);
    })
})