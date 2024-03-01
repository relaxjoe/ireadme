// Function to return a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (!license || license === 'None') return '';
    return `![License](https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg)`;
  }
  
  
  // Function to return the license link
  function renderLicenseLink(license) {
    if (!license || license === 'None') return '';
    switch (license) {
      case 'MIT':
        return 'https://opensource.org/licenses/MIT';
      case 'Apache 2.0':
        return 'https://opensource.org/licenses/Apache-2.0';
      case 'GPLv3':
        return 'https://www.gnu.org/licenses/gpl-3.0';
      case 'BSD 3-Clause':
        return 'https://opensource.org/licenses/BSD-3-Clause';
      default:
        return '';
    }
  }
  
  
  // Function to return the license section of README
  function renderLicenseSection(license) {
    if (!license || license === 'None') return '';
    return `## License
  
  This project is licensed under the ${license} License. For more information, see the link below:
  
  ${renderLicenseLink(license)}
  `;
  }
  
  
  // Function to generate markdown for README
  function generateMarkdown(data) {
    console.log("test123");
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  ${data.license !== 'None' ? '- [License](#license)' : ''}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  For additional questions, you can reach out to me at ${data.email}.
  
  GitHub Profile: [${data.github}](https://github.com/${data.github})
  `;
  }
  
  
  module.exports = generateMarkdown;
  