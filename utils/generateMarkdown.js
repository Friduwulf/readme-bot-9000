function renderLicenseBadge(license) {
  let badge = '';
  if (license === "None") {
    return '';
  } else if (license == 'MIT') {
    badge = `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`
    return badge;
  } else if (license == 'Apache') {
    badge = `![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
    return badge;
  } else if (license == 'GPL') {
    badge = `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-red.svg)`
    return badge;
  } else if (license == 'BSD') {
    badge = `![License: BSD v3](https://img.shields.io/badge/License-BSD%203--Clause-green.svg)`
    return badge;
  }
};

function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === "None") {
    return '';
    } else if (license == 'MIT') {
      licenseLink = `https://mit-license.org/`;
      return licenseLink;
    } else if (license == 'Apache') {
      licenseLink = `https://www.apache.org/licenses/LICENSE-2.0.html`;
      return licenseLink;
    } else if (license == 'GPL') {
      licenseLink = `https://www.gnu.org/licenses/gpl-3.0.html`;
      return licenseLink;
    } else if (license == 'BSD') {
      licenseLink = `https://opensource.org/licenses/BSD-3-Clause`;
      return licenseLink;
  }
};

function renderLicenseSection(license) {
  const licenseSection = 
  `${renderLicenseBadge(license)}
  This project uses the ${license} license, for more information, go to: ${renderLicenseLink(license)}`
  if (license === "None") {
    return 'No license is in use.';
  } else {
    return licenseSection;
  }
};

function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

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
Contact me at: 
Github: https://github.com/${data.githubName}
Email: ${data.email}

## License
${renderLicenseSection(data.license)}
  `;
};

module.exports = generateMarkdown;