import Web3 from 'web3';

const ABIarray = [{"constant":true,"inputs":[{"name":"_interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"},{"name":"_preferredTransport","type":"string"}],"name":"tokenMetadata","outputs":[{"name":"infoUrl","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tokensOnSale","outputs":[{"name":"availableTokens","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"dragonIndexToOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdrawBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"tokenOwner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"dragonIndexToApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"name":"ownerTokens","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokensForFight","outputs":[{"name":"availableTokens","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"buyDragon","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"createTestData","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_attack","type":"uint8"},{"name":"_defence","type":"uint8"},{"name":"_color","type":"uint8"},{"name":"_bodyType","type":"uint8"},{"name":"_eyesType","type":"uint8"},{"name":"_mouthType","type":"uint8"},{"name":"_hornsType","type":"uint8"},{"name":"_wingsType","type":"uint8"},{"name":"_health","type":"uint16"},{"name":"_price","type":"uint16"}],"name":"createDragon","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"erc721Metadata","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_ownerDragonId","type":"uint256"},{"name":"_opponentDragonId","type":"uint256"}],"name":"fight","outputs":[{"name":"attack1","type":"bool"},{"name":"attack2","type":"bool"},{"name":"attack3","type":"bool"},{"name":"attack4","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"upper","type":"uint64"},{"name":"step","type":"uint8"}],"name":"random","outputs":[{"name":"randomNumber","type":"uint64"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"getDragon","outputs":[{"name":"attack","type":"uint8"},{"name":"defence","type":"uint8"},{"name":"color","type":"uint8"},{"name":"bodyType","type":"uint8"},{"name":"eyesType","type":"uint8"},{"name":"mouthType","type":"uint8"},{"name":"hornsType","type":"uint8"},{"name":"wingsType","type":"uint8"},{"name":"health","type":"uint16"},{"name":"price","type":"uint256"},{"name":"points","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_contractAddress","type":"address"}],"name":"setMetadataAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_ownerDragonId","type":"uint256"},{"indexed":false,"name":"_opponentDragonId","type":"uint256"},{"indexed":false,"name":"firstAttack","type":"bool"},{"indexed":false,"name":"secondAttack","type":"bool"}],"name":"Fight","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenOwner","type":"address"},{"indexed":false,"name":"approved","type":"address"},{"indexed":false,"name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenOwner","type":"address"},{"indexed":false,"name":"dragonId","type":"uint256"}],"name":"Birth","type":"event"}];

const contractAddress = '0x4fa979161f2e082670cb903cc500afb6e0d2bfd4';

const initialState = {
  contract: {},
  account: null
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_CONTRACT': {
      return { ...state, contract: action.payload };
    }
    case 'SET_ACCOUNT': {
      return { ...state, account: action.payload };
    }
    default:
      return state;
  }
}

export function connectToBlockchain() {
  return async (dispatch) => {
    const web3 = new Web3();
    // web3.setProvider(new web3.providers.HttpProvider('http://mars.cyber.fund:33000/ethereum_kovan'));
    web3.setProvider(window.web3.currentProvider);
    const contract = web3.eth.contract(ABIarray).at(contractAddress);
    const account = web3.eth.accounts[0];
    // console.log(window.web3.eth.accounts);
    // const tokens = contract.tokensOfOwner('0x9FeCc2085A6272A1a99326EF8089B67Da58Eb9d2').map(item => item.toNumber());
    // console.log('!!!!!!!', contract.getDragon(0))
    // console.log(tokens);
    // tokens.forEach(id => console.log(contract.getDragon(id)));
    // const name = await contract.dragons(0).call(0);
    // console.log(name);

    // const coinbase = web3.eth.coinbase;
    // const balance = web3.fromWei(web3.eth.getBalance(coinbase).toNumber(), 'ether');
    dispatch({ type: 'SET_CONTRACT', payload: contract });
    dispatch({ type: 'SET_ACCOUNT', payload: account });
  };
}
