import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="main-footer">
        <strong>
          Copyright © 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.
        </strong>
        All rights reserved.
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 3.0.1
        </div>
      </footer>
    );
  }
}

export default Footer;
