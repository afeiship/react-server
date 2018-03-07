import React, {Component} from 'react';

export default class Home extends Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    <h1>{this.props.title}</h1>
                    <p className="test">Page rendered with {this.props.viewEngine}
                        view engine.</p>
                </body>
            </html>
        );
    }
};