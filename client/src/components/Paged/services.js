export const getValueButtons = (numberPages) => {
  const valueButtons = [];
  let acc = 9;
  for (let i = 0; i < numberPages; i++) {
    valueButtons.push(acc);
    acc += 12;
  }
  return valueButtons;
};
