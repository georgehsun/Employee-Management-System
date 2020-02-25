// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;

        if (!name) {
            throw new Error("Please enter name");

        }
        if (!email) {
            throw new Error("Please enter an email");
        }
        if (!school) {
            ("Please enter a school name that you are attending");

        }
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school
    }
}
module.exports = Intern;