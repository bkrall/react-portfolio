import React, { Component } from 'react';

/* component styles */
import { styles } from './gig.scss';

export class Gig extends Component {
  render() {
    const { companyLogo, companyName, firstGig, position, date, location, description } = this.props;
    let gigClassString = "";
    if (firstGig) {
      gigClassString = "firstGig";
    }
    return (
      <div className={`${styles} ${gigClassString}`}>
          <div className="intro">
            <img className="company-logo" src={companyLogo} width="100" alt="Duo Consulting"/>
            <div className="company">{companyName}</div>
            <div className="position">{position}</div>
            <div className="date">
              <i className="fa fa-calendar-o" aria-hidden="true"></i>
              {date}
            </div>
            <div className="location">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              {location}
            </div>
          </div>

          <p>
            {description}
          </p>

          {this.props.children}


      </div>
    );
  }
}

Gig.propTypes = {
  companyLogo: React.PropTypes.string,
  companyName: React.PropTypes.string,
  firstGig: React.PropTypes.bool,
  position: React.PropTypes.string,
  date: React.PropTypes.string,
  location: React.PropTypes.string,
  description: React.PropTypes.string,
};
