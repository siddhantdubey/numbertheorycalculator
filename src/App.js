import React from 'react';
import './App.css';
import { SVCalculator } from './SingleVarCalculator';
import { phi } from './logic/phi';
import { sigma } from './logic/sigma';
import { numdivisors } from './logic/numdivisors';
//functions to include: sigma(n), d(n), phi(n), modulo, modular inverses, finding the order of something

export default class App extends React.Component {  
  render (){
    return (
      <div className="App">
        <h1>Number Theory Calculator</h1>
        <p>Common functions you might need to use!</p>
        <div class='row'>
          <div class='column'>
            <SVCalculator name='Phi Calculator' clickHandler={phi}/>
          </div>
          <div class='column'>
            <SVCalculator name='Sigma Calculator' clickHandler={sigma}/>
          </div>
          <div class='column'>
            <SVCalculator name='D Calculator' clickHandler={numdivisors}/>
          </div>
        </div>
        <div class='row'>
          <div class='column'>

          </div>
          <div class='column'>
        
          </div>
        </div>
      </div>
    );
  }
}

// export default App;
