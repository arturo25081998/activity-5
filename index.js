const prompt = require("prompt-sync")();

const getAllNames = () => {
  let names = [];
  let name = prompt(
    "Please enter the names that you want, if you do want to continues just press enter:  "
  );

  while (name !== "") {
    names.push(name);
    name = prompt(
      "Please enter the names that you want, if you do want to continues just press enter:  "
    );
  }

  return names;
};

const duplicateValues = (namesArray) => {
  let evaluationNames = [];
  let result = false;
  namesArray.forEach((name) => {
    if (evaluationNames.includes(name)) {
      result = true;
    }
    evaluationNames.push(name);
  });

  return result;
};

let namesArray = getAllNames().sort((a, b) => b.length - a.length);

console.log(`Se ingresaron ${namesArray.length} nombres`);

console.log(
  `Se ingresaron nombres repetidos: ${
    duplicateValues(namesArray) ? "Si" : "No"
  } `
);

console.log(`El nombre mas largo es: ${namesArray[0]}`);
console.log(`El nombre mas corto es: ${namesArray[namesArray.length - 1]}`);
