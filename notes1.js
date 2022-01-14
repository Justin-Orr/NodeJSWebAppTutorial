/* 1.0 Node Package Manager */
 
 // When starting a new project run npm init to generate the package.json. 
 // You will be asked a series of questions about the project. 
 // If you want to quickly generate the file run: npm init --yes

 //---------------------------------------------------------------------------------

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

//---------------------------------------------------------------------------------

/* 1.1.1 Dependency File sizes */

// When uploading your code to git you don't want to include the node_modules folder because it will have hundreds of megabytes worth of code.
// The package.json in the root folder is there to track the dependencies so they can be downloaded when needed after someone else recieves your code.

//---------------------------------------------------------------------------------

/* 1.1.2 Semantic Versioning */

// When looking at your dependencies you may see a caret symbol. The syntax for version numbers is Major version . Minor version . Patch Version
// The Minor version is for feature updates. Patch version is for bud fixes. Finally Major versios are for new features that could break the major features of the application.

// The caret character tells npm that you are interested in any version of that dependency as long as the Major version is still that number i.e. the minor and patch versions do not matter.

// If you see a tilde then the Major and Minor versions matter but the patch version do not matter.

//---------------------------------------------------------------------------------

/* 1.1.3 Listing the Installed Packes */

// You can run: 'npm list' which will show all of the dependencies and all of theirs
// To see the dependencies for just your application run: 'npm list --depth=0'

//---------------------------------------------------------------------------------

/* 1.1.4 Listing meta data for a package */

// You can find all of the meta data about a package by running: npm view module_name
// This lists the package.json file
// To see a specific property from this file in a clean way run: npm view module_name property (e.g. npm view mongoose dependencies)

//---------------------------------------------------------------------------------

/* 1.1.4 Installing a specific version of a module */

// Run: npm install module_name@version_number

//---------------------------------------------------------------------------------

/* 1.1.5 Updating a module */

// You can see your outdated packages by running: npm outdated
// This is determined based on the main registry webpage and finding its current version
// There will be 3 columns that show what you currently have, what you need, and what the latest version is
// To update run: 'npm update' HOWEVER this will only update minor and patch releases
// To update to the latest version then run: 'npm install -g npm-check-updates' and run npm-check-updates 

//---------------------------------------------------------------------------------

/* 1.1.6 Cleaning our javascript */

// We can use the js-hint tool to scan/analyze our code to check for errors or potential problems within
// Run: 'npm install jshint --save-dev'
// The --save-dev property is lets node know to add it to the devDependencies tag instead of dependencies to it wont be added to the production environment

//---------------------------------------------------------------------------------

/* 1.1.7 Uninstalling a module */

// run npm uninstall module_name

//---------------------------------------------------------------------------------

/* 1.1.8 Working with Global Packages */

// Installing packages globally allows us to use them wherever regardless of the folder location.
// To install global use the global tag in the install tag -g

//---------------------------------------------------------------------------------

