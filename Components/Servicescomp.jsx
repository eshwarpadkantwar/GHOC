import React from "react";
import "../CSS/Services.css"
function Servicescomp() {

    return (
        <div>
            <div className="container">
                <h1 className="text-center servicetitle">Services</h1>
                <p className="text-center servicepara">Explore our comprehensive array of services, designed to empower you and your business, and let us be your trusted partner in achieving success.</p>
            </div>

            <div className="servicesdetails mb-5">

                <div class="container custom-container">

                    <div class="col-md-2 custom-col">
                        <h1>Consultancy</h1>
                        <p>Our consultancy services are tailored to unlock your potential and steer you towards success. Partner with us, and together we’ll turn challenges into opportunities.</p>
                        <hr className="divider" />
                    </div>

                    <div class="col-md-2 custom-col">
                        <h1>Training</h1>
                        <p>We believe in the transformative power of knowledge. Our training programs are meticulously designed to elevate skills, boost confidence, and foster innovation.</p>
                        <hr className="divider" />
                    </div>

                </div>

                <div class="container custom-container2">

                    <div class="col-md-2 custom-col">
                        <h1>Management</h1>
                        <p>We prioritize a holistic approach, ensuring every aspect of your operations is optimized for peak performance. With a focus on strategy and adaptability we transform visions into tangible results.</p>
                        <hr className="divider" />
                    </div>

                    <div class="col-md-2 custom-col">
                        <h1>Support</h1>
                        <p>Behind every challenge lies an opportunity for unparalleled assistance. We understand the intricacies of your needs and are committed to providing prompt assistance every step of the way.</p>
                        <hr className="divider" />
                    </div>

                </div>

            </div>

            {/* Service banner start */}

            <div className="servicebanner img-fluid text-center ">
                <img className="serviceimg" src="../Images/Servicebanner.jpg" alt="" />
                <div className="centered-text">
                    <h1>“Outstanding service and products at a reasonable price.”</h1>
                    <p>~ Happy Customer</p>
                </div>
            </div>

            {/* Service banner end */}

            {/* Case Study Start */}

            <div className="container casestudy">
        <div className="row">
          <div className="col-md-6">
            <div className="casestudy1">
              <img src="../Images/casestudy1.jpg" alt="casestudyimg1" />
              <h6>Turning Vision into Reality</h6>
            </div>
          </div>
          <div className="col-md-6">
            <div className="casestudy2">
              <img src="../Images/casestudy2.jpg" alt="casestudyimg2" />
              <h6>Driving Efficiency and Savings</h6>
            </div>
          </div>
        </div>
      </div>
            {/* Case Study End */}

        </div>

       
    )
}


export default Servicescomp