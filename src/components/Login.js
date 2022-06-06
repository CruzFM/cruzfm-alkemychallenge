import React from "react"
import axios from 'axios'
import sweetAlert from '@sweetalert/with-react'
import { useNavigate, Navigate } from 'react-router-dom'


//RECORDAR => sweetAlert es una función.

export default function Login(){

    const navigate = useNavigate()

    const submitHandler = (e)  => {

        //Para evitar la acción que por defecto se produce cuando se aprieta submit en un formulario.
        //La cual es enviar la información introducida a algún lado.
        e.preventDefault();

        //con value, agarramos el valor del campo y lo guardamos en la variable email.
        const email = e.target.email.value;

        //con value, agarramos el valor del campo PW y lo guardamos en la variable password.
        const password = e.target.password.value;

        //Esto es el regex para email. Nos sirve para buscar cadenas de texto.

        // eslint-disable-next-line
        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        //condicional para que no coloque campos vacíos
        if (email === '' || password === ''){
            sweetAlert(<h2>Los campos no pueden estar vacíos.</h2>)
            return;
        } 

        //condicional para que 1) email no esté vacío y 2) el test de regex no dé falso
        if (email !== '' && !regexEmail.test(email) ){
            sweetAlert(<h2>Debe escribir una dirección de correo válida</h2>)
            return;
        } 

        //condicional para que las credenciales coincidan con las que tenemos en el back
        //Los datos son un dummie para ejemplificar
        if (email !== 'challenge@alkemy.org' || password !== 'react'){
            sweetAlert(<h2>Credenciales inválidas</h2>)
            return;
        }

        console.log('Si llegamos acá, estamos listos para continuar')

        /*Utilizamos axios para realizar una promesa (es una función asíncrona)
        Una vez que se realice el post, se realizará el then
        Que en este caso consiste en un callback. Guardará el token en LocalStorage */
        axios
            .post('http://challenge-react.alkemy.org', { email, password} )
            .then (res => {
                sweetAlert(<h2>Ingresó correctamente</h2>)

                //Guardamos token en una variable.
                const tokenUsuario = res.data.tokenUsuario

                //Guardamos token en el localstorage.
                localStorage.setItem('token', tokenUsuario)

                navigate('/listado')
            })

    }

    let token = localStorage.getItem('token')

    return(
        <>
            { token && <Navigate to="/listado" />}
            <div className="container-fluid login" >
                <div className="d-flex align-items-center justify-content-center  align-items-center ">

                    <form onSubmit={submitHandler}>

                        <h2>Formulario de login</h2>

                        <div className="mb-3">
                            <label className="form-label">
                                <span>Email</span><br />
                                <input type="email" name="email" className="form-control"></input>
                            </label>
                        </div>


                        {/* <br />
                        <br/> */}

                        <div className="mb-3">
                            <label className="form-label"> 
                                <span>Password</span><br />
                                <input type="password" name="password" className="form-control"></input>
                            </label>
                        </div>

                        {/* <br /> */}
                        <button type="submit" className="btn btn-dark">Ingresar</button>
                        
                    </form>

                </div>

            </div>

        </>
    )
}