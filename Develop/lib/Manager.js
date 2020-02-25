// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;

        if (!name) {
            throw new Error("Please enter a name");
        }
        if (!email) {
            throw new Error("Please enter the email");
        }
        if (!officeNumber) {
            throw new Error("Please enter an office number");
        }
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}
module.exports = Manager;