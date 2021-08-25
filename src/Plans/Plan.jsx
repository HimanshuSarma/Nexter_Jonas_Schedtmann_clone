import './Plan.css';

function Plan ({imgSrc, desc, loc, capacity, area, price, svg, loc_pin_svg,
                capacity_svg, area_svg, price_svg}) {
    return (
        <>
            <div className="plan">
                <div className="plan-img-container">
                    <img className="plan-img" src={imgSrc} alt="" />
                    <h5 className="plan-heading button-comp">
                        {desc}
                    </h5>
                    <svg className="plan-heart-svg">{svg}</svg>
                </div>

                <div className="plan-desc">
                    <div className="plan-desc-features-container">
                        <div className="plan-desc-features-svg">{loc_pin_svg}</div>
                        <p className="plan-desc-features">{loc}</p>
                    </div>
                    <div className="plan-desc-features-container">
                        <div className="plan-desc-features-svg">{capacity_svg}</div>
                        <p className="plan-desc-features">{capacity}</p>
                    </div>
                    <div className="plan-desc-features-container">
                        <div className="plan-desc-features-svg">{area_svg}</div>
                        {area}
                    </div>
                    <div className="plan-desc-features-container">
                        <div className="plan-desc-features-svg">{price_svg}</div>
                        <p className="plan-desc-features">{price}</p>
                    </div>

                    <button className="plan-desc-button button-comp">CONTACT REALTOR</button>
                </div>
            </div>
        </>
    )
}

export default Plan;