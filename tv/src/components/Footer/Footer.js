import React, {Component} from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="row" id="footer">
        <div className="medium-12 columns">
          <p>(C) razorbee <a href="www.razorbee.com">razorbee.com</a></p>
        </div>
      </div>
    );
  }
}

export default Footer;