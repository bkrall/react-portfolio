import React, { Component } from 'react';

/* global styles for app */
import './styles/app.scss';

/* application components */
import { Header } from 'components/Header';

export class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  };

  render() {
    return (
      <section>
        {this.props.children}
      </section>
    );
  }
}
