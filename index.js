const inquirer = require('inquirer');
const fs = require('fs');

const questions  = [
    {
      type: 'input',
      message: 'What is the title of your poject?',
      name: 'title',
    },
    {
      //description question 1
      type: 'input',
      message: 'WWhat was your Github Username?',
      name: 'gitUsername',
    },
    {
      //description question 1
      type: 'input',
      message: 'WWhat was your motivation?',
      name: 'descripQ1',
    },
    {
      //description question 2
      type: 'input',
      message: 'Why did you build this project?',
      name: 'descripQ2',
    },
    {
      //description question 3
      type: 'input',
      message: 'What problem does it solve?',
      name: 'descripQ3',
    },
    {
      //description question 4
      type: 'input',
      message: 'What did you learn?',
      name: 'descripQ4',
    },
    {
      //Installation question
      type: 'input',
      message: "What are the steps necessary to install or acces your program",
      name: 'installation',  
    },
    {
      //Usage question
      type: 'input',
      message: "Give instructions on how to operate your application and provide a screenshot of your application",
      name: 'Usage',  
    },
    {
      //third party Apis
      type: 'input',
      message: "If you used and third party sources list them seperated by commas",
      name: 'reference',  
    },
    {
      //third party Apis
      type: 'input',
      message: "List your fellow collaborators followed by their Github profil link (Seperate them with commas after yo provide the link)",
      name: 'collaborators',  
    },
    {
      //third party Apis
      type: 'input',
      message: "Provide a link to a badge (optional)",
      name: 'collaborators',  
    },
    {
      //third party Apis
      type: 'input',
      message: "Provide you Email address and instructions to contact you",
      name: 'email',  
    },
    {
      type: 'list',
      message: 'What license are you using?',
      choices: [
        "APM", "AUR license", "Bower" ,"Cocoapods" ,"Conda - License", "CPAN", "CRAN/METACRAN" , "Crates.io", "CTAN",  "DUB", "Eclipse Marketplace", "GitHub",  "GitLab"
        ],
      name: 'license',
    },
  ]
  inquirer
  .prompt(questions)
  .then((response) => {
    console.log(response)
      var title = response.title;
      const re = /\s*(?:,|$)\s*/
      const img = /\s*(?:https|$)\s*/
      //description tags
      var descriptionResponse = `${response.descripQ1},${response.descripQ2},${response.descripQ3},${response.descripQ4}`
      const descripARR = descriptionResponse.split(re)
      //installation tags
      var installation = response.installation
      //usage tags
      var usage = response.Usage
      const usageARR = usage.split(img)
      //collaborators
      var collaborators = response.collaborators
      const collaboratorsARR = collaborators.split(re)
      //badges
      var gitUsername = response.gitUsername
      var license = response.license
      var badgeURL = `https://img.shields.io/badge/License-${license}%202.0-blue.svg`
     
      //email
      var email = response.email
      //references
      const reference = response.reference
      const referenceARR = reference.split(re)
      var fileString = `# ${title} \n ![badge](${badgeURL}) \n ## Description \n * ${descripARR[0]} \n * ${descripARR[1]} \n * ${descripARR[2]} \n * ${descripARR[3]} \n ## Table of Contents \n 1. [Description](#Descriptions)\n 2. [Installation](#Installation)\n 3. [Usage](#Usage)\n 4. [License](#License)\n 5. [Questions](#Questions) \n ## Installation \n ${installation} \n ## Usage \n ${usageARR[0]} \n ![Screenshot](https${usageARR[1]}) \n My fellow collaborators are ${collaboratorsARR} And my Third Party sources were ${referenceARR} \n ## License \n Copyright (c) ${gitUsername}. All rights reserved. \n Licensed under the ${license} license \n ## Questions \n ### Conatact me Via \n -[${gitUsername}](https://github.com/${gitUsername}/) \n -${email}.


      
      `
    
      //must have https to finish link
      fs.writeFile('README.md', fileString, (err) => {
      
        // In case of a error throw err.
        if (err) throw err;
    })
  })

  function writeFile(title, installation, usageARR, descripARR, referenceARR, collaboratorsARR) {
    console.log(title)
    console.log(installation)

    console.log("https" + usageARR[1])
    console.log(descripARR)
    console.log(collaboratorsARR)
        
    console.log(referenceARR)
  }