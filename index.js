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
      type: 'input',
      message: "If you used sources. List them seperated by commas",
      name: 'reference',  
    }
  ]
  inquirer
  .prompt(questions)
  .then((response) => {
    console.log(response)
      var title = response.title;
      const re = /\s*(?:,|$)\s*/
      //description tags
      var descriptionResponse = `${response.descripQ1},${response.descripQ2},${response.descripQ3},${response.descripQ4}`
      const descripARR = descriptionResponse.split(re)
      console.log(descripARR)
      const reference = response.reference
      
      console.log(reference)
      
     const nameList = reference.split(re)
    
      console.log(nameList)
  })