import React from 'react';
import './Page.css';

export default class Page extends React.Component {
  render() {
    return (
      <div className="PageWrapper-wrapper">
        <div className="PageWrapper-inner">
          {this.props.children}
        </div>
      </div>
    );
  }
}
