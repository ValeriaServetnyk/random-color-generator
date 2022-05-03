import chalk from 'chalk';
import randomColor from 'randomcolor';
import readline from 'readline';

function squareFn(color) {
  const squareArray = [];
  let result;
  for (let i = 0; i < 9; i++) {
    result = '';
    if (i === 3 || i === 5) {
      for (let j = 0; j < 5; j++) {
        result += '#';
      }
      for (let j = 0; j < 21; j++) {
        result += ' ';
      }
      for (let j = 0; j < 5; j++) {
        result += '#';
      }
    } else if (i === 4) {
      for (let j = 0; j < 5; j++) {
        result += '#';
      }
      for (let j = 0; j < 7; j++) {
        result += ' ';
      }
      result += color;
      for (let j = 0; j < 7; j++) {
        result += ' ';
      }
      for (let j = 0; j < 5; j++) {
        result += '#';
      }
    } else {
      for (let j = 0; j < 31; j++) {
        result += '#';
      }
    }

    squareArray.push(result);
  }
  return squareArray.join('\n');
}

let colorStr;
colorStr = process.argv[2];
if (!colorStr) {
  colorStr = 'random';
}

let colorLumi;
colorLumi = process.argv[3];
if (!colorLumi) {
  colorLumi = 'random';
}

const color = randomColor({
  luminosity: colorLumi,
  hue: colorStr,
});

console.log(chalk.hex(`${color}`).bold(`${squareFn(color)}`));
