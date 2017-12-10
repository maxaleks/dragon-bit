import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Layout from '../Layout';
import { UnitCard, Container } from '../../components/Common';
import Dragon from '../../components/Common/dragon';
import { getUnits, buyDragon } from './state.js';

import '../Home/index.css';

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
              <div className='col-xs-12'>
                <div className='col-xs-12'>
                  <h2>MARKETPLACE</h2>
                </div>
                  {this.renderUnits()}
              </div>
            </Container>
          )
          : (<div>No dragons</div>)
        }

      </Layout>
    );
    // return (
    //   <div className="page-holder" style={{ overflow: 'hidden' }}>
    //
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
    //           <a className="navbar-brand" href="index.html"><img src={require("../../images/logo.png")} className="img-responsive center-block" alt="logo" /></a>
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
    //     <section className="know-more-1 aged war">
    //     	<div className="overlay"></div>
	  //      	<div className="container">
	  //      		<div className="col-md-6 col-md-offset-6 col-sm-12">
	  //      			<div className="more-content">
	  //      				<h2 className="has-line">Как покупать драконов?</h2>
	  //      				<p>"Драться чтобы размножаться и размножаться чтобы драться" – это слоган нашего мини-мира. Вы покупаете дракона, с помошью битв с другими драконами вы поднимаете его уровень и спариваете с другими драконами. В результате получается более сильная и дорогая особъ, которую так же можно спарить, развить или продать.</p>
	  //      			</div>
	  //      		</div>
	  //      	</div>
    //    </section>
    //
    //     <div className="divider"><span className="divider-core"></span></div>
    //
    //     <section className="showcase aged">
    //     	<div className="overlay"></div>
    //     	<div className="container">
    //     		<div className="mt-33 row">
    //           {dragons.map(dragon => (
    //             <div className="item col-md-4 col-sm-6 colxs-12">
  	//         			<div className="showcase-img" onClick={() => this.props.buyDragon(dragon.id)}>
  	//         				<div className="overlay"></div>
  	//         				<Dragon dragon={dragon} />
  	//         			</div>
  	//         			<div className="showcase-info">
  	//         				<h3 className="white normal mb-10">Джен Джу Джо</h3>
  	//         				<p className="white mt-10">Любит девочех и хорошо проводить время. Путешевствует автоспотом. Практически никогда не проигрывает. Соперники называет его "МИША".</p>
  	//         			</div>
  	//         		</div>
    //           ))}
    //
    //     		</div>
    //     	</div>
    //     </section>
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
    dragons: state.marketplace.dragons
  }),
  { getUnits, buyDragon }
)(Units);
