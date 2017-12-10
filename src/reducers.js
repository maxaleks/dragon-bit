import { combineReducers } from 'redux';

import { reducer as home } from './containers/Home/state';
import { reducer as marketplace } from './containers/Marketplace/state';
import { reducer as myDragons } from './containers/MyDragons/state';

import { reducer as contract } from './modules/contract';


export default {
    home,
    contract,
    marketplace,
    myDragons
};
