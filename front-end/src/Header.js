import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from './AuthContext';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isLoggedIn, userData, handleSignOut } = useContext(AuthContext);

    const menuOpenHandler = e => {
        e.preventDefault();
        setMenuOpen(!menuOpen);
    };

    const handleLogOut = e => {
        e.preventDefault();
        handleSignOut();
    };


    


    return (
        <>
            <div>
            <header className={menuOpen ? "navigation active open" : "navigation"}>
    <div className="container">
        <a href="" className="logo" aria-label="back to home">
            <h2>Storage NZ</h2>
        </a>
        <nav className="nav" role="navigation">
            <button className="toggle" aria-label="mobile menu toggle" onClick={menuOpenHandler}>
                <div className="box" aria-hidden="true">
                    <span className="line line1" aria-hidden="true"></span>
                    <span className="line line2" aria-hidden="true"></span>
                    <span className="line line3" aria-hidden="true"></span>
                </div>
            </button>
            <div className="ul-wrapper">
                <ul id="expanded" className="ul" aria-expanded="false">
    <Link to='/'>
        <li className="li">
            <a href="/" className="li-link active">
                Home
            </a>
        </li>
    </Link>
    <Link to='/bookunit'>
                    <li className="li">
                        <a href="" className="li-link">
                            Rent a Storage Unit
                        </a>
                    </li>
        </Link>
                    {!isLoggedIn &&
                    <>
                        <Link to='/login'>
                            <li className="li">
                                <a href="" className="li-link login">
                                    Log In
                                </a>
                            </li>
                    </Link>
                    <li className="li">
                        <a href="" className="li-link signup">
                            Sign Up
                        </a>
                    </li>
                    </>
}
{isLoggedIn && 
    <li className="li">
        <a href="" className="li-link login" onClick={handleLogOut}>
            Sign Out
        </a>
        <li className="li">
            <a href='/' className="li-link">

            </a>
        </li>
    </li>}

                </ul>
            </div>
        </nav>

    </div>
</header>
            </div>
        
        </>
    )
};

export default Header;