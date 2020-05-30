import React from 'react';
import { render } from '@testing-library/react';

function Welcome(props) {   //forma Funcion
    return <h1>Hola mundo</h1>
  }
  
 // export default Welcome;

class Welcome2 extends React.Component {    //forma clase
    render() {
        return <div>
            <p>Hola mundo </p>
            <p>Bienvenido a mi aplicacion</p>
        </div>

    }
    
  }
  
  export default Welcome2;