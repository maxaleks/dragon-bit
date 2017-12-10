import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';

import Layout from '../Layout';
import { UnitCard, Container } from '../../components/Common';
import { getUnits, selectDragon } from './state.js';

class Units extends Component {
  componentDidMount() {
    console.log(this.props.contract);
    this.props.contract.Fight({}, { fromBlock: 0, toBlock: 'latest' }, (err, data) => {
      console.log(err, data);
    });
  }
  render() {
    const { dragons, opponents } = this.props;
    return (
      <Layout>

          <div>Fight</div>

      </Layout>
    );
  }
}

export default connect(
  (state) => ({
    contract: state.contract.contract
  }),
  { getUnits, selectDragon }
)(Units);
