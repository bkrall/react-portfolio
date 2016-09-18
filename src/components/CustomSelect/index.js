import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import { styles } from './styles.scss';

export class CustomSelect extends Component {

  render() {

    return (
      <div className={`${styles}`}>
        <section>
	    	{ this.props.items.map(function(item) {
	                return <li>{item}</li>
	            })
	        }
        </section>
      </div>
    );
  }
}

CustomSelect.propTypes = {
	items: React.PropTypes.array.isRequired
};
