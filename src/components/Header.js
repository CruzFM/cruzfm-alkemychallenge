import {Link} from 'react-router-dom'

//Components
import SearchBar from './SearchBar'

export default function Header(){
    return(
        <header >

            <nav className='navbar navbar-expand-lg navbar-dark bg-dark '>

                <ul className='navbar-nav me-auto'>

                    <li className='nav-item'>
                        <Link to="/" className='nav-link'>Home</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="/listado" className='nav-link'>Listado</Link>
                    </li>

                </ul>

                <SearchBar />
                
            </nav>

        </header>
    )
}