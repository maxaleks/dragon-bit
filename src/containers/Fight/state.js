import { convertToDragonObject } from '../../services/structure';

const initialState = {
  dragons: [],
  opponents: []
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_MY_DRAGONS': {
      return { ...state, dragons: action.payload.slice() };
    }
    case 'SET_OPPONENTS': {
      return { ...state, opponents: action.payload.slice() };
    }
    default:
      return state;
  }
}

export function getUnits() {
  return async (dispatch, getState) => {
    const dragons = [];
    const { contract, account } = getState().contract;
    contract.tokensOfOwner(account, (err, data) => {
      if (data.length) {
        const tokens = data.map(item => item.toNumber());
        tokens.forEach(id => {
          contract.getDragon(id, (err, array) => {
            dragons.push(convertToDragonObject(array, id));
            console.log(dragons);
            dispatch({ type: 'SET_MY_DRAGONS', payload: dragons });
          });
        });
      }
    });
  };
}

export function selectDragon(index) {
  return async (dispatch, getState) => {
    const { contract } = getState().contract;
    const dragon = getState().myDragons.dragons[index];
    contract.tokensForFight((err, data) => {
      if (data.length) {
        const tokens = data.map(item => item.toNumber());
        const opponents = [];
        tokens.forEach(id => {
          contract.getDragon(id, (err, array) => {
            opponents.push(convertToDragonObject(array, id));
            dispatch({ type: 'SET_OPPONENTS', payload: opponents });
          });
        });
      }
    });
  }
}
