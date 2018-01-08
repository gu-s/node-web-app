import React,{Component} from 'react';
import {connect } from 'react-redux';

class Header extends Component {
  handleClick(e){
    e.preventDefault();
    window.open('/auth/google',
                'newwindow',
                'width=400,height=400');
  }

  renderContent()
  {
    switch (this.props.auth) {
      case null:
      case false:
        return (
          <ul id="nav-mobile" className="right">
            <a href="/auth/google"
             target="_blank"
             onClick={this.handleClick}
             >
              Login With Google
            </a>
          </ul>
        );
      default:
        return (
          <ul id="nav-mobile" className="right">
          <li>
            Welcome {this.props.auth.displayName}
          </li>
          <li>
            <a href="/api/logout">Logout</a>
          </li>
          </ul>
        );
    }

  }

  render(){
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">Emaily</a>
                {this.renderContent()}
        </div>
      </nav>
    );
  }
}
function mapStateToProps({auth}){
  return {auth:auth}
}
export default connect(mapStateToProps)(Header);
