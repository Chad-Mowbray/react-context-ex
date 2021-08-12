import {Component, useContext} from 'react'
import UserContext from '../contextComponents/UserContext';

const PageTwo = () => {

  const userStuff = useContext(UserContext)

  return ( 
    <div>
      <h2 onClick={userStuff.logInOut}>PageTwo</h2>
      <p>isLoggedIn: {userStuff.loggedIn.toString()}</p>
    </div>
   );
}
 
export default PageTwo;

// class PageTwo extends Component {
//   state = {  }
//   render() { 
//     return ( 
      // <div>
      //   <h2 onClick={this.props.userStuff.logInOut}>PageTwo</h2>
      //   <p>isLoggedIn: {this.props.userStuff.loggedIn.toString()}</p>
      // </div>
//      );
//   }
// }
 
// export default PageTwo;