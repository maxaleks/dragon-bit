import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './containers/Home';
import Marketplace from './containers/Marketplace';
import MyDragons from './containers/MyDragons';
import Fight from './containers/Fight';

export default ({ dispatch, getState }) => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/marketplace' component={Marketplace} />
      <Route path='/my-dragons' component={MyDragons} />
      <Route path='/fight/:id' component={Fight} />
      {/* <Route path='/marketplace' component={Marketplace} /> */}
    </Switch>
  );
}
