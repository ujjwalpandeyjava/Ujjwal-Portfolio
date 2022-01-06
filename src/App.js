import React, { Fragment, useState } from 'react'
import AboutSection from './aboutSection'
import ProfileSummary from './profileSummary'
import './App.css'

// work lang images
import AdJavaImage from './images/AdvancedJava.jfif'
import contactPic from './images/contact.png'
import cssImage from './images/css.jpg'
import dsAlgoImage from './images/dsalog.jfif'
import etcImage from './images/etc.jfif'
import GAEImage from './images/GAE.jpg'
import gitImage from './images/git.jfif'
import hibernateImage from './images/hibernate.png'
import htmlImage from './images/html.jpg'
import myPicture from './images/IMG-20210325-WA0006.jpg'
import javaImage from './images/java.jpg'
import jsImage from './images/js.jpg'
import monogDBImage from './images/mongoDB.png'
import msOfficeImage from './images/msOffice.jfif'
import MySQLImage from './images/mySQL.jpg'
import projectsPic from './images/projectPic.png'
import reactImage from './images/ReactJS.jpg'
import restAPIImage from './images/restAPI.jfif'
import springImage from './images/spring1.jpg'
import floatingImage from './images/ujjwalAvatar1Copy.png'
import educationPic from './images/ujjwalAvatarEducation.png'
import Iframe from 'react-iframe'


function App() {
  let [scrollerDisplaying, setScrollerDisplaying] = useState("flex")  // "flex"/"none"
  let scrollerDisplayingWhat = { "display": scrollerDisplaying };
  const colorOrangeRed = { "color": "orangered" };
  window.onscroll = function () {
    //  Hiding the scroller more indicator when page scrolled 80px
    var currentScrollPos = window.pageYOffset;
    // console.log('Screen scrolled and the current scroll pos is = ' + currentScrollPos);
    if (currentScrollPos > 120 && scrollerDisplaying === "flex") {
      // console.warn('changed to none');
      setScrollerDisplaying("none")
    }
    else if (currentScrollPos < 120 && scrollerDisplaying === "none") {
      // console.warn('changed to flex');
      setScrollerDisplaying("flex")
    }
  }
  const socialIcons = <Fragment>
    <div className="socialIcons">
      <div className="icon">
        <div className="tooltip">Facebook</div>
        <span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></span>
      </div>
      <div className="icon">
        <div className="tooltip">Twitter</div>
        <span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></span>
      </div>
      <div className="icon">
        <div className="tooltip">LinkedIn</div>
        <span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></span>
      </div>
      <div className="icon">
        <div className="tooltip">Instagram</div>
        <span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></span>
      </div>
      <div className="icon">
        <div className="tooltip">Github</div>
        <span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></span>
      </div>
    </div>
  </Fragment>
  const navbar = <Fragment>
    <div className="navbar" id="navbar">
      <h1>IAM<span style={colorOrangeRed}>UJJWALPANDEY</span></h1>
      <div className="hamburger">
        <input type="checkbox" id="check" />
        <label htmlFor="check">
          <i className="fas fa-bars" id="btn"></i>
          <i className="fas fa-times" id="cancel"></i>
        </label>
        <div className="sidebar move" >
          <h3><a href="#firstView">Home</a></h3>
          <h3><a href="#aboutSection">About</a></h3>
          <h3><a href="#educationSection">Education</a></h3>
          <h3><a href="#workExamplesSection">Work</a></h3>
          <h3><a href="#contactMeSection">Contact</a></h3>
        </div>
      </div>
      <div className="menus">
        <h3><a href="#firstView">Home</a></h3>
        <h3><a href="#aboutSection">About</a></h3>
        <h3><a href="#educationSection">Education</a></h3>
        <h3><a href="#workExamplesSection">Work</a></h3>
        <h3><a href="#contactMeSection">Contact</a></h3>
      </div>
    </div>
  </Fragment>
  const firstView = <Fragment>
    <div className="firstView" id="firstView">
      <div className="whoIAm">
        <div className="name">Who I AM?
        </div>
        <div className="wrapper">
          <div className="static-txt">I am a &#9;</div>
          <ul className="dynamic-txts">
            <li><span>Web Developer</span></li>
            <li><span>Java Developer</span></li>
            <li><span>ReactJS Dev.</span></li>
            <li><span>😉Full-Stack Dev.</span></li>
          </ul>
        </div>
        {socialIcons}
        <div id="myAvatar"><img src={floatingImage} alt="It's me" /></div>
      </div>
      <div className="whoIamPic">
        <div>
          <img src={myPicture} alt="It me Ujjwal Pandey" />
        </div>
      </div>
      <section id="scroller" style={scrollerDisplayingWhat}>
        <p>Scroll Down</p>
        <div><span>&bull;</span></div>
      </section>
    </div>
  </Fragment>
  const educationSection = <Fragment>
    <div id="educationSection">
      <h1>Education Journey</h1>
      <div id="firstInEducation">
        <div><img src={educationPic} alt="That's me with certificate" /></div>
        <div id="aboutEducation">
          <div><h1>ACADEMIC</h1></div>
          <div><p><span>2019-Present</span> <br />GNIIT in Cloud and Mobile Software Engineering from NIIT</p></div>
          {/* <div><p><span>2018-Present</span> <br />1<sup>st</sup> division BCA Graduate</p></div> */}
          <div><p><span>2018-Present</span> <br />Qualified BCA Graduate</p></div>
          <div><p><span>2017</span> <br />12th from CBSE</p></div>
          <div><p><span>2015</span> <br />10th from CBSE</p></div>
          <div><h1>Educational Work</h1></div>
          <div><p>Practice and Graduation project<i><sub>(Chekout github)</sub></i></p></div>
          <div><p><span>Aug-Sept (2 months)</span> <br />Daily Brief Ambassador</p></div>
          <div><p><span>Oct-Present</span> <br />NetCreativeMind</p></div>
        </div>
      </div>
    </div>
  </Fragment>
  const workExample = <Fragment>
    <div id="workExamplesSection">
      <h1>Projects by me</h1>
      <div id="firstInExamples">
        <div><img src={projectsPic} alt="Me with certificate" /></div>
        <div id="aboutExamples" className='container' >
          {/* <p>Work Examples<br /><sub><i>( Hover/Touch here )</i></sub></p>
          <div className="overlay" id="overlayID">
            <div className="details">
              Click eye to see all the projects in one project "links".
              <div className="eye">
                <a href="https://ujjwalpandeyjava.github.io/Links/examples.html"
                  target="_blank" rel="noreferrer">
                  <i className="far fa-eye"></i>
                </a>
              </div>
            </div>
          </div> */}
          <Iframe src="https://ujjwalpandeyjava.github.io/Links/examples.html" width="100%" height="600" ></Iframe>
          {/* <Iframe src="http://127.0.0.1:5501/examples.html" width="100%" height="650" ></Iframe> */}

        </div>
      </div>
      {/* <ProfileSummary /> */}
    </div>
  </Fragment>
  const contactMe = <Fragment>
    <div id="contactMeSection">
      <h1>Get In Touch <br /><sub><em>Let's talk about work</em></sub></h1>
      <div id="firstIncontactMe">
        <div><img src={contactPic} alt="That's me with certificate" /></div>
        <div id="aboutContact" style={{ padding: '16px 0 0 0', minHeight: '160px' }}>
          <div>
            <div>
              <i className="fas fa-envelope"> </i>
              <a href="mailto:ujjwalpandey.aps@gamil.com"
                target="_blank" rel="noreferrer"> Ujjwalpandey.aps@gmail.com</a>
            </div>
            <div>
              <i className="fas fa-phone-square-alt"></i>
              <a href="tel:+918375990500"> +91-8375-990-500</a>
            </div>
          </div>
          <div>
            <div>
              <i className="fas fa-map-marker-alt"></i> South Delhi, New Delhi
            </div>
            <div>
              <i className="fab fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/ujjwal-pandey-8bb562138/"
                target="_blank" rel="noreferrer"> Ujjwal Pandey</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
  const footer = <Fragment>
    <div className="footer">
      Created by: <i>Ujjwal Pandey</i> using ReactJs.
    </div>
  </Fragment>
  const workingLanguages = <Fragment>
    <div className="workingWith">
      <h2 id="workH3">I work with <sub><i>Click to get details</i></sub></h2>
      <div id="aboutExamples" className='workWith' style={{
        margin: "30px auto", minWidth: "85%",
        maxWidth: "1150px", overflow: "auto",
        boxShadow: "inset 0 -3px 7px #969696",
        borderRadius: "12px",
        alignItems: "baseline",
        alignContent: "flex-start"
      }}>
        <div><a href="http://www.google.com/search?q=Java" target="_blank" rel="noreferrer"><img src={javaImage} alt="Java" /></a></div>
        <div><a href="http://www.google.com/search?q=Advanced+Java" target="_blank" rel="noreferrer"><img src={AdJavaImage} alt="Advnaced java" /></a></div>
        <div><a href="http://www.google.com/search?q=JS" target="_blank" rel="noreferrer"><img src={jsImage} alt="JavaScript" /></a></div>
        <div><a href="http://www.google.com/search?q=React" target="_blank" rel="noreferrer"><img src={reactImage} alt="ReactJS" /></a></div>
        <div><a href="http://www.google.com/search?q=GAE" target="_blank" rel="noreferrer"><img src={GAEImage} alt="GAE" /></a></div>
        <div><a href="http://www.google.com/search?q=RestApi" target="_blank" rel="noreferrer"><img src={restAPIImage} alt="Rest API" /></a></div>
        <div><a href="http://www.google.com/search?q=Spring" target="_blank" rel="noreferrer"><img src={springImage} alt="Spring" /></a></div>
        <div><a href="http://www.google.com/search?q=Hibernate" target="_blank" rel="noreferrer"><img src={hibernateImage} alt="Hibernate" /></a></div>
        <div><a href="http://www.google.com/search?q=Git" target="_blank" rel="noreferrer"><img src={gitImage} alt="Git" /></a></div>
        <div><a href="http://www.google.com/search?q=DS-Algo" target="_blank" rel="noreferrer"><img src={dsAlgoImage} alt="DS-Algo" /></a></div>
        <div><a href="http://www.google.com/search?q=MongoDB" target="_blank" rel="noreferrer"><img src={monogDBImage} alt="MongoDB" /></a></div>
        <div><a href="http://www.google.com/search?q=MySQL" target="_blank" rel="noreferrer"><img src={MySQLImage} alt="MySQL" /></a></div>
        <div><a href="http://www.google.com/search?q=HTML" target="_blank" rel="noreferrer"><img src={htmlImage} alt="HTML" /></a></div>
        <div><a href="http://www.google.com/search?q=CSS" target="_blank" rel="noreferrer"><img src={cssImage} alt="CSS" /></a></div>
        <div><a href="http://www.google.com/search?q=MS+Office" target="_blank" rel="noreferrer"><img src={msOfficeImage} alt="MS Office" /></a></div>
        <div><a href="http://www.google.com/search?q=front+and+back+end+frameworks" target="_blank" rel="noreferrer"><img src={etcImage} alt="others on need" /></a></div>
      </div>
    </div>
  </Fragment >
  return (
    <Fragment>
      {navbar}
      <div className="main">
        {firstView}
        <AboutSection />
        {educationSection}
        {workExample}
        {workingLanguages}
        {contactMe}
      </div>
      {footer}

    </Fragment >
  );
}

export default App;
