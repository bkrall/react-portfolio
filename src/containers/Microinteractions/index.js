import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DocumentMeta from 'react-document-meta';

const metaData = {
  title: 'Brian Krall, Sr. UI Developer in Chicago',
  description: '8+ Years of front-end development experience',
  meta: {
    charset: 'utf-8',
  },
};


export class Microinteractions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
              <h1>Microinteractions</h1>
            </div>

            <div className="row micro-container">
              <div className="col-xs-12 col-sm-6 micro-item">
                <img src="http://sideproject.io/content/images/2016/09/how-it-works-optimized.gif" alt="How it works" />
              </div>

              <div className="col-xs-12 col-sm-6 micro-item">
                <div className="section-title micro-item">How it Works</div>
                <p>This section was only displayed to new users and opened from a nav link.
                The idea was to give them a <strong>quick overview of the process</strong> (Search, book, go to your appointment, etc.).
                The "Sign up and get special offers" call-to-action launched a registration modal.</p>
              </div>
            </div>

            <div className="row micro-container">
              <div className="col-xs-12 col-sm-6">
                <div className="section-title micro-item">Float Labels</div>
                <p>This is a subtle interaction that let's users see a form label while filling out the form.
                It allows you to save space like a `placeholder` attribute with the <strong>usability</strong> of a regular form label. </p>
              </div>

              <div className="col-xs-12 col-sm-6 micro-item">
                <img src="http://sideproject.io/content/images/2016/09/float-labels-optimized.gif" alt="Float labels" />
              </div>
            </div>

            <div className="row micro-container">
              <div className="col-xs-12 col-sm-6 micro-item">
                <img src="http://sideproject.io/content/images/2016/09/value-props-sm-optimized.gif" alt="Value props" />
              </div>

              <div className="col-xs-12 col-sm-6">
                <div className="section-title micro-item">Value Props</div>
                <p>We used <a href="https://www.optimizely.com" target="_blank">Optimizely</a> to test if reiterating our value propositions (i.e. Book 24/7, Pay and Tip Online, No Fees) would boost conversion and found a considerable increase.
                This is a CSS transition animation to make the tab items more noticeable while scrolling.</p>
              </div>
            </div>


            <div className="row micro-container">
              <div className="col-xs-12 col-sm-6">
                <div className="section-title micro-item">Sticky Tabs</div>
                <p>We continously improved our storefront page, improving usability adding new features like Yelp reviews.
                This interaction allows users to still see the tabs as they scrolled on the page.</p>
              </div>

              <div className="col-xs-12 col-sm-6 micro-item">
                <img src="http://sideproject.io/content/images/2016/09/sticky-head-optimized.gif" alt="Sticky head tabs" />
              </div>
            </div>

            <div className="row micro-container">
              <div className="col-xs-12 col-sm-6 micro-item">
                  <img src="http://sideproject.io/content/images/2016/09/storefront-optimized.gif" alt="Storefront loading" />
              </div>

              <div className="col-xs-12 col-sm-6 micro-item">
                <div className="section-title micro-item">Loading Animation</div>
                <p>This animation was used on our native and web apps after users performed a search.
                I converted the animation into a GIF, preserving the FPS quality and added a session cookie
                so users only saw the animation the first time they performed a search. <strong>This way users got
                into the appointment-booking flow faster.</strong> </p>
              </div>
            </div>

            <div className="row micro-container mobile-last">
              <div className="col-xs-12 col-sm-6 micro-item" >
                  <div className="section-title">Collapsible Menus</div>
                  <p>A lot of Whittl's merchants had long menus that were difficult to navigate for users.
                  Organizing thes menu sections made these pages more <strong>digestible</strong> and <strong>easier</strong> to
                  find the service you're looking for.</p>
              </div>

              <div className="col-xs-12 col-sm-6 micro-item">
                <img src="http://sideproject.io/content/images/2016/09/collapsible-menus-optimized.gif" alt="Collapsible menus" />
              </div>
          </div>

          <div className="row micro-container hidden-xs">
            <div className="col-xs-12 col-sm-6 micro-item">
                <img src="http://sideproject.io/content/images/2016/09/flexbox-grid-optimized.gif" alt="Flexbox" />
            </div>

            <div className="col-xs-12 col-sm-6 micro-item">
              <div className="section-title micro-item">Responsive promos</div>
              <p>Using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes" target="_blank">
              Flexbox</a>, did some creative source order shifting at different breakpoints to preserve context for the illustrations and titles.
              These promo boxes were updating dynamically across our web and native apps.</p>
            </div>
          </div>

          <div className="row micro-container hidden-xs last">
            <div className="col-xs-12 col-sm-6 micro-item" >
                <div className="section-title">Dashboard Charts</div>
                <p>This feature allowed our merchants to use our business portal to
                get insights on how many leads and what kind of revenue we were sending them.
                Our team used <a href="http://recharts.org/" target="_blank">Recharts</a>,
                an open-source React charts library to display the data.  </p>
            </div>

            <div className="col-xs-12 col-sm-6 micro-item">
              <img src="http://sideproject.io/content/images/2016/09/chart-optimized.gif" alt="Analytics" />
            </div>
        </div>

        </div>
      </section>
    );
  }
}
