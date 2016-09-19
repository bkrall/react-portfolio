import React, { Component } from 'react';

/* component styles */
import { styles } from './footer.scss';

export class AppBar extends Component {
  render() {
    const { appBarText } = this.props;
    return (
      <footer className="text-center">
        <strong>&copy; 2016 Brian Krall.</strong> &nbsp;
        Built with React, Sass, and Git. 💻 &nbsp;
        <strong>&nbsp; <a href="https://github.com/bkrall/portfolio" target="_blank">See the source. 🔓 &nbsp;</a></strong>
        <br/> <a href="#" style={{display: 'inline-block', marginTop: '15px'}}>The 😈  is in the deaaaatails.</a>
      </footer>
    );
  }
}

AppBar.propTypes = {
  appBarText: React.PropTypes.string,
};
