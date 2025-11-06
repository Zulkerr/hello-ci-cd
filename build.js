const fs = require('fs');
const pkg = require('./package.json');

const html = `
<!DOCTYPE html>
<html>
    <head>
      <meta charset = "utf-8">
      <title> ${pkg.name} </title>
    </head>
    <body>
       <h1> ${pkg.name} - deployed via CI/CD </h1>
       <p>Version:  ${pkg.version} </p>
    </body>
</html>`;

fs.mkdirSync('dist', {recursive: true});
fs.writeFileSync('dist/index.html', html);

console.log('Built dist/index.html');
