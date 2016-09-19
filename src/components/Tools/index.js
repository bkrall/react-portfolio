import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';

/* component styles */
import { styles } from './tools.scss';

export class Tools extends Component {
  render() {

    return (

      <section className={styles}>
        <div className="tools-and-techniques">

        <div className="sidebar-title">Tools, etc.</div>

          <span className="tool-wrapper">
            <img src="http://sideproject.io/content/images/2016/09/reactjs.jpg" data-tip data-for="react" alt="React" />
            <ReactTooltip effect="solid" id="react">
              <span>React</span>
            </ReactTooltip>
          </span>
          <span className="tool-wrapper">
            <img className="node" src="http://sideproject.io/content/images/2016/09/node.jpg" data-tip data-for="node" alt="Node" />
            <ReactTooltip effect="solid" id="node">
              <span>Node</span>
            </ReactTooltip>
          </span>
          <span className="tool-wrapper">
            <img src="http://sideproject.io/content/images/2016/09/npm.jpg" data-tip data-for="npm" alt="NPM" />
            <ReactTooltip effect="solid" id="npm">
              <span>NPM</span>
            </ReactTooltip>
          </span>
          <span className="tool-wrapper">
            <img src="http://sideproject.io/content/images/2016/09/webpack.jpg" data-tip data-for="webpack" alt="Webpack" />
            <ReactTooltip effect="solid" id="webpack">
              <span>Webpack</span>
            </ReactTooltip>
          </span>
          <span className="tool-wrapper">
            <img src="http://sideproject.io/content/images/2016/09/grunt.jpg" data-tip data-for="grunt" alt="Grunt" />
            <ReactTooltip effect="solid" id="grunt">
              <span>Grunt</span>
            </ReactTooltip>
          </span>
          <span className="tool-wrapper">
            <img className="sass" src="http://sideproject.io/content/images/2016/09/sass.jpg" data-tip data-for="sass" alt="Sass" />
            <ReactTooltip effect="solid" id="sass">
              <span>Sass</span>
            </ReactTooltip>
          </span>
          <span className="tool-wrapper">
            <img src="http://sideproject.io/content/images/2016/09/github.jpg" data-tip data-for="github" alt="Git" />
            <ReactTooltip effect="solid" id="github">
              <span>Git</span>
            </ReactTooltip>
          </span>
          <span className="tool-wrapper">
            <img src="http://sideproject.io/content/images/2016/09/pug.jpg" data-tip data-for="pug" alt="Pug/Jade" />
            <ReactTooltip effect="solid" id="pug">
              <span>Pug / Jade templating</span>
            </ReactTooltip>
          </span>
          <span className="tool-wrapper">
            <img src="http://sideproject.io/content/images/2016/09/chrome.jpg" data-tip data-for="chrome" alt="Chrome Dev Tools" />
            <ReactTooltip effect="solid" id="chrome">
              <span>Chrome Dev Tools</span>
            </ReactTooltip>
          </span>
          <span className="tool-wrapper">
            <img src="http://sideproject.io/content/images/2016/09/postman.jpg" data-tip data-for="postman" alt="Postman" />
            <ReactTooltip effect="solid" id="postman">
              <span>Postman</span>
            </ReactTooltip>
          </span>
          <span className="tool-wrapper">
            <img src="http://sideproject.io/content/images/2016/09/foundation.jpg" data-tip data-for="foundation" alt="Foundation" />
            <ReactTooltip effect="solid" id="foundation">
              <span>Foundation</span>
            </ReactTooltip>
          </span>
          <span className="tool-wrapper">
            <img src="http://sideproject.io/content/images/2016/09/bootstrapcss.jpg" data-tip data-for="bootstrap" alt="Bootstrap" />
            <ReactTooltip effect="solid" id="bootstrap">
              <span>Bootstrap</span>
            </ReactTooltip>
          </span>
          <span className="tool-wrapper">
            <img src="http://sideproject.io/content/images/2016/09/drupal.jpg" data-tip data-for="drupal" alt="Drupal" />
            <ReactTooltip effect="solid" id="drupal">
              <span>Drupal</span>
            </ReactTooltip>
          </span>
          <span className="tool-wrapper">
            <img src="http://sideproject.io/content/images/2016/09/jquery.jpg" data-tip data-for="jquery" alt="jQuery" />
            <ReactTooltip effect="solid" id="jquery">
              <span>jQuery</span>
            </ReactTooltip>
          </span>
          <span className="tool-wrapper">
            <img src="http://sideproject.io/content/images/2016/09/atom.jpg" data-tip data-for="atom" alt="Atom" />
            <ReactTooltip effect="solid" id="atom">
              <span>Atom</span>
            </ReactTooltip>
          </span>
          <span className="tool-wrapper">
            <img src="http://sideproject.io/content/images/2016/09/sequelpro.jpg" data-tip data-for="sequel" alt="Sequel Pro" />
            <ReactTooltip effect="solid" id="sequel">
              <span>Sequel Pro</span>
            </ReactTooltip>
          </span>

        </div>
      </section>
    );
  }
}

Tools.propTypes = {

};
