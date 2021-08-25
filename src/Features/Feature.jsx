import './Feature.css';

function Feature ({heading, text, svgs}) {
    return (
        <>
            <div className="feature">
                <div className="svg">{svgs}</div>

                <div className="feature-container">
                    <h2 className="feature-heading">{heading}</h2>
                    <p className="feature-text">{text}</p>
                </div>
            </div>
        </>
    )
}

export default Feature;