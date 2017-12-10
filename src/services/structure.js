export const convertToDragonObject = (array, id) => ({
  id,
  attack: array[0].toNumber() || 1,
  defence: array[1].toNumber() || 1,
  color: array[2].toNumber() || 1,
  bodyType: array[3].toNumber() || 1,
  eyesType: array[4].toNumber() || 1,
  mouthType: array[5].toNumber() || 1,
  hornsType: array[6].toNumber() || 1,
  wingsType: array[7].toNumber() || 1,
  health: array[8].toNumber() || 1,
  price: array[9].toNumber() || 1,
});

// export const convertToDragonObject = array => ({
//   attack: 1,
//   defence: 1,
//   color: 1,
//   bodyType: 1,
//   eyesType: 1,
//   mouthType: 1,
//   hornsType: 1,
//   wingsType: 1,
//   health: 1,
//   price: 1,
// });
