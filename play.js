const connection = require("./client");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

{/* <>ctrl</kbd> + <kbd>c</kbd> */}

const handleUserInput = function (input) {
  console.log(input);
  if (input === '\u0003') {
    process.exit();
  }
};

setupInput();