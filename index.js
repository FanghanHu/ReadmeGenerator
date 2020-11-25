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
    // noinspection JSUnresolvedVariable
    let fileContent = `
# ${response.title}

${response.description}

## Table of contents
* [Installation instructions](#Installation-instructions)
* [Usages](#Usages)
* [Contribution Guideline](#Contribution-Guideline)
* [Testing Instructions](#Testing-Instructions)
* [Licenses](#Licenses)
* [Questions](#Questions)

## Installation instructions
${response.installation}

## Usages
${response.usage}

## Contribution Guideline
${response.contribution}

## Testing Instructions
${response.testInstruction}

## Licenses
[${response.license}](${licenses.get(response.license)})

## Questions
* How to contact me?
    * Via [Github](https://github.com/${response.username})
    * Via Email: ${response.email}
    `;

    fs.writeFile("./README.MD", fileContent, (err) => {if(err) console.error(err);});

}).catch(err => {
    if(err) {
        console.error(err);
    }
});