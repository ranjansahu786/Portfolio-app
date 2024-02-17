import React from 'react';

function Navbar() {
    return (
        <div>
            <div>
                {/* {Name} */}
                <h2>Rohit Ranjan</h2>
            </div>
            <div>
                {/* {Menu} */}
                <h5>Home</h5>
                <h5>About</h5>
                <h5>Portfolio</h5>
                <h5>Contacts</h5>
            </div>
            <div>
                {/* {Button} */}
                <button>Hire Me</button>
            </div>
        </div>
    );
}

export default Navbar;