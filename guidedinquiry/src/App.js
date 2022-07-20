import React from 'react';
import BasicInfo from './components/BasicInfoH';

//Very Easy
// class App extends React.Component {
//   render() {
//     return<div>
//     <p>My name is Reggie</p>
//     <p>My number is 8675309</p>
//     <p>Birthday is 09-03-1999</p>
//     </div>
//   }
// }
//------------------------------------------------------


//Easy
// class BasicInfo extends React.Component {
//        constructor(props) {
//            super(props);
//            this.state = {
//                person: {}
//            }
//        }      
//    }
//---------------------------------------------------------


function App() {

 return(
    <div className="App">
         <BasicInfo />
     </div>
       );
 }
export default App;
