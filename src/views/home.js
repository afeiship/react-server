import React, {Component} from 'react';

export default class Home extends Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <script src="//cdn.bootcss.com/zepto/1.0rc1/zepto.min.js"></script>
        </head>
        <body>
          <h1>{this.props.title}</h1>
          <button id="btn">Test evetn!</button>
          <p className="test">Page rendered with {this.props.viewEngine}
            view engine.</p>
        </body>
      </html>
    );
  }
};
