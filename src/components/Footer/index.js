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

        <br/>
        <span style={{display: 'inline-block', marginTop: '15px'}}>
          Bonus content: <a href="/micro-interactions">Micro-interactions</a>
        </span>
      </footer>
    );
  }
}

Footer.propTypes = {

};
