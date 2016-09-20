import React, { Component } from 'react';

export class FeaturedWork extends Component {
  render() {
    const { featuredWorkTitle, featuredCaseLink, featuredCase } = this.props;
    return (
      <div className="row">
        <div className="col-xs-6">
          <div className="featured-work">{featuredWorkTitle}</div>
          <a className="featured-case" href={featuredCaseLink} target="_blank">
            {featuredCase}
          </a>
        </div>
        <div className="col-xs-6">
          {this.props.children}
        </div>
      </div>
    );
  }
}

FeaturedWork.propTypes = {
  featuredWorkTitle: React.PropTypes.string,
  featuredCaseLink: React.PropTypes.string,
  featuredCase: React.PropTypes.string,
};
