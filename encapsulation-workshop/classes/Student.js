class Student {
    constructor(name, form) {
        this.name = name;
        this.form = form;
    }

    getName() {
        return this.name;
    }

    getForm() {
        return this.form;
    }
    
    static extractForm(form) {
        return form[form.length-1];
    }
}

module.exports = Student