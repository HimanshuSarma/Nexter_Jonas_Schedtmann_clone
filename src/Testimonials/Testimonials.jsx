import './Testimonials.css';

function Testimonials () {
    return (
        <>  
            <section className="testimonials">
                <div className="testimonials-imgs">
                    <div className="testimonials-imgs-container">
                        <img className="testimonials-imgs-story-1" 
                        src="./imgs/story-1.jpeg" alt="" />

                        <img className="testimonials-imgs-story-2" 
                        src="./imgs/story-2.jpeg" alt="" />
                    </div>   
                </div>

                <div className="testimonials-text">
                    <h3 className="testimonials-text-header-p">
                        HAPPY CUSTOMERS
                    </h3>
                    <h2 className="testimonials-text-header-s">
                        “The best decision of our lives”
                    </h2>

                    <p className="testimonials-text-main-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!
                    </p>

                    <button className="testimonials-text-btn button-comp">
                        FIND YOUR OWN HOME
                    </button>
                </div>
            </section>
        </>
    )
}

export default Testimonials;