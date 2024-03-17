import { Link } from 'react-router-dom';


import './header.css';

const Header = () => {
    return (
        <div className='header' data-testid='header-test-id'>
            <nav className='navbar'>
                <div className='title'>Rentify</div>

                <div className='links'>
                    <div>
                        <Link to='/' className='link'>
                            List Beers
                        </Link>
                    </div>

                    <div>
                        <Link to='/addBeer' className='link'>
                            Add Beer
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export { Header };