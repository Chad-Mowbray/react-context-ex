import {Component} from 'react'
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import UserContext from '../contextComponents/UserContext';


class Intermediate extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <h2>Intermediate</h2>
          {/* <PageOne /> */}
          <PageTwo />
      </div>
     );
  }
}
 
export default Intermediate;

// class Intermediate extends Component {
//   state = {  }
//   render() { 
//     return ( 
//       <div>
//         <h2>Intermediate</h2>
//         <UserContext.Consumer>
//           {
//             (cntxt) => {
//               return <div>
//                 <PageOne userStuff={cntxt}/>
//                 <PageTwo userStuff={cntxt}/>
//               </div>
//             }
//           }
//         </UserContext.Consumer>
//       </div>
//      );
//   }
// }
 
// export default Intermediate;