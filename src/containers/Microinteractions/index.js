import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DocumentMeta from 'react-document-meta';

// UI components
import { Header } from 'components/Header';
import { BrowserHeader } from 'components/BrowserHeader';
import { Footer } from 'components/Footer';

/* global styles for app */
import './microInteractions.scss';

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
    const descriptionString = "Here are some examples of key design details on Whittl that I'd like to highlight. When you focus on these small opportunies you can provide a great user experience, it helps deliver a much needed wholeness to the end product.";

    return (
      <section>
        <DocumentMeta {...metaData} />

        <Header />

        <div className="container">

          <div className="col-xs-12">
            <BrowserHeader
             title="Micro-interactions"
             titleClass="micro"
             headingClassString="text-center"
             showPageDescription
             pageDescription={descriptionString}
            />
          </div>

            <div className="row micro-container">
              <div className="col-xs-12 col-sm-6 col-sm-push-6 micro-item ">
                <div className="section-title micro-item">How it Works</div>
                <p>This section was only displayed to new users.
                The idea was to give them a <strong>quick overview of the process</strong> (Search, book, go to your appointment, etc.).
                The "Sign up and get special offers" call-to-action launched a registration modal.</p>
              </div>

              <div className="col-xs-12 col-sm-6 col-sm-pull-6 micro-item">
                <img src="http://sideproject.io/content/images/2016/09/how-it-works-optimized.gif" alt="How it works" />
              </div>
            </div>

            <div className="row micro-container">
              <div className="col-xs-12 col-sm-6 ">
                <div className="section-title micro-item">Float Labels</div>
                <p>This is a subtle interaction that lets users see a form label while filling out a form.
                It allows you to save space, much like a `placeholder` attribute with the <strong>usability</strong> of a regular form label. </p>
              </div>

              <div className="col-xs-12 col-sm-6 micro-item">
                <img src="http://sideproject.io/content/images/2016/09/float-labels-optimized.gif" alt="Float labels" />
              </div>
            </div>

            <div className="row micro-container">

              <div className="col-xs-12 col-sm-6 col-sm-push-6">
                <div className="section-title micro-item">Value Props</div>
                <p>We used <a href="https://www.optimizely.com" target="_blank">Optimizely</a> to test if reiterating our value propositions
                (i.e. Book 24/7, Pay and Tip Online, No Fees) would boost conversion and found a considerable increase.
                This is a CSS3 timing animation to make the tab items more noticeable while scrolling.</p>
              </div>

              <div className="col-xs-12 col-sm-6 col-sm-pull-6 micro-item">
                <img src="http://sideproject.io/content/images/2016/09/value-props-sm-optimized.gif" alt="Value props" />
              </div>

            </div>


            <div className="row micro-container">
              <div className="col-xs-12 col-sm-6">
                <div className="section-title micro-item">Sticky Tabs</div>
                <p>We continously improved our storefront page, improving its navigation, usability and adding new features like Yelp reviews.
                This interaction allows users to keep seeing the tabs as they scroll on the page.</p>
              </div>

              <div className="col-xs-12 col-sm-6 micro-item">
                <img src="http://sideproject.io/content/images/2016/09/sticky-head-optimized.gif" alt="Sticky head tabs" />
              </div>
            </div>

            <div className="row micro-container">

              <div className="col-xs-12 col-sm-6 col-sm-push-6 micro-item">
                <div className="section-title micro-item">Loading Animation</div>
                <p>This animation was used on our native and web apps after users performed a search.
                I converted the animation into a GIF, preserving the FPS quality and added a session cookie
                so users only saw the animation on their first search. <strong>This way users got
                into the appointment-booking flow faster.</strong> </p>
              </div>

              <div className="col-xs-12 col-sm-6 col-sm-pull-6 micro-item">
                  <img src="http://sideproject.io/content/images/2016/09/storefront-optimized.gif" alt="Storefront loading" />
              </div>


            </div>

            <div className="row micro-container mobile-last">
              <div className="col-xs-12 col-sm-6 micro-item" >
                  <div className="section-title">Collapsible Menus</div>
                  <p>A lot of Whittl's merchants had long menus that were difficult to navigate for users.
                  Organizing thes menu sections made these pages more <strong>digestible</strong> and <strong>easier</strong> to
                  find the service they were looking for.</p>
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
              Flexbox</a>, I did some creative source order shifting at different breakpoints to preserve context for the illustrations and titles.
              These promo boxes updated dynamically across our web and native apps.</p>
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

        <Footer />

      </section>
    );
  }
}
