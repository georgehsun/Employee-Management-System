// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;


        if (!name) {
            throw new Error("Please enter a name");

        }
        if (!email) {
            throw new Error("Please enter an email");

        }

        if (!github) {
            throw new Error("Please enter a Github Username");

        }


    }
    getRole() {
        return "Engineer"
    }
    getGithub() {
        return this.github
    }
}

module.exports = Engineer