import React, { Component } from 'react';

/* component styles */
import { styles } from './footer.scss';

export class Footer extends Component {
  render() {
    return (
      <footer className={styles}>
        <strong>&copy; 2016 Brian Krall.</strong> &nbsp;
        Built with React, Sass, and Git. 💻 &nbsp;
        <strong>&nbsp; <a href="https://github.com/bkrall/react-portfolio" target="_blank">See the code.</a>&nbsp;🔓</strong>
        {/* Use for micro-interactions page */}
        <br/> <a href="/#/micro-interactions" style={{display: 'inline-block', marginTop: '15px'}}>The 😈&nbsp; is in the details.</a>
      </footer>
    );
  }
}

Footer.propTypes = {

};
