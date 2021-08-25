import './Header.css';

function Header () {    
    return (
        <>
            <header className="header header-grid">
                <div className="header-hero">
                    <img className="header-hero-logo" src="./imgs/logo.png" alt="" />

                    <div className="header-hero-text">
                        <h3 className="header-hero-heading-p">
                            YOUR OWN HOME:
                        </h3>

                        <h1 className="header-hero-heading-s">
                            The ultimate personal freedom
                        </h1>

                        <button className="header-hero-btn-p button-comp">
                            view our properties
                        </button>
                    </div>
                    

                    <div className="header-hero-marketing">
                        <div className="header-hero-separator">
                            <span>Seen on</span> 
                        </div>

                        <div className="header-hero-img-container">
                            <img src="./imgs/logo-bbc.png" alt="" />
                            <img src="./imgs/logo-forbes.png" alt="" />
                            <img src="./imgs/logo-techcrunch.png" alt="" />
                            <img src="./imgs/logo-bi.png" alt="" />
                        </div>
                    </div>
                    
                </div>

                <div className="header-realtors">
                    <div className="header-realtors-wrapper">
                        <h3 className="header-realtors-heading">
                            TOP 3 REALTORS
                        </h3>
                        
                        <div className="header-realtors-container-wrapper">
                            <div className="header-realtors-container">
                                <img src="./imgs/realtor-1.jpeg" alt="" />
                                <div className="header-realtors-container-text">
                                    <p className="header-realtors-container-text-username">
                                        Erik Feinman</p>
                                    <p className="header-realtors-container-text-details">
                                        245 HOUSES SOLD
                                    </p>
                                </div>
                            </div>
                            <div className="header-realtors-container">
                                <img src="./imgs/realtor-2.jpeg" alt="" />
                                <div className="header-realtors-container-text">
                                    <p className="header-realtors-container-text-username">
                                        Kim Brown
                                    </p>
                                    <p className="header-realtors-container-text-details">
                                        212 HOUSES SOLD
                                    </p>
                                </div>   
                            </div>
                            <div className="header-realtors-container">
                                <img src="./imgs/realtor-3.jpeg" alt="" />
                                <div className="header-realtors-container-text">
                                    <p className="header-realtors-container-text-username">
                                        Toby Ramsey
                                    </p>
                                    <p className="header-realtors-container-text-details">
                                        198 HOUSES SOLD
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </header>
        </>
    )
}

export default Header;