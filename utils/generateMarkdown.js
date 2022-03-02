// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licBadge = "";
let licDescription = "";

function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache 2.0':
      licBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      licDescription = "Apache 2.0 license"
      break;

    case 'MIT':
      licBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      licDescription = "MIT license";
      break;

    case 'Mozilla Public License v2.0':
      licBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      licDescription = "Mozilla Public License v2.0 license";
      break;

    case 'Boost Software License 1.0':
      licBadge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      licDescription = "Boost Software License 1.0 license";
      break; 

    case 'ISC':
      licBadge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      licDescription = "ISC license";
      break;

    case 'GNU General Public License v3.0':
      licBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      licDescription = "GNU General Public License v3.0 license";
      break;


    default: 
      licBadge = "";
      licDescription = "No license.";
    }
    return licBadge, licDescription;
    

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#Installation)
  [Usage](#Usage)
  [License](#License)
  [Contribution](#Contribution)
  [Tests](#Tests)
  [Questions](#Questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license} 


  ${renderLicenseBadge(data.license)}


  ${licBadge} 



  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}
`;
}

module.exports = { generateMarkdown }
