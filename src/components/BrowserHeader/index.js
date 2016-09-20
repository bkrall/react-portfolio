import React, { Component } from 'react';

/* component styles */
import { styles } from './browserHeader.scss';

export class BrowserHeader extends Component {
  render() {
    const { title, showBioPic, showPageDescription, pageDescription, headingClassString, titleClass } = this.props;
    return (
      <section className={styles}>
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

          <div className={`heading-title ${titleClass}`}>
            {showBioPic &&
              <img src="http://sideproject.io/content/images/2016/09/2547195.jpeg" className="bio-pic" width="" alt="BK" />
            }
            <h1 className={headingClassString}>
              {title}
            </h1>
            {showPageDescription &&
              <p className="description text-center">
                {pageDescription}
              </p>
            }

            <div className="button-container">
                <a href="mailto:bkrall@gmail.com" target="_blank">
                <i className="fa fa-envelope-o" aria-hidden="true"></i> &nbsp; Get in touch
                </a>
              &nbsp; &nbsp;
            </div>

          </div>

        </div>
    </section>

    );
  }
}

BrowserHeader.propTypes = {
   title: React.PropTypes.string,
   titleClass: React.PropTypes.string,
   showBioPic: React.PropTypes.bool,
   showPageDescription: React.PropTypes.bool,
   headingClassString: React.PropTypes.string,
   pageDescription: React.PropTypes.string,
};
