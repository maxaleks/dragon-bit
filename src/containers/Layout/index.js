import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Header, Layout as LayoutComponent, Tab } from '../../components/Common';

const tabs = [
  {
    name: 'Marketplace',
    path: '/marketplace',
  },
  {
    name: 'My Dragons',
    path: '/my-dragons',
  },
  {
    name: 'Home',
    path: '/',
  },
]

export default class Layout extends Component {
  renderTabs() {
    return tabs.map((tab, index) =>
      <Link key={index} to={{ pathname: tab.path }} style={{ textDecoration: 'none'}}>
        <Tab>{tab.name}</Tab>
      </Link>
    );
  }
  render() {
    return (
      <LayoutComponent>
        <Header>
          {this.renderTabs()}
        </Header>
        {this.props.children}
      </LayoutComponent>
    );
  }
}

// export default connect()(Layout);
