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
}

module.exports = Student