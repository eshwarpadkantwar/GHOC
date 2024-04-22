import React, { useState } from "react";
import "../CSS/Herosection.css"
import ghocimg from "../Images/ghocimg.png"
function Herosection() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission
        console.log(formData);
    };

    return (
        <div>

            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <h1 className="display-4 fw-bold">Haunts of Caffeine</h1>
                            <p>In the mysterious shadows of caffeine’s embrace, each sip conjures a spell, awakening the restless spirits within, haunting the senses with the magic of alertness.</p>
                            <a href="https://pages.razorpay.com/stores/st_NHKtPYq6e2PrFN" target="_blank"><button className="btn btn-primary">Recharge ur TAG</button></a>
                        </div>
                        <div className="col-sm-7">
                            <img className="img-fluid" src={ghocimg} alt="ghoc image" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Options Start */}

            <div className="container services mt-5">
                <h1 className="text-center servicemaintitle">Top-up Options</h1>
                <p className="text-center mb-5 servicemainpara">Take a break, recharge, and tackle the world anew.</p>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card text-dark  h-100" >
                            <div className="card-body cardprice" >
                                <h5 className="card-title ">Casual</h5>
                                <h2>₹100</h2>
                                <p className="card-text">Good for trying out, or occasional</p>
                                <div className="list">
                                    <li>Works with major design software</li>
                                    <li>One project per month</li>
                                    <li>Volunteer forum support</li>

                                </div>
                                <div className="card-btn-container mt-5">
                                    <a href="https://pages.razorpay.com/stores/st_NHKtPYq6e2PrFN" target="_blank"><button className="cardbtn clickbtn " >Click Here</button></a>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-dark  h-100 servicecard1" >
                            <div className="card-body bg-dark" >
                                <h5 className="card-title text-light">Love</h5>
                                <h2 className="text-light">₹200</h2>
                                <p className="card-text text-light">Great for tea lovers</p>
                                <div className="list">
                                    <li className="text-light">Works with major design software</li>
                                    <li className="text-light">One project per month</li>
                                    <li className="text-light">Volunteer forum support</li>

                                </div>
                                <div className="card-btn-container mt-5" >
                                    <a href="https://pages.razorpay.com/stores/st_NHKtPYq6e2PrFN" target="_blank"><button className="cardbtn clickbtn " >Click Here</button></a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col ">
                        <div className="card text-dark   " >
                            <div className="card-body cardprice"  >
                                <h5 className="card-title ">Addict</h5>
                                <h2>₹500</h2>
                                <p className="card-text">Good for trying out, or occasional</p>
                                <div className="list">
                                    <li>Works with major design software</li>
                                    <li>One project per month</li>
                                    <li>Volunteer forum support</li>

                                </div>
                                <div className="card-btn-container mt-5" >
                                    <a href="https://pages.razorpay.com/stores/st_NHKtPYq6e2PrFN" target="_blank"><button className="cardbtn clickbtn" >Click Here</button></a>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
            </div>

            {/* Options End */}


            {/*Our Services Start */}

            <div className="container ourservices">
                <h1 className="text-center">Our Services</h1>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card text-dark h-100 servbody">
                            <div className="card-body">
                                <img className="servimg img-fluid" src="../Images/consultancy.jpg" alt="" />
                                <h5 className="text-center mt-3">Consultancy</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-dark h-100 servbody">
                            <div className="card-body">
                                <img className="servimg img-fluid" src="../Images/training.jpg" alt="" />
                                <h5 className="text-center mt-3">Training programs</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-dark h-100 servbody">
                            <div className="card-body">
                                <img className="servimg img-fluid" src="../Images/projectmanagement.jpg" alt="" />
                                <h5 className="text-center mt-3">Project management</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-dark h-100 servbody">
                            <div className="card-body ">
                                <img className="servimg img-fluid" src="../Images/support.jpg" alt="" />
                                <h5 className="text-center mt-3">Support</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Our Services End */}

            {/* Services Part2 Start */}
            <div className="service2">
            <div class="container ">
                <div class="row justify-content-center">
                    <div class="col-md-4">
                        <div class="image-container imgcontainer">
                            <img class="image imgservice2 img-fluid" src="../Images/consult.jpg" alt="Image 1" />
                            <div class="title servicetitle"><h3>Consulting</h3></div>
                            <a href="#"><p className="servicepara">Learn more</p></a>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="image-container imgcontainer">
                            <img class="image imgservice2 img-fluid" src="../Images/train2.jpg" alt="Image 2" />
                            <div class="title servicetitle"><h3>Training</h3></div>
                            <a href="#"><p className="servicepara">Learn more</p></a>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="image-container imgcontainer">
                            <img class="image imgservice2 img-fluid" src="../Images/supp2.jpg" alt="Image 3" />
                            <div class="title servicetitle"><h3>Support</h3></div>
                            <a href="#"><p className="servicepara">Learn more</p></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            {/* Services Part2 End */}

            {/* Subscribe Start*/}

            <div class="subscribe">
    <div class="container sub">
        <h1 class=" subtitle">Don’t miss out!</h1>
        <h6 class=" subpara">Subscribe to our newsletter for cool tips, articles, and offers.</h6>
        <input class="form-control inputsub" type="email" placeholder="Type your email..."/>
        <button class="btn btn-primary btnsub">Subscribe</button>
    </div>
</div>

            {/* Subscribe End*/}

            {/* Contact form start */}

            <section className="contact-form">
            <h2>Get In Touch With Us</h2>
            <p>hauntsofcaffeine@gmail.com</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="phone">Phone:</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="message">Message:</label>
                <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <input type="submit" value="Send Message" />
            </form>
        </section>

        {/* Contact form end */}

        {/* Why Choose US Start */}

        <div className="container ourservices">
                <h1 className="text-center">Why Choose Us?</h1>
            </div>

            <div className="container text-center">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col-md-4">
                        <div className="card text-dark h-100 servbody">
                            <div className="card-body">
                                <img className="servimg img-fluid" src="../Images/consultancy.jpg" alt="" />
                                <h5 className="text-center mt-3">Exceptional Quality</h5>
                                <p className="text-left">Our coffee undergoes a meticulous selection process, ensuring only the finest beans make the cut. Each batch is then freshly roasted to perfection, guaranteeing you the highest quality and the freshest taste in every cup. Our commitment to excellence ensures that every sip is a delightful experience, delivering the perfect balance of flavor, aroma, and satisfaction.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-dark h-100 servbody">
                            <div className="card-body">
                                <img className="servimg img-fluid" src="../Images/training.jpg" alt="" />
                                <h5 className="text-center mt-3">Unique Atmosphere</h5>
                                <p className="text-left">Step into our cafe and immerse yourself in an enchanting ambiance, where each sip takes you on a journey into the realms of flavor and aroma. Our cozy and inviting space is designed to awaken your senses and create memorable moments with every cup. Let the soothing ambiance and rich aroma of freshly brewed coffee transport you to a place of relaxation and indulgence.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-dark h-100 servbody">
                            <div className="card-body">
                                <img className="servimg img-fluid" src="../Images/projectmanagement.jpg" alt="" />
                                <h5 className="text-center mt-3">Community Engagement</h5>
                                <p className="text-left">We are dedicated to fostering a strong sense of community, providing a space where caffeine enthusiasts can come together, share their love for coffee, and forge lasting connections. Our cafe serves as a hub for meaningful interactions, where friendships are cultivated over steaming cups of meticulously crafted coffee. Through events, workshops, and gatherings!.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        

        {/* Why Choose US End */}

       
        </div>
    )
}

export default Herosection