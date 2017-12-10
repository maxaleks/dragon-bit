import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';

import './index.css';

class Home extends Component {
  render() {
    const { contract } = this.props;
    return (
      <div className="page-holder" style={{ overflow: 'hidden' }}>
        <nav className="navbar main-navigation war navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                <span className="sr-only">Переключить меню</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="index.html"><img src={require('../../images/logo.png')} className="img-responsive center-block" alt="logo"/></a>
            </div>
            <div className="collapse navbar-collapse" id="navbar">
              <ul className="nav navbar-nav navbar-right">
                <li><a className="active" href="index.html">Главная</a></li>
                <li><a href="marketplace.html">Купить дракона</a></li>
                <li><a href="game.html">Играть</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="home" className="header-1 aged">
			<div className="demo-1"></div>
        	{/* <!--<div className="moving-bg"></div>--> */}
          	<div className="container">
	            <div className="header-1-content">
	            	<div className="col-xs-12 text-center">
	            		<img src={require('../../images/aged/sologan.png')} alt="img" className="sologan-img img-responsive center-block mt-63"/>
		            	<h1 className="golden" data-gold="DRAGON BIT – BLOCKCHAIN GAME">Dragon BIT – Blockchain Game</h1>
						<h2 className="silver" data-silver="Дерись, размножайся, зарабатывай!">Дерись, размножайся, зарабатывай!</h2>
	            	</div>
	            </div>
          	</div>
        </div>
		<div className="divider"><span className="divider-core"></span></div>

        <section className="video" id="about">
			<div className="container">
				<h2 className="has-line-center headline text-center">Как это работает?</h2>
				<div className=" mt-63 row">
					<div className="col-sm-10 col-sm-offset-1">
						<div className="video-wrapper">
							<div className="video-frame">
								<div className="overlay"></div>
							</div>
							<a href="#" className="play-btn"></a>
							<img src={require('../../images/aged/video-bg.jpg')} className="img-responsive center-block" alt="img"/>
						</div>
					</div>
				</div>
			</div>
        </section>
        <div className="divider"><span className="divider-core"></span></div>

        <section className="testimonials" id="testimonial">
        	<div className="overlay"></div>
        	<h2 className="has-line-center headline text-center">Наша команда</h2>
            <div className="container text-center">
             <div className="col-sm-12">

                <div className="testimonial-wrapper mt-43">

                   <div className="item col-md-4 col-sm-6 col-xs-12">
                      <div className="testimonial-item has-shadow">
                         <div className="inner-box">
                            <figure className="author-thumb img-circle"><img className="img-circle" src={require('../../images/aged/testimonials/1.jpg')} alt="image"/></figure>
                            <div className="text">Project Manager</div>
                            <div className="info">Nikoliya - <span className="designation">coFounder</span></div>
                            <div className="quote-icon">@npashuk</div>
                         </div>
                      </div>
                   </div>

                   <div className="item col-md-4 col-sm-6 col-xs-12">
                      <div className="testimonial-item has-shadow">
                         <div className="inner-box">
                            <figure className="author-thumb img-circle"><img className="img-circle" src={require('../../images/aged/testimonials/2.jpg')} alt="image"/></figure>
                            <div className="text">Business Analyst </div>
                            <div className="info">Vlad - <span className="designation">coFounder</span></div>
                            <div className="quote-icon"><span className="fa fa-telegram"></span> @vladimirskarmakhovich</div>
                         </div>
                      </div>
                   </div>

                   <div className="item col-md-4 col-sm-6 col-xs-12">
                      <div className="testimonial-item has-shadow">
                         <div className="inner-box">
                            <figure className="author-thumb img-circle"><img className="img-circle" src={require('../../images/aged/testimonials/3.jpg')} alt="image"/></figure>
                            <div className="text">Blockchain developer </div>
                            <div className="info">Andru - <span className="designation">coFounder</span></div>
                            <div className="quote-icon">@alesha</div>
                         </div>
                      </div>
                   </div>

                   <div className="item col-md-4 col-sm-6 col-xs-12">
                      <div className="testimonial-item has-shadow">
                         <div className="inner-box">
                            <figure className="author-thumb img-circle"><img className="img-circle" src={require('../../images/aged/testimonials/4.jpg')} alt="image"/></figure>
                            <div className="text">Blockchain developer </div>
                            <div className="info">Maxim - <span className="designation">coFounder</span></div>
                            <div className="quote-icon">@maxim_tolo</div>
                         </div>
                      </div>
                   </div>

                   <div className="item col-md-4 col-sm-6 col-xs-12">
                      <div className="testimonial-item has-shadow">
                         <div className="inner-box">
                            <figure className="author-thumb img-circle"><img className="img-circle" src={require('../../images/aged/testimonials/5.jpg')} alt="image"/></figure>
                            <div className="text">Fullstack developer </div>
                            <div className="info">Max - <span className="designation">coFounder</span></div>
                            <div className="quote-icon">@maxaleks</div>
                         </div>
                      </div>
                   </div>

                   <div className="item col-md-4 col-sm-6 col-xs-12">
                      <div className="testimonial-item has-shadow">
                         <div className="inner-box">
                            <figure className="author-thumb img-circle"><img className="img-circle" src={require('../../images/aged/testimonials/6.jpg')} alt="image"/></figure>
                            <div className="text">Designer </div>
                            <div className="info">Alex - <span className="designation">coFounder</span></div>
                            <div className="quote-icon"><span className="fa fa-quote-left"></span></div>
                         </div>
                      </div>
                   </div>

                </div>
             </div>
          </div>
        </section>

		<div className="divider"><span className="divider-core"></span></div>

        <section className="contact aged war" id="contact">
        	<h2 className="has-line-center headline text-center">Связаться с нами</h2>
    			<div className="container text-center">
    			 <div className="contact-form">
    			    <form>
    			    	<div className="col-md-6 col-sm-12">
    			    		<input type="text" placeholder="Ваше Имя" />
    			    	</div>
    			    	<div className="col-md-6 col-sm-12">
    			    		<input type="text" placeholder="Ваш Email" />
    			    	</div>
    			    	<div className="col-sm-12">
    			        	<input type="text" placeholder="Сколько денег хотите вложить?" />
    			        	<textarea placeholder="сообщение" cols="30" rows="10"></textarea>
    			        </div>

    			        <div className="submit-btn"><input type="submit" className="more-btn" value="Отправить" /></div>
    			    </form>
    			 </div>
    			</div>
        </section>
        <footer className="main-footer text-center" id="footer">

          <div className="footer-bottom">
             <div className="container">
             	<div className="col-md-6 col-sm-12">
                	<div className="copyright-text">© 2018. Все права защищены.</div>
                </div>
                <div className="col-md-6 col-sm-12">
                	<ul className="social-links">
                      <li><a href="#"><span className="fa fa-facebook-f"></span></a></li>
                      <li><a href="#"><span className="fa fa-twitter"></span></a></li>
                      <li><a href="#"><span className="fa fa-google-plus"></span></a></li>
                      <li><a href="#"><span className="fa fa-linkedin"></span></a></li>
                      <li><a href="#"><span className="fa fa-instagram"></span></a></li>
                   </ul>
                </div>
             </div>
          </div>
        </footer>
        {/* <div className="preloader">
          <div className="loader">
                <div className="loader-inner"></div>
            </div>
        </div> */}

      </div>
    );
  }
}

export default connect()(Home);
