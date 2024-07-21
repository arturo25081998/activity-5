const prompt = require("prompt-sync")();
const getAllNames = () => {
  let names = [];
  let name = prompt(
    "Please enter a name, if you do want to continues just press enter: "
  );

  while (name !== "") {
    names.push(name);
    name = prompt(
      "Please enter a name, if you do want to continues just press enter: "
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
  `${duplicateValues(namesArray) ? "Si" : "No"} se ingresaron nombres repetidos`
);
console.log(`El nombre mas largo es: ${namesArray[0]}`);
console.log(`El nombre mas corto es: ${namesArray[namesArray.length - 1]}`);
