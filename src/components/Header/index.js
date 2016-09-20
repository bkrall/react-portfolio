import React, { Component } from 'react';

/* component styles */
import { styles } from './header.scss';

export class Header extends Component {
  render() {

    return (
      <section className={styles}>
        <header className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-xs-6">
                <div className="site-title">
                  <a href="/">@bkrall</a>
                  <a href="https://www.twitter.com/bkrall" target="_blank">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </div>
                {/*<h3 className="status">Current status: <span className="shrugs">¯\_(ツ)_/¯</span> </h3> */}
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
      </section>
    );
  }
}

Header.propTypes = {

};
