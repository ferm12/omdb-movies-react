import React from 'react';

import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'black'
    };

    return (
        <nav>
            <h1>Nav</h1>
            <ul className="nav-links">
                 <Link style={navStyle} to="/mycomponent" >
                    <li>My Content</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
