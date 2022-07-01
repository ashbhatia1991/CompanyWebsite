import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "../utilities/navbar";
import Slider from "../utilities/slider";
import storyVideo from "../../images/video.mp4";
import logo from '../../images/logo-1.jpeg';


import web from '../../images/20945836.jpg';
import tourism from '../../images/tourism.jpg';
import mobile from '../../images/mobile-application.jpg';
import education from '../../images/education.jpg';
import technology_services from '../../images/technology.png';
import user_4 from '../../images/user-4.jpg';
import user_6 from '../../images/user-6.jpg';

import web_dev_icon from '../../images/icons/web-development.svg';
import web_des_icon from '../../images/icons/web-design.svg';
import mob_dev_icon from '../../images/icons/mobile-phone.svg';
import sof_test_icon from '../../images/icons/software-testing.svg';

function Home() {
    return (
        <>
            <div className="container">
                <header className='header'>
                    <Navbar />
                </header>
                <Slider />
                <main>
                    <section className="main-section">
                        <div className="ms-description">
                            <h2 className="ms-description__heading ">
                                Web and Mobile App Design and Development Services <strong className='ms-description__heading--blue'>For you.</strong>
                            </h2>
                            {/* <h3 className="ms-description__paragraph">
                            Our templates are easy to setup, understand and customize.
                        Fully modular components with a variety of pages and components.
                            </h3> */}
                            <form className="ms-description-email">
                                <input type="text" className="ms-description-email__input"
                                    placeholder='Your E-mail Address' required>
                                </input>
                                <button className="ms-description-email__button">
                                    Get Started
                                </button>
                            </form>
                        </div>
                        <figure className="ms-gallery">
                            <img src={web} alt="home-gallery-1" className="ms-gallery__photo ms-gallery__photo--animation" />
                        </figure>
                    </section>
                    <section className="section-about">
                        <div className="u-center-text u-margin-bottom-big">
                            <h2 className="heading-secondary">
                                what do we serve
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-1-of-2">
                                <h3 className="heading-tertiary u-margin-bottom-small">
                                    LOOKING FOR A PROFESSIONAL WEB DESIGNING
                                </h3>
                                <p className="paragraph">
                                    You're going to fall in love with our project. We don't want to push our ideas on to customers, we simply want to make what they want.
                                    Custom web design and ecommerce websites created by our awesome development team.
                                </p>
                                <h3 className="heading-tertiary u-margin-bottom-small">
                                    WE DON'T JUST BUILD WEBSITES! WE BUILD LIFE LONG RELATIONSHIPS WITH OUR CLIENTS FOR LONG TERM
                                </h3>
                                <p className="paragraph">
                                    Our specialization in crafting customized web design solutions that helps our customers creates an outstanding web presence that complements their companies' identity. Our team members are highly skilled and are capable of developing any kind of web application.
                                </p>
                                <h3 className="heading-tertiary u-margin-bottom-small">
                                    LOOKING FOR MOBILE APPLICATION DEVELOPMENT
                                </h3>
                                <p className="paragraph">
                                    From mobile websites, responsive website design and complex mobile apps our team can do it all.
                                </p>
                                <Link to="/" className="btn-text">learn more &rarr;</Link>
                            </div>
                            <div className="col-1-of-2">

                                <div className="composition">
                                    <img className="composition__photo composition__photo--p1"
                                        sizes="(max-width:56.25em) 17vw, (max-width:37.5em) 20vw, 300px"
                                        src={education} alt="abc" />

                                    <img className="composition__photo composition__photo--p2"
                                        sizes="(max-width:56.25em) 20vw, (max-width:37.5em) 23vw, 300px"
                                        src={tourism} alt="abc" />

                                    <img className="composition__photo composition__photo--p3"
                                        sizes="(max-width:56.25em) 17vw, (max-width:37.5em) 20vw, 300px"
                                        src={mobile} alt="abc" />
                                </div>
                            </div>
                        </div>
                    </section>
                            
                    <section className="section-features">
                        <div className="u-center-text u-margin-bottom-big">
                            <h2 className="heading-secondary--1">
                                what do we deals
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-1-of-4">
                                <div className="feature-box">
                                    <img src={web_dev_icon} className="feature-box__icon" alt='web-dev-icon'></img>
                                    <h3 className="heading-tertiary u-margin-bottom-small">website development</h3>
                                    <h4 className="feature-box__text">
                                        Our's Web Solutions designs and development are business-critical...
                                    </h4>
                                    <Link to="/" className="btn-text">Read more &rarr;</Link>
                                </div>
                            </div>
                            <div className="col-1-of-4">
                                <div className="feature-box">
                                    <img src={web_des_icon} className="feature-box__icon" alt='web-des-icon'></img>
                                    <h3 className="heading-tertiary u-margin-bottom-small">website design</h3>
                                    <h4 className="feature-box__text">
                                        Web Designing in impressive way is not just a profession but passion for our Company...
                                    </h4>
                                    <Link to="/" className="btn-text">Read more &rarr;</Link>
                                </div>
                            </div>
                            <div className="col-1-of-4">
                                <div className="feature-box">
                                    <img src={mob_dev_icon} className="feature-box__icon" alt='mob-dev-icon'></img>
                                    <h3 className="heading-tertiary u-margin-bottom-small">mobile development</h3>
                                    <h4 className="feature-box__text">
                                        Our's Mobile Solutions designs and develops Mobile Applications that are business-critical...
                                    </h4>
                                    <Link to="/" className="btn-text">Read more &rarr;</Link>
                                </div>
                            </div>
                            <div className="col-1-of-4">
                                <div className="feature-box">
                                    <img src={sof_test_icon} className="feature-box__icon" alt='sof-test-icon'></img>
                                    <h3 className="heading-tertiary u-margin-bottom-small">software testing</h3>
                                    <h4 className="feature-box__text">
                                        Our's Web Solutions offers a rich repertoire of software services to its clients seeking...
                                    </h4>
                                    <Link to="/" className="btn-text">Read more &rarr;</Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-tour" id="section-tour">
                        <div className="u-center-text u-margin-bottom-big">
                            <h2 className="heading-secondary">
                                Most popular Technology and services
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-1-of-3">
                                <div className="card">
                                    <div className="card__side card__side--front">
                                        <div className="card__picture card__picture--1">
                                            &nbsp;
                                        </div>
                                        <h4 className="card__heading">
                                            <span className="card__heading-span card__heading-span--1">Front-end Technology</span>
                                        </h4>
                                        <div className="card__details">
                                            <ul>
                                                <li>Angular.js</li>
                                                <li>React.js</li>
                                                <li>Node.js</li>
                                                <li>Vue.js</li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card__side card__side--back card__side--back-1">
                                        <div className="card__cta">
                                            
                                            <Link to="/" className="btn btn--cyan">Explore more!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-of-3">
                                <div className="card">
                                    <div className="card__side card__side--front">
                                        <div className="card__picture card__picture--2">
                                            &nbsp;
                                        </div>
                                        <h4 className="card__heading">
                                            <span className="card__heading-span card__heading-span--2">Back-end Technology</span>
                                        </h4>
                                        <div className="card__details">
                                            <ul>
                                                <li>PHP</li>
                                                <li>.NET</li>
                                                <li>JAVA</li>
                                                <li>PYTHON</li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card__side card__side--back card__side--back-2">
                                        <div className="card__cta">
                                            
                                            <Link to="/" className="btn btn--cyan u-align-center">Explore more!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-of-3">
                                <div className="card">
                                    <div className="card__side card__side--front">
                                        <div className="card__picture card__picture--3">
                                            &nbsp;
                                        </div>
                                        <h4 className="card__heading">
                                            <span className="card__heading-span card__heading-span--3">Mobile Technology</span>
                                        </h4>
                                        <div className="card__details">
                                            <ul>
                                                <li>React Native</li>
                                                <li>Ios</li>
                                                <li>Andriod</li>
                                                <li>Ios Swift</li>                                                
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card__side card__side--back card__side--back-3">
                                        <div className="card__cta">                                            
                                            <Link to="/" className="btn btn--cyan">Explore more!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={technology_services} className="technology_services" alt='technology-services'></img>
                        <div className="u-center-text u-margin-top-huge">
                            <Link to="/" className="btn btn--cyan">discover all Projects</Link>
                        </div>
                    </section>

                    <section className="section-story">
                        <div className="bg-video">
                            <video className="bg-video__content" autoPlay="true" muted="true" loop="true">
                                <source src={storyVideo} type="video/mp4" />
                                {/* this text is in case when browser is not supported this video */}
                                Your browser is not supported!
                            </video>
                        </div>
                        <div className="u-center-text u-margin-bottom-big">
                            <h2 className="heading-secondary">
                                we make  clients genuinely happy
                            </h2>
                        </div>
                        <div className="row">
                            <div className="story">
                                <figure className="story__shape">
                                    <img alt="Person on a tour"
                                        className="story__img"
                                        src={user_6} />

                                    <figcaption className="story__caption">Marry smith</figcaption>
                                </figure>
                                <div className="story__text">
                                    <h3 className="heading-tertiary u-margin-bottom-small">
                                        i had the best experience with company realted website
                                    </h3>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatibus molestiae, ut excepturi dolorum, sunt recusandae quaerat deserunt tempore dolorem facere, in qui. Molestiae iusto ut itaque, neque aliquam dolor.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="story">
                                <figure className="story__shape">
                                    <img alt="Person on a tour"
                                        className="story__img"
                                        src={user_4} />

                                    <figcaption className="story__caption">Ash bhatia</figcaption>
                                </figure>
                                <div className="story__text">
                                    <h3 className="heading-tertiary u-margin-bottom-small">
                                        wow! Excellent service related software and other
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident repellat repellendus laudantium quasi maiores veniam, voluptates rem fugiat minus aliquam aperiam numquam cumque consequatur sit aspernatur suscipit magnam. Fugit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="u-center-text u-margin-top-big">
                            <Link to="/" className="btn-text">Read all stories &rarr;</Link>
                        </div>
                    </section>

                    <section className="section-book">
                        <div className="row">
                            <div className="book">
                                <div className="book__form">
                                    <form className="form">
                                        <div className="u-margin-bottom-medium">
                                            <h2 className="heading-secondary">
                                                TOUCH WITH US
                                            </h2>
                                        </div>
                                        <div className="form__group ">
                                            <input type="text" className="form__input" placeholder="full name" id="name" required />
                                            <label htmlFor="name" className="form__label">Full name</label>
                                        </div>
                                        <div className="form__group">
                                            <input type="email" className="form__input" placeholder="Email address" id="email" required />
                                            <label htmlFor="email" className="form__label">Email address</label>
                                        </div>
                                        <div className="form__group u-margin-bottom-medium">
                                            <div className="form__radio-group">
                                                <input type="radio" className="form__radio-input" name="size" placeholder="Email address" id="small" />
                                                <label htmlFor="small" className="form__radio-label">
                                                    <span className="form__radio-button"></span>
                                                    Male</label>
                                            </div>
                                            <div className="form__radio-group">
                                                <input type="radio" className="form__radio-input" name="size" placeholder="Email address" id="large" />
                                                <label htmlFor="large" className="form__radio-label">
                                                    <span className="form__radio-button"></span>
                                                    Female</label>
                                            </div>
                                        </div>
                                        
                                        <div className="form__group">
                                            <button className="btn btn--cyan">next step &rarr;</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="footer">
                    <div className="footer__logo-box">
                        <picture className="footer__logo">
                            {/* this one apply when screen resolution is less than or equal to 600px */}
                            {/* <source srcset="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x"
                                media="(max-width:37.5em)" /> */}

                            {/* this one apply when screen resolution is greater than to 600px or high resolution */}
                            <img src={logo} alt="full logo" />
                        </picture>
                        {/* <img srcset="/img/logo-green-1x.png 1x , 
                            img/logo-green-2x.png 2x" alt="full logo" className="footer__logo"> */}
                    </div>
                    <div className="row">
                        <div className="col-1-of-2">
                            <div className="footer__navigation">
                                <ul className="footer__list">
                                    <li className="footer__item"><Link to="/" className="footer__link">Company</Link></li>
                                    <li className="footer__item"><Link to="/" className="footer__link">Contact us</Link></li>
                                    <li className="footer__item"><Link to="/" className="footer__link">career</Link></li>
                                    <li className="footer__item"><Link to="/" className="footer__link">privacy policy</Link></li>
                                    <li className="footer__item"><Link to="/" className="footer__link">terms</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-1-of-2">
                            <p className="footer__copyright">
                                Built by <Link to="/" className="footer__link">ASH BHATIA</Link> for company business purposes<Link to="/" className="footer__link">company software solutions</Link> . Copyright &copy; by Ash Bhatia. You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own design. A credit to the original author, Ash Bhatia, is of course highly appreciated!
                            </p>
                        </div>
                    </div>
                </footer>                
                
            </div>
        </>
    );
}
export default Home;