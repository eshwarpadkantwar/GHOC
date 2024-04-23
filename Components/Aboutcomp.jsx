import React from "react";
import "../CSS/About.css"

function Aboutcomp() {

    return (
        <div>
            <div className="container about-container">
            <h1 className="mb-5 mt-5 text-center">About Us</h1>
                <div className="row mb-5">
                    <div className="col-md-6 order-md-1">
                        
                        <h2>How it all started?</h2>
                        <p>From the spark of an idea to the realization of a dream, the journey of Acme began with a single moment of inspiration and a fierce determination to succeed.</p>
                    </div>
                    <div className="col-md-6 order-md-2">
                        <img className="aboutimg img-fluid" src="../Images/aboutimg.jpg" alt="" />
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-md-6 order-md-1">
                        
                        <h2>Our Story</h2>
                        <p>Every great journey begins with a story. Ours is no different. Established in 2016, we embarked on a mission to provide high-quality services at reasonable prices. What started as a humble beginning has since grown into a thriving enterprise, thanks to the hard work, dedication, and unwavering support of our team and community.</p>
                    </div>
                    <div className="col-md-6 order-md-2">
                        <img className="aboutimg img-fluid" src="../Images/casestudy1.jpg" alt="" />
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-md-6 order-md-1">
                        
                        <h2>Our Approach</h2>
                        <p>Our vision is to stand as the foremost provider of strategic solutions, consistently delivering exceptional and personalized services. Whether you’re starting a new venture, or poised for expansion, our commitment is to collaborate and propel you towards your goals.</p>
                    </div>
                    <div className="col-md-6 order-md-2">
                        <img className="aboutimg img-fluid" src="../Images/casestudy2.jpg" alt="" />
                    </div>
                </div>


            </div>

            

            
        </div>
    )
}

export default Aboutcomp