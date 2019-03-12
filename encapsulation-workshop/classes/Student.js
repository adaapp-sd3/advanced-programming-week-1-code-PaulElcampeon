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

    static extractYear(form) {
        
        if (form.length == 2) {
            return form[0];
        } else {
            return form[0] + form[1];
        }
    }
}

module.exports = Student