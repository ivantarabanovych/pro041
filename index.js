const _ = require('lodash');

const numbers = [10, 45, 63, 
                  9, 2, 75];

const maxSum = _.sum(_.slice(_.sortBy(numbers), -2)); 

console.log(`Сума двох найбільших чисел: ${maxSum}`);
