//installing packages as local dependencies for local projects
//npm i <packageName>

//installing packages as global dependencies for local projects
//npm install -g <packageName>

//package.json - manifest file

const _ = require('lodash');
const items = [1, [2, [3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)