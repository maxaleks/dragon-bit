import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import Layout from '../Layout';
import { UnitCard, Container } from '../../components/Common';
import { getUnits, buyDragon } from './state.js';

class Units extends Component {
  componentDidMount() {
    this.props.getUnits();
  }
  renderUnits() {
    // console.log(this.props.dragons);
    return this.props.dragons.map((dragon, i) =>
      <UnitCard unit={dragon} key={i}>
        <Button onClick={() => this.props.buyDragon(dragon.id)}>Buy</Button>
      </UnitCard>
    );
  }
  render() {
    const { dragons } = this.props;
    // return dragons.length
    //   ? (
    //     <Layout>
    //       <Container>
    //         {this.renderUnits()}
    //       </Container>
    //     </Layout>
    //   )
    //   : (<div>Loading...</div>);
    return (
      <Layout>
        {
          dragons.length
          ? (
            <Container>
              {this.renderUnits()}
            </Container>
          )
          : (<div>No dragons</div>)
        }

      </Layout>
    );
  }
}

export default connect(
  (state) => ({
    contract: state.contract.contract,
    dragons: state.marketplace.dragons
  }),
  { getUnits, buyDragon }
)(Units);
