import React from "react";

const User=(props)=>{
    //console.log(props.data.name)
    const {data}= props
    return(
        <div>
            <h1>User Component</h1>
         <h4>{data.name}</h4>
         <h4>{data.age}</h4>
        </div>
    );
}

export default User;

// import User from './User';
// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//     {/* <h1>App Component</h1> */}
//     <User data={{name:'Neel Mukherjee', age:'23'}} />
//     </div>
//   );
// }

// export default App;