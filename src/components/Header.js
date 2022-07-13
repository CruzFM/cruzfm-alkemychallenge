import {Link} from 'react-router-dom'

//Components
import SearchBar from './SearchBar'

export default function Header(props){
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

                    <li className='nav-item'>
                        <Link to="/favoritos" className='nav-link'>Favoritos</Link>
                    </li>

                    <li className='nav-item'>
                        <h5 className='nav-link'>Favoritos: {props.favorites.length}</h5>
                    </li>

                </ul>

                <SearchBar />
                
            </nav>

        </header>
    )
}