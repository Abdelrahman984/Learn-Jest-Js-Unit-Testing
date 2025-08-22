// function sum(a = 0, b = 0, c = 0) {
//   return a + b + c;
// }

function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

export { sum };
