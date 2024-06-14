const fs = require('fs');
const path = require('path');

const interactionLabels = ['START', 'END']

function getJsFiles(dir, classNames = [], isLwcDir = false) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getJsFiles(filePath, classNames, file === 'lwc' || isLwcDir);
      
    } else if (isLwcDir && path.extname(file) === '.js') {
      const content = fs.readFileSync(filePath, 'utf8');
      const match = content.match(/class (\w+) extends CustomInteractionLogger/);
      if (match) {
        classNames.push(match[1]);
      }
    }
  });

  return classNames;
}

const classNames = getJsFiles('./force-app/main/default');
// loop classNames and interactionLabels to produce an array containing the concatenation of each interaction label
const interactions = classNames.map(className => interactionLabels.map(interactionLabel => `${className.toUpperCase()}_${interactionLabel.toUpperCase()}`)).flat();
console.log(interactions)
console.log(classNames);