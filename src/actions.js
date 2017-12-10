import { connectToBlockchain } from './modules/contract';

export function appStart(cb) {
  return async (dispatch, getState) => {
    await dispatch(connectToBlockchain());
    cb();
  };
}
