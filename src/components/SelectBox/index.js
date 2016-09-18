import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import { styles } from './styles.scss';

export class SelectBox extends Component {

  render() {

    return (
      <div className={`${styles}`}>
        <section>
	    	<h3>SelectBox</h3>
        </section>
      </div>
    );
  }
}
