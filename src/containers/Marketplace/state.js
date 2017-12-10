import { convertToDragonObject } from '../../services/structure';

const initialState = {
  dragons: [],
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_MARKETPLACE_DRAGONS': {
      return { ...state, dragons: action.payload.slice() };
    }
    default:
      return state;
  }
}

export function getUnits() {
  return async (dispatch, getState) => {
    const dragons = [];
    const contract = getState().contract.contract;
    contract.tokensOnSale((err, data) => {
      console.log(data);
      if (data.length) {
        const tokens = data.map(item => item.toNumber())
        tokens.forEach(id => {
          contract.getDragon(id, (err, array) => {
            dragons.push(convertToDragonObject(array, id));
            dispatch({ type: 'SET_MARKETPLACE_DRAGONS', payload: dragons });
          });
        });
      }
    });
  };
}

export function buyDragon(id) {
  return async (dispatch, getState) => {
    const { contract, account } = getState().contract;
    contract.buyDragon(id, { value: 10**15, from: account, gasLimit: 30000 }, (err, data) => {
      const dragons = getState().marketplace.dragons.filter(item => item.id !== id);
      dispatch({ type: 'SET_MARKETPLACE_DRAGONS', payload: dragons });
    });
  };
}
