import React,{Component} from 'react';
import {connect } from 'react-redux';

class Header extends Component {
  render(){
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="left brand-logo">Emaily</a>
          <ul id="nav-mobile" className="right">
            <li>
              <a href="#">Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({auth}){
  return {auth:auth}
}
export default connect(mapStateToProps)(Header);
