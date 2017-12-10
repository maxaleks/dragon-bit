export const convertToDragonObject = (array, id) => ({
  id,
  attack: array[0].toNumber(),
  defence: array[1].toNumber(),
  color: array[2].toNumber(),
  bodyType: array[3].toNumber(),
  eyesType: array[4].toNumber(),
  mouthType: array[5].toNumber(),
  hornsType: array[6].toNumber(),
  wingsType: array[7].toNumber(),
  health: array[8].toNumber(),
  price: array[9].toNumber(),
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
