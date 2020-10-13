import React from 'react';
import './Page.css';
import {BrowserRouter as Router} from "react-router-dom";

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
