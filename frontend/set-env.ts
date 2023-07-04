const fs = require('file-system');
// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.ts';
// Load node modules
const colors = require('colors');
// `environment.ts` file structure
console.log('env vars are : ');
console.log(process.env);
const envConfigFile = `export const environment = {
    production: true,
    apiUrl: "https://main--phenomenal-otter-c5537d.netlify.app/.netlify/functions/api/"
  };  
`;
console.log(
  colors.magenta(
    'The file `environment.ts` will be written with the following content: \n'
  )
);
console.log(colors.grey(envConfigFile));
fs.writeFile(targetPath, envConfigFile, function (err: any) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(
      colors.magenta(
        `Angular environment.ts file generated correctly at ${targetPath} \n`
      )
    );
  }
});

// "fileReplacements": [
//   {
//     "replace": "src/environments/environment.ts",
//     "with": "src/environments/environment.development.ts"
//   }
// ]
