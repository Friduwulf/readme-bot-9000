function renderLicenseBadge(license) {
  const badgeObject = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    GNU: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  };
  return badgeObject[license];
};

function renderLicenseLink(license) {
  const linksObject = {
    MIT: '[MIT](https://choosealicense.com/licenses/mit/)',
    Apache: '[APACHE](https://choosealicense.com/licenses/apache-2.0/)',
    GNU: '[GNUGLPv3](https://choosealicense.com/licenses/gpl-3.0/)',
    ISC: '[ISC](https://choosealicense.com/licenses/isc/)'
  };
  return linksObject[license];
};

function renderLicenseSection(license) {
  if(license) {
    return `This project is licensed under the ${this.renderLicenseLink(license)} license.`
  } else {
    return '';
  };
};

function generateMarkdown(data) {
  return `
# ${data.title}
${this.renderLicenseBadge(data.license)}

## Table of Contents
- [Project Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
- [License](#License)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.githubName}
${data.email}

## License
${this.renderLicenseSection(data.license)}
  `;
}

export default generateMarkdown;