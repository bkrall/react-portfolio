import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
// import Menu from 'react-burger-menu/lib/menus/scaleDown';
import ReactTooltip from 'react-tooltip';

const metaData = {
  title: 'Brian Krall, Sr. UI Developer in Chicago',
  description: '8+ Years of front-end development experience',
  meta: {
    charset: 'utf-8',
  },
};

export class Home extends Component {

  render() {
    return (
      <div id="outer-container">

      <main id="page-wrap">
      <section>
        <DocumentMeta {...metaData} />

        <header className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-xs-6">
                <div className="site-title">
                  @bkrall
                  <a href="https://www.twitter.com/bkrall" target="_blank">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </div>
                <h3 className="status">Current status: <span className="shrugs">¯\_(ツ)_/¯</span> </h3>
              </div>
              <div className="col-xs-6 social text-right">
                <a href="https://www.github.com/bkrall" target="_blank">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/in/bkrall" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                <a href="https://www.medium.com/@bkrall" target="_blank">
                  <i className="fa fa-medium" aria-hidden="true"></i>
                </a>
                <a href="https://open.spotify.com/user/1217009251" target="_blank">
                  <i className="fa fa-spotify" aria-hidden="true"></i>
                </a>

              </div>
            </div>
          </div>
        </header>

        <div className="container">
        <div className="col-xs-12">
        <section className="browser-wrapper">
          <div className="browser">
            <div className="browser-top">
              <div className="browser-dots"></div>

              <div className="tab-container">
                <div className="tab tab-first tab-active"></div>
                <div className="chrome-tab-info first">
                  <i className="fa fa-terminal tab-favicon"></i>
                  <span className="meta-title">Brian Krall, Sr.</span>
                </div>
              </div>

              <div className="tab-container">
                <div className="tab"></div>
                <div className="chrome-tab-info">
                  <i className="fa fa-github tab-favicon" aria-hidden="true"></i>
                  <span className="meta-title">GitHub</span>
                </div>
              </div>

              <div className="tab-container">
                <div className="tab"></div>
                <div className="chrome-tab-info">
                  <i className="fa fa-codepen tab-favicon" aria-hidden="true"></i>
                  <span className="meta-title">CodePen</span>
                </div>
              </div>

              <div className="tab-container">
                <div className="tab"></div>
                <div className="chrome-tab-info">
                  <i className="fa fa-product-hunt tab-favicon" aria-hidden="true"></i>
                  <span className="meta-title">Produt Hunt</span>
                </div>
              </div>

              <div className="tab-container">
                <div className="tab"></div>
                <div className="chrome-tab-info">
                  <i className="fa fa-stack-overflow" aria-hidden="true"></i>
                  <span className="meta-title">Stack Overflow</span>
                </div>
              </div>

              <div className="tab-container">
                <div className="tab"></div>
                <div className="chrome-tab-info">
                  <i className="fa fa-stack-overflow" aria-hidden="true"></i>
                  <span className="meta-title">Stack Overflow</span>
                </div>
              </div>

              <div className="tab-container">
                <div className="tab"></div>
                <div className="chrome-tab-info">
                  <i className="fa fa-stack-overflow" aria-hidden="true"></i>
                  <span className="meta-title">Stack Overflow</span>
                </div>
              </div>

            </div>

            <div className="heading-title">
              <img src="http://sideproject.io/content/images/2016/09/2547195.jpeg" className="bio-pic" width="" alt="BK" />
              <h1 className="glitch">I am a Senior UI Developer.
              <span className="explainer"> Front-end development, responsive interfaces,
              large-scale CSS and JS.</span></h1>
              <div className="button-container">
                <button className="button">
                  <a href="mailto:bkrall@gmail.com" target="_blank">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i> &nbsp; Get in touch
                  </a>
                </button>
                &nbsp; &nbsp;
              </div>

            </div>

          </div>
      </section>



        </div>
        </div>

        <section className="container">
            <div className="row">
              <div className="col-md-9">
              <section className="gig">

              {/* Gig intro */}
              <div className="intro">
                <img className="company-logo" src="http://sideproject.io/content/images/2016/09/logo_whittl.png" width="100" alt="Whittl"/>
                <div className="company">Whittl</div>
                <div className="position">Sr. UI Developer</div>
                <div className="date">
                    <i className="fa fa-calendar-o" aria-hidden="true"></i>
                    January 2015 - September 2016
                </div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  Chicago, IL
                </div>
              </div>

                <p>
                  Whittl is like OpenTable but for salons, spas and barbershops.
                  Check out our article in <a href="https://techcrunch.com/2015/06/25/whittl-picks-up-a-chicago-style-3-3m-series-a/" target="_blank">TechCrunch</a>.
                </p>
                <p>
                  There I was responsible for providing a unifying voice for design and engineering teams.
                  That includes collaborating with our cofounders, designers and engineers to build great
                  user experiences. Tools used include React, Node.js, Jade templating and Sass.
                  Obsessive focus on performance and usability.
                </p>
                <p>
                  <a href="https://www.whittl.com" target="_blank">Whittl</a> shutdown in Sept. 2016. We're leaving our <a href="http://itf8392.pagekite.me/start" target="_blank">staging server</a> up to showcase the team's work.
                </p>

                <div className="row">
                  <div className="col-xs-6">
                    <div className="featured-work">Highlighted Projects</div>
                    <a className="featured-case" href="#" target="_blank">
                      Yelp Partnership
                    </a>
                  </div>
                  <div className="col-xs-6">
                    <ul>
                      <li><a href="#" target="_blank">UI kit of React components</a></li>
                      <li><a href="https://www.duoconsulting.com/work/much-shelist" target="_blank">Much Shelist</a></li>
                      <li><a href="https://www.duoconsulting.com/work/freeborn" target="_blank">Freeborn</a></li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="gig">
                <div className="intro">
                  <img className="company-logo" src="http://sideproject.io/content/images/2016/09/logo_duo.png" width="100" alt="Duo Consulting"/>
                  <div className="company">Duo Consulting</div>
                  <div className="position">Sr. Front-end Developer</div>
                  <div className="date">
                    <i className="fa fa-calendar-o" aria-hidden="true"></i>
                    September 2012 - December 2014
                  </div>
                  <div className="location">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    Chicago, IL
                  </div>
                </div>

                <p>
                  Lead front-end developer on Drupal-based projects, architecting sites, optimizing
                  for performance, and writing maintainable and scalable HTML5/CSS3 and JavaScript/jQuery. Responsive web design.
                </p>


                <div className="row">
                  <div className="col-xs-6">
                    <div className="featured-work">Featured Case Study</div>
                    <a className="featured-case" href="https://www.duoconsulting.com/work/bloomberg" target="_blank">Bloomberg Current</a>
                  </div>
                  <div className="col-xs-6">
                    <ul>
                      <li><a href="https://www.duoconsulting.com/work/principal" target="_blank">Principal</a></li>
                      <li><a href="https://www.duoconsulting.com/work/much-shelist" target="_blank">Much Shelist</a></li>
                      <li><a href="https://www.duoconsulting.com/work/freeborn" target="_blank">Freeborn</a></li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="gig first">
                <div className="intro">
                  <img className="company-logo" src="http://sideproject.io/content/images/2016/09/logo_liquidprint.png" width="100" alt="liQuidprint" />
                  <div className="company">liQuidprint</div>
                  <div className="position"><span className="hidden-xs">FE Developer =>  </span>Sr. Front-end Developer</div>
                  <div className="date">
                    <i className="fa fa-calendar-o" aria-hidden="true"></i>
                    January 2008 - September 2012
                  </div>
                  <div className="location">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    Lincolnwood, IL
                  </div>
                </div>
                <p>
                  Front-end web development over a variety of different technologies and CMSs
                  across several different industries in a team environment.
                  Resource managementand mentoring. Evolved from new grad to senior-level management.
                </p>


                <div className="row">
                  <div className="col-xs-6">
                  <div className="featured-work">Featured Case Study</div>
                  <a className="featured-case" href="http://www.liquidprint.com/clientprojects/american-sale.aspx" target="_blank">American Sale</a>

                  </div>
                  <div className="col-xs-6">
                    <ul>
                      <li><a href="http://www.liquidprint.com/clientprojects/hanig's-footwear.aspx" target="_blank">Hanig's Footwear</a></li>
                      <li><a href="http://www.liquidprint.com/clientprojects/perspectives.aspx" target="_blank">Perspectives</a></li>
                      <li><a href="#" target="_blank">Baird & Warner</a></li>
                    </ul>
                  </div>

                  <div className="button-container" style={{ textAlign: 'left'}}>
                    <button className="button" style={{ marginTop: '30px'}}>
                      <a href="https://github.com/bkrall/react-portfolio/raw/master/src/assets/bkrall_resume_2016.pdf" target="_blank">
                        <i className="fa fa-file-pdf-o" aria-hidden="true"></i> &nbsp; Download resume
                      </a>
                    </button>
                  </div>


                </div>
              </section>
            </div>

            <div className="col-md-3">


              <div className="sidebar-title">My writing on the web</div>
              <ul style={{ background: '#fff', padding: '15px 20px'}}>
              <li><a href="http://sideproject.io/" target="_blank">Sideproject.io</a> - Personal blog on web and front-end dev trends</li>
              <li><a href="http://blog.invisionapp.com/from-agency-pro-to-startup-newbie-developer-edition/" target="_blank">InVision App Blog</a> - From Agency Pro to Startup Newbie</li>
              <li><a href="https://www.smashingmagazine.com/2014/05/team-collaboration-closing-efficiency-gaps-responsive-design/" target="_blank">Smashing Magazine</a> - Team Collaboration And Closing Efficiency Gaps In Responsive Design</li>
              <li><a href="https://the-pastry-box-project.net/brian-krall/2014-february-19" target="_blank">The Pastry Box</a> - Go with your gut</li>
              <li><a href="https://medium.com/@bkrall/why-i-became-a-front-end-web-developer-64dfa138cd89#.nooqhbr1f" target="_blank">Medium</a> - Why I became a front-end developer</li>
              </ul>

              <div className="tools-and-techniques">

              <div className="sidebar-title">Tools, etc.</div>

                <span className="tool-wrapper">
                  <img src="http://sideproject.io/content/images/2016/09/reactjs.jpg" data-tip data-for="react" alt="React" />
                  <ReactTooltip effect="solid" id="react">
                    <span>React</span>
                  </ReactTooltip>
                </span>
                <span className="tool-wrapper">
                  <img className="node" src="http://sideproject.io/content/images/2016/09/node.jpg" data-tip data-for="node" alt="Node" />
                  <ReactTooltip effect="solid" id="node">
                    <span>Node</span>
                  </ReactTooltip>
                </span>
                <span className="tool-wrapper">
                  <img src="http://sideproject.io/content/images/2016/09/npm.jpg" data-tip data-for="npm" alt="NPM" />
                  <ReactTooltip effect="solid" id="npm">
                    <span>NPM</span>
                  </ReactTooltip>
                </span>
                <span className="tool-wrapper">
                  <img src="http://sideproject.io/content/images/2016/09/webpack.jpg" data-tip data-for="webpack" alt="Webpack" />
                  <ReactTooltip effect="solid" id="webpack">
                    <span>Webpack</span>
                  </ReactTooltip>
                </span>
                <span className="tool-wrapper">
                  <img src="http://sideproject.io/content/images/2016/09/grunt.jpg" data-tip data-for="grunt" alt="Grunt" />
                  <ReactTooltip effect="solid" id="grunt">
                    <span>Grunt</span>
                  </ReactTooltip>
                </span>
                <span className="tool-wrapper">
                  <img className="sass" src="http://sideproject.io/content/images/2016/09/sass.jpg" data-tip data-for="sass" alt="Sass" />
                  <ReactTooltip effect="solid" id="sass">
                    <span>Sass</span>
                  </ReactTooltip>
                </span>
                <span className="tool-wrapper">
                  <img src="http://sideproject.io/content/images/2016/09/github.jpg" data-tip data-for="github" alt="Git" />
                  <ReactTooltip effect="solid" id="github">
                    <span>Git</span>
                  </ReactTooltip>
                </span>
                <span className="tool-wrapper">
                  <img src="http://sideproject.io/content/images/2016/09/pug.jpg" data-tip data-for="pug" alt="Pug/Jade" />
                  <ReactTooltip effect="solid" id="pug">
                    <span>Pug / Jade templating</span>
                  </ReactTooltip>
                </span>
                <span className="tool-wrapper">
                  <img src="http://sideproject.io/content/images/2016/09/chrome.jpg" data-tip data-for="chrome" alt="Chrome Dev Tools" />
                  <ReactTooltip effect="solid" id="chrome">
                    <span>Chrome Dev Tools</span>
                  </ReactTooltip>
                </span>
                <span className="tool-wrapper">
                  <img src="http://sideproject.io/content/images/2016/09/postman.jpg" data-tip data-for="postman" alt="Postman" />
                  <ReactTooltip effect="solid" id="postman">
                    <span>Postman</span>
                  </ReactTooltip>
                </span>
                <span className="tool-wrapper">
                  <img src="http://sideproject.io/content/images/2016/09/foundation.jpg" data-tip data-for="foundation" alt="Foundation" />
                  <ReactTooltip effect="solid" id="foundation">
                    <span>Foundation</span>
                  </ReactTooltip>
                </span>
                <span className="tool-wrapper">
                  <img src="http://sideproject.io/content/images/2016/09/bootstrapcss.jpg" data-tip data-for="bootstrap" alt="Bootstrap" />
                  <ReactTooltip effect="solid" id="bootstrap">
                    <span>Bootstrap</span>
                  </ReactTooltip>
                </span>
                <span className="tool-wrapper">
                  <img src="http://sideproject.io/content/images/2016/09/drupal.jpg" data-tip data-for="drupal" alt="Drupal" />
                  <ReactTooltip effect="solid" id="drupal">
                    <span>Drupal</span>
                  </ReactTooltip>
                </span>
                <span className="tool-wrapper">
                  <img src="http://sideproject.io/content/images/2016/09/jquery.jpg" data-tip data-for="jquery" alt="jQuery" />
                  <ReactTooltip effect="solid" id="jquery">
                    <span>jQuery</span>
                  </ReactTooltip>
                </span>
                <span className="tool-wrapper">
                  <img src="http://sideproject.io/content/images/2016/09/atom.jpg" data-tip data-for="atom" alt="Atom" />
                  <ReactTooltip effect="solid" id="atom">
                    <span>Atom</span>
                  </ReactTooltip>
                </span>
                <span className="tool-wrapper">
                  <img src="http://sideproject.io/content/images/2016/09/sequelpro.jpg" data-tip data-for="sequel" alt="Sequel Pro" />
                  <ReactTooltip effect="solid" id="sequel">
                    <span>Sequel Pro</span>
                  </ReactTooltip>
                </span>
              </div>
              </div>

          </div>

        </section>

        <footer className="text-center">
          <strong>&copy; 2016 Brian Krall.</strong> &nbsp;
          Built with React, Sass, and Git. 💻 &nbsp;
          <strong>&nbsp; <a href="https://github.com/bkrall/react-portfolio" target="_blank">See the code.</a>&nbsp;🔓</strong>
          {/* Use for micro-interactions page */}
          <br/> <a href="/#/microinteractions" style={{display: 'inline-block', marginTop: '15px'}}>The 😈&nbsp; is in the details.</a>
        </footer>

      </section>
      </main>
    </div>


    );
  }
}
