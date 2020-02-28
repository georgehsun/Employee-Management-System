const Manager = require("/Manager");
const Engineer = require("/Engineer");
const Intern = require("/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");​
const render = require("htmlRenderer");​​
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
​
const writeFileAsync = util.promisify(fs.writeFile);

const questions = [{
        type: "input",
        name: "myGithub",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "myProject",
        message: "What is the name of your Project?"
    },
    {
        type: "input",
        name: "myDescription",
        message: "Give a description of your Project"
    },

    {
        type: "input",
        name: "myInstall",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "myInstructions",
        message: "Provide instructions and examples for use"
    },
    {
        type: "input",
        name: "myCollabs",
        message: "List collaborators and third-party assets"
    },
    {
        type: "list",
        name: "myLicense",
        message: "What license did you use?",
        choices: ["MIT", "BSD", "GNU"]
    },
    {
        type: "input",
        name: "myTests",
        message: "What command should be run to run tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "myContribution",
        message: "What does the user need to know about contributing to the repo?"
    }

];



function promptUser() {
    return inquirer.prompt(questions);
};

function generateREADME(answer, image, banner) {
    return `# ${answer.myProject}
##    
${banner}
## Description 
    
${answer.myDescription}
    
## Table of Contents
    
    
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
    
    
## Installation
    
${answer.myInstall}
    
## Usage 
    
${answer.myInstructions}
    
## Credits
    
${answer.myCollabs}
    
## License
    
${answer.myLicense}
## Tests
${answer.myTests}
## Contributing
${answer.myContribution}
![My Avatar](${image})
`
}
// ![My Avatar] (${avatar_url})




async function getImage(username) {
    try {
        const queryUrl = "https://api.github.com/users/" + username;

        const response = await axios.get(queryUrl);
        const avatar_url = await response.data.avatar_url;

        // console.log(avatar_url);

        return avatar_url

    } catch (error) {
        console.error(error);
    }


};
async function getBadge(license) {
    try {
        if (license === "MIT") {
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        };
        if (license === "BSD") {
            return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
        };

        if (license === "GNU") {
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)"
        };

    } catch (error) {
        console.log(error)
    }
};

async function init() {
    console.log("Fill in the prompts to create the readme file:");

    try {
        const answers = await promptUser();

        const username = answers.myGithub;

        const image = await getImage(username);

        const license = answers.myLicense;

        const banner = await getBadge(license);

        const md = generateREADME(answers, image, banner);




        await writeFileAsync("goodREADME.md", md);

        console.log("Successfully wrote to README.md");

    } catch (err) {
        console.log(err);
    }
}

init();


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```