export const cToF = (tempInC) => {
  const newTempinF = tempInC * 9 / 5 + 32;
  return newTempinF.toFixed(1)
}