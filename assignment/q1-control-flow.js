/*
    Task
    - Implement a switch statement to check against `env` variable.
    - If `env` is "DEV", no change to `databaseCredential`.
    - If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
    - If `env` is "PROD", modify `databaseCredential` to "produser:password"
    
*/

const checkEnv = (env) => {
  switch (env) {
    case 'STAGE':
      return 'stageuser:password';
      break;
    case 'PROD':
      return 'produser:password';
      break;
    default:
      return 'databaseCredential';
  }
};

const env = 'DEV'; // Toggle between these possible values "DEV" | "STAGE" | "PROD"
const databaseCredential = checkEnv(env);
// console.log(databaseCredential);

// Task: Add code here

console.log(
  `Database credential for environment ${env} is ${databaseCredential}`
);
