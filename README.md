# Compara Online Test
This project is based on TypeScript for better manage of the code and manipulation of data inside the project, this improve the performance and reduce the posibility of errors in code, So if you want to run the project with JavaScript you have to compile the src folder.

## How to run the project
You have to install all dependencies with **npm install** then run one of the scripts from the **package.json**

### Scripts 
* **npm run dev** this command runs the index.ts usign ts-node package for dont compile and then run with JavaScript
* **npm run build** this command compile the project and return a dist folder with all project based on JavaScript
* **npm run run** this command runs the project precompiled on JavaScript with dist/index.js
* **npm run coverage**  this command runs the coverage report with Jest, and return a coverage folder in the project root
* **npm run test**  this command run the unit test created with Jest in the folder test
* **npm run after-30-days** 

## Evaluation rules
* [X] Design an Object Oriented solution
* [X] The solution must be scalable, we expect to be able to add new products on the future. \
    *if you want to create a new product, you must have to create a new **AvilableProductName** on the exported type on **Product.ts Model**, and create the **updatePrice** for this case*
* [X] Meaningful git commits, we expect to see your solution approach as commit messages \
    *if you want to look up about all commits please run in the console **git log***
* [X] We expect a Node.js (>6) codebase, otherwise you should provide a Dockerfile with all the required dependencies to run the required commands. \
	*If you want to run the project, only have to run **npm i** and then read the scripts on **package.json***
* [X] 100% code coverage, you should provide the report and the command to run the tests and get the coverage report. \
    *if you want to see the coverage report, you must have to run **npm run coverage** and the search the file coverage/lcov-report/index.html and open on the browser*

