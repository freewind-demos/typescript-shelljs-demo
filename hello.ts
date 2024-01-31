import shell from 'shelljs';

const result = shell.exec('ls package.json');
console.log({ result });