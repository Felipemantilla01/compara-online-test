# Compara Online Test

This project is based on TypeScript for better manage of the code and manipulation of data inside the project, this improve the performance and reduce the posibility of errors in code, So if you want to run the project with JavaScript you have to compile the src folder.

## How to run the project

You have to install all dependencies with **npm install** then run one of the scripts from the **package.json**

### Scripts

- **npm run dev** this command runs the index.ts usign ts-node package for dont compile and then run with JavaScript
- **npm run build** this command compile the project and return a dist folder with all project based on JavaScript
- **npm run run** this command runs the project precompiled on JavaScript with dist/index.js
- **npm run coverage** this command runs the coverage report with Jest, and return a coverage folder in the project root
- **npm run test** this command run the unit test created with Jest in the folder test
- **npm run after-30-days** this command runs a script who generates a .txt output
- **npm start after-30-days** this command runs a script who generates a .txt output with the dist project

## Test with JEST

All test created for this project are based on JEST; this are the rules and examples of how it work each product, the testColumn indicate which day is been testing inside the .spec.ts files for each product.

### Low Coverage

The price decreases along with the sale date, when the sale date is less than 0 the price also decreases to 0 and remains so

| day | sellIn | price | comment                                      | TestCase |
| --- | ------ | ----- | -------------------------------------------- | -------- |
| 0   | 5      | 7     | It must be sold in 5 days and its price is 7 | No       |
| 1   | 4      | 6     | The price drops by 1 every day               | No       |
| 2   | 3      | 5     |                                              | Yes      |
| 3   | 2      | 4     |                                              | No       |
| 4   | 1      | 3     |                                              | No       |
| 5   | 0      | 2     |                                              | Yes      |
| 6   | -1     | 0     | When the date expires, the price is 0        | No       |
| 7   | -2     | 0     |                                              | No       |
| 8   | -3     | 0     |                                              | Yes      |

### Medium Coverage

The price decreases by 1, if the sale date is less than 0 the price decreases by 2, and finally if the price reaches 0 it remains at 0

| day | sellIn | price | comment                                             | TestCase |
| --- | ------ | ----- | --------------------------------------------------- | -------- |
| 0   | 10     | 20    | The price decreases by 1 per day                    | No       |
| 1   | 9      | 19    |                                                     | No       |
| .   | .      | .     | .                                                   | .        |
| .   | .      | .     | .                                                   | .        |
| .   | .      | .     | .                                                   | .        |
| 9   | 1      | 11    |                                                     | Yes      |
| 10  | 0      | 10    |                                                     | No       |
| 11  | -1     | 8     | If the date is less than 0 the price decreases by 2 | Yes      |
| .   | .      | .     | .                                                   | .        |
| .   | .      | .     | .                                                   | .        |
| .   | .      | .     | .                                                   | .        |
| 14  | -4     | 2     |                                                     | No       |
| 15  | -5     | 0     | Upon reaching zero the price remains at 0           | No       |
| 16  | -6     | 0     |                                                     | Yes      |

### Full Coverage

Its price increases as time decreases, when the time is negative its value increases by 2 times, and when it reaches 50 it does not grow any more.

| day | sellIn | price | comment                                        | TestCase |
| --- | ------ | ----- | ---------------------------------------------- | -------- |
| 0   | 2      | 0     | It must be sold in two days and its price is 0 | No       |
| 1   | 1      | 1     | time decreases and its price increases by 1    | Yes      |
| 2   | 0      | 2     |                                                | No       |
| 3   | -1     | 4     |                                                | No       |
| 4   | -2     | 6     | time is less than 0 now increases by 2         | Yes      |
| .   | .      | .     | .                                              | .        |
| .   | .      | .     | .                                              | .        |
| .   | .      | .     | .                                              | .        |
| 25  | -23    | 48    |                                                | No       |
| 26  | -24    | 50    |                                                | No       |
| 27  | -25    | 50    | the price is 50 and can not increase more      | Yes      |

### Mega Coverage

It is a legendary product so it should never be sold and the price never decreases, also its price is always 80

### Special Full Coverage

The price increases by 1 while the time decreases,
If the sale date is less than 10 the price increases by 2
If the sale date is less than 5 the price increases by 3
If the price reaches 50 it stays there and
when the time is less than 0 the price falls to 0.

| day | sellIn | price | comment                                              | TestCase |
| --- | ------ | ----- | ---------------------------------------------------- | -------- |
| 0   | 11     | 30    |                                                      | No       |
| 1   | 10     | 31    | The price decreases by 1 per day                     | Yes      |
| 2   | 9      | 33    |                                                      | No       |
| 3   | 8      | 35    | If the date is less than 10 the price decreases by 2 | Yes      |
| 4   | 7      | 37    |                                                      | No       |
| 5   | 6      | 39    |                                                      | No       |
| 6   | 5      | 41    |                                                      | No       |
| 7   | 4      | 44    |                                                      | No       |
| 8   | 3      | 47    | If the date is less than 5 the price decreases by 3  | Yes      |
| 9   | 2      | 50    |                                                      | No       |
| 10  | 1      | 50    |                                                      | No       |
| 11  | 0      | 50    | the price is 50 and can not increase more            | Yes      |
| 12  | -1     | 0     | When the date expires, the price is 0                | Yes      |

### Super Sale

The price decreases twice as fast as normal products

| day | sellIn | price | comment | TestCase |
| --- | ------ | ----- | ------- | -------- |
| 0   | 6      | 30    |         | No       |
| 1   | 5      | 28    |         | No       |
| 2   | 4      | 26    |         | No       |
| 3   | 3      | 24    |         | Yes      |
| 4   | 2      | 22    |         | No       |
| 5   | 1      | 20    |         | No       |
| 6   | 0      | 18    |         | No       |
| 7   | -1     | 14    |         | No       |
| 8   | -2     | 10    |         | Yes      |
| .   | .      | .     | .       | .        |
| .   | .      | .     | .       | .        |
| 11  | -5     | 0     |         | Yes      |

## Evaluation rules

- [x] Design an Object Oriented solution
- [x] The solution must be scalable, we expect to be able to add new products on the future. \
       _if you want to create a new product, you must have to create a new **AvilableProductName** on the exported type on **Product.ts Model**, and create the **updatePrice** for this case_
- [x] Meaningful git commits, we expect to see your solution approach as commit messages \
       \*if you want to look up about all commits please run in the console **git log\***
- [x] We expect a Node.js (>6) codebase, otherwise you should provide a Dockerfile with all the required dependencies to run the required commands. \
       \*If you want to run the project, only have to run **npm i** and then read the scripts on **package.json\***
- [x] 100% code coverage, you should provide the report and the command to run the tests and get the coverage report. \
       _if you want to see the coverage report, you must have to run **npm run coverage** and the search the file coverage/lcov-report/index.html and open on the browser_
