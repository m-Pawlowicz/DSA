export function GCD(a, b) {
  const argumentsCopy = [...arguments];
  const zeroArgumentIndex = argumentsCopy.findIndex((x) => x === 0);

  if (zeroArgumentIndex !== -1) {
    const foundArgument = argumentsCopy.find(
      (_, index) => index !== zeroArgumentIndex
    );
    return foundArgument !== 0 ? foundArgument : undefined;
  }

  const higher = a > b ? a : b
  const lower = a < b ? a : b;

  const remainder = higher % lower;

  if (remainder === 0) {
    return lower;
  }

  if (remainder === higher) {
    return lower;
  }

  return GCD(lower, remainder);
}

// console.log(GCD(112, 68));
// console.log(GCD(27, 13));
// console.log(GCD(27, 0));
// console.log(GCD(0, 12));
// console.log(GCD(60, 20));
console.log(GCD(80, 120));
