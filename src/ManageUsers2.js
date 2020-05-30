import React from 'react';
import axios from 'axios';

class ManageUsers extends React.Component{

    saveUser(e) {
        var user = {
            names: document.getElementById("userName").value,
            lastNames: document.getElementById("userLastName").value,
            document: document.getElementById("userDocument").value,
            costeCenter: document.getElementById("userCenterCoste").value,
            
        };

        axios.post ("http://localhost:8000/api/users/", user)
        .then((response) => {
            console.log(response);
            }, (error) => {
                console.log(error)
            });        
        
    }

    render() {
        return <div>
            <h2>ADMINISTRAR USUARIOS</h2>
            <form>
                <label>Nombres</label>.
                <input id = "userName"></input>

                <label>Apellidos</label>
                <input id = "userLastName"></input>

                <label>Cedula</label>
                <input id = "userDocument"></input>

                <label>CentroCoste</label>
                <input id = "userCenterCoste"></input>

                <button onClick = {this.saveUser} >Guardar</button>
            </form>
        </div>

    }
}

export default ManageUsers