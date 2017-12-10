import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';

import Layout from '../Layout';
import { UnitCard, Container } from '../../components/Common';
import { getUnits, selectDragon } from './state.js';

import { Link } from 'react-router-dom';

import Dragon from '../../components/Common/dragon';

class Units extends Component {
  componentDidMount() {
    this.props.getUnits();
  }
  fight(opponent) {
    const { contract, dragon, account } = this.props;
    contract.fight(dragon.id, opponent.id, { from: account }, (err, data) => {
      window.location.href = 'https://f6d4dabb.ngrok.io';
      // if (!err) this.props.history.push(`/fight/${opponent.id}`);
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
              <div className='col-xs-12'>
                <div className='col-xs-12'>
                  <h2>MY DRAGONS</h2>
                </div>
                {this.renderMyDragons()}
              </div>
              {opponents.length > 0 &&
                <div className='col-xs-12'>
                  <div className='col-xs-12'>
                    <h2>OPPONENTS</h2>
                  </div>
                  {this.renderOpponents()}
                </div>
              }


            </Container>
          )
          : (<div>No dragons</div>)
        }

      </Layout>
    );
    // return (
    //   <div className="page-holder" style={{ overflow: 'hidden' }}>
    //
    //     <nav className="navbar main-navigation war navbar-fixed-top">
    //       <div className="container">
    //         <div className="navbar-header">
    //           <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
    //             <span className="sr-only">Переключить меню</span>
    //             <span className="icon-bar"></span>
    //             <span className="icon-bar"></span>
    //             <span className="icon-bar"></span>
    //           </button>
    //           <a className="navbar-brand" href="index.html"><img src={require('../../images/logo.png')} className="img-responsive center-block" alt="logo" /></a>
    //         </div>
    //         <div className="collapse navbar-collapse" id="navbar">
    //           <ul className="nav navbar-nav navbar-right">
    //             <Link to='/'>Main</Link>
    //             <Link to='/marketplace'>Marketplace</Link>
    //             <Link to='/my-dragons'>My Dragons</Link>
    //           </ul>
    //         </div>
    //       </div>
    //     </nav>
    //
    //
		// <section className="character aged war hidden-xs" id="character">
    //     	<h2 className="has-line-center headline text-center">Мои драконы</h2>
    //         <div className="container text-center">
    //             <div id="char-slider" className="mt-43">
    //
    //               {dragons.map((dragon, i) => (
    //                 <div className="char-item col-sm-12">
    //                		<div className="col-md-7 col-sm-12">
		// 					<div className="char-info">
    //
		// 						<div className= "box">
		// 							<div className="content" onClick={() => this.props.selectDragon(i)}>
		// 								<div className="char-img">
    //                   <Dragon dragon={dragon} />
		// 									{/* <img src="images/aged/heros/character-1.png" className="img-responsive center-block" alt="img" /> */}
		// 								</div>
    //
		// 							</div>
		// 		                	<div className='corners top'></div>
		// 							<div className='corners bottom'></div>
		// 		            	</div>
		// 					</div>
		// 				</div>
		// 				<div className="weapon col-md-5 col-sm-12">
		// 					<div className= "box">
		// 						<div className="content">
    //
		// 							<div className="power">
		// 								<div className="skill">
    //
		// 				                   <ul className="list-unstyled list-inline clearfix">
		// 				                      <li className="title">Health</li>
		// 				                      <li className="strength">{dragon.health}</li>
		// 				                   </ul>
    //
		// 				                   <div className="skill-progress">
		// 				                      <div className="progress-bar" style={{ "width": 0 }}></div>
		// 				                   </div>
		// 				                </div>
    //
		// 				                <div className="skill">
    //
		// 				                   <ul className="list-unstyled list-inline clearfix">
		// 				                      <li className="title">Attack</li>
		// 				                      <li className="strength">{dragon.attack}</li>
		// 				                   </ul>
    //
		// 				                   <div className="skill-progress">
		// 				                      <div className="progress-bar" style={{ "width": 0 }}></div>
		// 				                   </div>
		// 				                </div>
    //
		// 				                <div className="skill">
    //
		// 				                   <ul className="list-unstyled list-inline clearfix">
		// 				                      <li className="title">Defence</li>
		// 				                      <li className="strength">{dragon.defence}</li>
		// 				                   </ul>
    //
		// 				                   <div className="skill-progress">
		// 				                      <div className="progress-bar" style={{ "width": 0 }}></div>
		// 				                   </div>
		// 				                </div>
    //
    //
    //
		// 							</div>
		// 						</div>
		// 	                	<div className='corners top'></div>
		// 						<div className='corners bottom'></div>
		// 		            </div>
		// 				</div>
		// 			</div>
    //               ))}
    //
    //             </div>
    //         </div>
    //
    //     </section>
    //
    //     <div className="divider"><span className="divider-core"></span></div>
    //
    //     {opponents.length &&
    //       <section className="screenshoots aged war" id="screenshoots">
    //         <h2 className="has-line-center headline text-center">Доступные соперники</h2>
    //           <div className="container text-center">
    //       <div className="col-sm-12 mt-33">
    //         <div className="screenshoot">
    //
    //          <div id="Container" className="row">
    //
    //            {opponents.map(opponent => (
    //              <div className="mix col-md-4 col-sm-6 col-xs-12" data-my-order="1" onClick={() => this.fight(opponent)}>
    //                <Dragon dragon={opponent} />
    //             </div>
    //            ))}
    //
    //
    //
    //
    //          </div>
    //         </div>
    //       </div>
    //          </div>
    //       </section>
    //
    //     }
    //
    //      <div className="divider"><span className="divider-core"></span></div>
    //
    //     <section className="facts aged war" id="facts">
    //     	<h2 className="has-line-center headline text-center">Статистика игры</h2>
    //     	<div className="container">
		// 	 	<div className="mt-43 col-md-12 col-xs-12">
		// 			<div className="fact-box count-box col-lg-3 col-md-3 col-sm-6 col-xs-12">
		// 			  <div className="inner">
		// 			   <div className="icon-box"><span className="fa fa-calendar"></span></div>
		// 			      <div className="content">
		// 			          <div className="count-outer">
		// 			              <span className="count-text counter cyan">27</span>
		// 			          </div>
		// 			          <div className="counter-title">ДНЕЙ В ИГРЕ</div>
		// 			      </div>
		// 			  </div>
		// 			</div>
    //
		// 			<div className="fact-box count-box col-lg-3 col-md-3 col-sm-6 col-xs-12 fact-box-xs">
		// 			  <div className="inner">
		// 			   <div className="icon-box"><span className="fa fa-diamond"></span></div>
		// 			      <div className="content">
		// 			          <div className="count-outer">
		// 			              <span className="count-text counter cyan">341</span>
		// 			          </div>
		// 			          <div className="counter-title">СУМАРНЫХ ПОБЕД</div>
		// 			      </div>
		// 			  </div>
		// 			</div>
    //
		// 			<div className="fact-box count-box col-lg-3 col-md-3 col-sm-6 col-xs-12 fact-box-sm">
		// 			  <div className="inner">
		// 			   <div className="icon-box"><span className="fa fa-money"></span></div>
		// 			      <div className="content">
		// 			          <div className="count-outer">
		// 			              <span className="count-text counter cyan">232</span>
		// 			          </div>
		// 			          <div className="counter-title">BD ЗАРАБОТАНО</div>
		// 			      </div>
		// 			  </div>
		// 			</div>
    //
		// 			<div className="fact-box count-box col-lg-3 col-md-3 col-sm-6 col-xs-12 fact-box-sm">
		// 			  <div className="inner">
		// 			   <div className="icon-box"><span className="fa fa-arrow-up "></span></div>
		// 			      <div className="content">
		// 			          <div className="count-outer">
		// 			              <span className="count-text counter cyan">940</span>K
		// 			          </div>
		// 			          <div className="counter-title">СУММАРНОГО ОПЫТА</div>
		// 			      </div>
		// 			  </div>
		// 			</div>
		// 		</div>
		// 	</div>
    //     </section>
    //
    //     <footer className="main-footer text-center" id="footer">
    //
    //       <div className="footer-bottom">
    //          <div className="container">
    //          	<div className="col-md-6 col-sm-12">
    //             	<div className="copyright-text">© 2018. Все права защищены.</div>
    //             </div>
    //             <div className="col-md-6 col-sm-12">
    //             	<ul className="social-links">
    //                   <li><a href="#"><span className="fa fa-facebook-f"></span></a></li>
    //                   <li><a href="#"><span className="fa fa-twitter"></span></a></li>
    //                   <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
    //                   <li><a href="#"><span className="fa fa-linkedin"></span></a></li>
    //                   <li><a href="#"><span className="fa fa-instagram"></span></a></li>
    //                </ul>
    //             </div>
    //          </div>
    //       </div>
    //     </footer>
    //
    //     {/* <div className="preloader">
    //       <div className="loader">
    //             <div className="loader-inner"></div>
    //         </div>
    //     </div> */}
    //
    //   </div>
    // );
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
