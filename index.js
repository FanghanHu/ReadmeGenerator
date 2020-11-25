const fs = require('fs');
const inquirer = require('inquirer');

//list of possible licenses and their link
let licenses = new Map([
    ['GNU', 'https://www.gnu.org/'],
    ['MPL 2.0', 'https://www.mozilla.org/en-US/MPL/2.0/'],
    ['Apache License 2.0', 'http://www.apache.org/licenses/'],
    ['MIT License', 'https://www.mit.edu/~amini/LICENSE.md'],
    ['The Unlicense', 'https://unlicense.org'],
]);

inquirer.prompt([
    {
        name:'title',
        message:"Please enter a title."
    },
    {
        name: 'description',
        message: "Please enter a description."
    },
    {
        name:'installation',
        message: "Please enter the installation instruction."
    },
    {
        name:'usage',
        message: "Please enter the usage information."
    },
    {
        name:"contribution",
        message:"Please enter the contribution guideline."
    },
    {
        name:"testInstruction",
        message:"Please enter the test instruction."
    },
    {
        name:"license",
        type: 'list',
        message:"Please select a license.",
        choices: [...licenses.keys()]
    },
    {
        name:"username",
        message:"Please enter you Github username."
    },
    {
        name:"email",
        message:"Please enter your email."
    }
]).then(response => {
    console.log(response);
}).catch(err => {
    if(err) {
        console.error(err);
    }
});