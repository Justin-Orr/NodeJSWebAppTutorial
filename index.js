/* 1.0 Node Package Manager */
 
 // When starting a new project run npm init to generate the package.json. 
 // You will be asked a series of questions about the project. 
 // If you want to quickly generate the file run: npm init --yes

 /* 1.1 Adding a 3rd party package */
 
 // Go to npmjs.com then find your package then run: npm install package_name
 // After installing the package the package.json file will update with a 'dependencies' tag
 // Then a folder called node_modules will generate and that contains the source code for the package

 // To use the new package, use a var or const and set it = to a require('module_name'); for example var _ = require('underscore');
 // You can use a foler or file in the require function. For folders, use ./ notation to specify the path
 // The require function assumes it is a native/core module, if it isn't it will search for the file or folder name. If not then it will search the node_modules folder.

var _ = require('underscore'); // This module provides many useful functions like contains
var result = _.contains([1,2,3], 3);
console.log(result);

// Mongoose is a package that will allow us to store data in MongoDB so we will install it now to use later.
// If there are conflicting version dependencies then the package that is dependent on the conflicting version will store itself inside the dependent package.

/* 1.2 Dependency File sizes */

// When uploading your code to git you don't want to include the node_modules folder because it will have hundreds of megabytes worth of code.
// The package.json in the root folder is there to track the dependencies so they can be downloaded when needed after someone else recieves your code.
