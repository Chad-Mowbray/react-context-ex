import {Component} from 'react'

class PageOne extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <h2>PageOne</h2>
        <p>isLoggedIn: {this.props.userStuff.loggedIn.toString()}</p>

      </div>
     );
  }
}
 
export default PageOne;