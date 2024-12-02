//make sure file is working and connected with console.log
//console.log("hello Jen");

//get connection with fs module and inquirer
import fs from 'fs';
import inquirer from 'inquirer';


//ask questions to user
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the unique title of your project?',
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'Provide a descriptive overview of your project and why it is important:',
    },
    {
      type: 'input',
      name: 'installationInstructions',
      message: 'How do you install the application you created?',
    },
    {
      type: 'input',
      name: 'utilization',
      message: 'How do you use the application?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license for your project:',
      choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'How can others contribute to your project to make it better?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How can this project be tested?',
    },
    {
      type: 'input',
      name: 'githubName',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the email address you would like people to reach to you with?',
    },
  ];



  inquirer.prompt(questions).then((answers) => {
    // Read the template file
    const template = fs.readFileSync('./templates/README-template.md', 'utf-8');
  
    // Replace placeholders in the template with user input
    const readmeContent = template
      .replace(/{{title}}/g, answers.title)
      .replace(/{{description}}/g, answers.description)
      .replace(/{{installation}}/g, answers.installation)
      .replace(/{{usage}}/g, answers.usage)
      .replace(/{{license}}/g, answers.license)
      .replace(/{{contributing}}/g, answers.contributing)
      .replace(/{{tests}}/g, answers.tests)
      .replace(/{{github}}/g, answers.github)
      .replace(/{{email}}/g, answers.email);
  
    // Write the generated README.md
    fs.writeFileSync('README.md', readmeContent);
  
    console.log('Successfully created README.md!');
  });
  