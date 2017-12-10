import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';

import Layout from '../Layout';
import { UnitCard, Container } from '../../components/Common';
import { getUnits, selectDragon } from './state.js';

class Units extends Component {
  componentDidMount() {
    this.props.getUnits();
  }
  fight(opponent) {
    const { contract, dragon, account } = this.props;
    contract.fight(dragon.id, opponent.id, { from: account }, (err, data) => {
      if (!err) this.props.history.push(`/fight/${opponent.id}`);
    });
    // this.props.history.push(`/fight/${opponent.id}`);
  }
  renderMyDragons() {
    return this.props.dragons.map((dragon, i) =>
      <UnitCard unit={dragon} key={i} onClick={() => this.props.selectDragon(i)} />
    );
  }
  renderOpponents() {
    return this.props.opponents.map((dragon, i) =>
      <UnitCard unit={dragon} key={i} onClick={() => this.fight(dragon)} />
    );
  }
  render() {
    const { dragons, opponents } = this.props;
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
              {this.renderMyDragons()}
              {this.renderOpponents()}
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
    dragons: state.myDragons.dragons,
    opponents: state.myDragons.opponents,
    contract: state.contract.contract,
    account: state.contract.account,
    dragon: state.myDragons.dragon
  }),
  { getUnits, selectDragon }
)(Units);
