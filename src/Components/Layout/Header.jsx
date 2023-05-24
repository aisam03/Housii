import React from 'react'

const Header = () => {
    return (
        <div className='Home'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container h-contain pb-3">
                    <div className='logo'>
                    <img src="Assets/logo.png" alt="" />
                    <span>Housii</span>
                    </div>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Explore</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <button type="button" className="btn btn-primary">Book Now</button>
                </div>
            </nav>
        </div>
    )
}

export default Header
