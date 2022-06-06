import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <header >

            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>

                <ul className='navbar-nav'>

                    <li className='nav-item'>
                        <Link to="/" className='nav-link'>Home</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="/listado" className='nav-link'>Listado</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="/Contacto" className='nav-link'>Contacto</Link>
                    </li>

                </ul>

            </nav>

        </header>
    )
}