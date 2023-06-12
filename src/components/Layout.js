import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Layout() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="Home"><font size={5}>Holiday Trip</font></a>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Layout;
