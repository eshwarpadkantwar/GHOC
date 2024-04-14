import React from "react";
import "../CSS/Herosection.css"
import ghocimg from "../Images/ghocimg.png"
function Herosection() {

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
                                    <a href="https://pages.razorpay.com/stores/st_NHKtPYq6e2PrFN"><button className="cardbtn clickbtn " >Click Here</button></a>

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
                                    <a href="https://pages.razorpay.com/stores/st_NHKtPYq6e2PrFN"><button className="cardbtn clickbtn " >Click Here</button></a>
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
                                    <a href="https://pages.razorpay.com/stores/st_NHKtPYq6e2PrFN"><button className="cardbtn clickbtn" >Click Here</button></a>
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
                                <img className="servimg" src="../Images/consultancy.jpg" alt="" />
                                <h5 className="text-center mt-3">Consultancy</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-dark h-100 servbody">
                            <div className="card-body">
                                <img className="servimg" src="../Images/training.jpg" alt="" />
                                <h5 className="text-center mt-3">Training programs</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-dark h-100 servbody">
                            <div className="card-body">
                                <img className="servimg" src="../Images/projectmanagement.jpg" alt="" />
                                <h5 className="text-center mt-3">Project management</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-dark h-100 servbody">
                            <div className="card-body ">
                                <img className="servimg" src="../Images/support.jpg" alt="" />
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
                            <img class="image imgservice2" src="../Images/consult.jpg" alt="Image 1" />
                            <div class="title servicetitle"><h3>Consulting</h3></div>
                            <a href="#"><p className="servicepara">Learn more</p></a>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="image-container imgcontainer">
                            <img class="image imgservice2" src="../Images/train2.jpg" alt="Image 2" />
                            <div class="title servicetitle"><h3>Training</h3></div>
                            <a href="#"><p className="servicepara">Learn more</p></a>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="image-container imgcontainer">
                            <img class="image imgservice2" src="../Images/supp2.jpg" alt="Image 3" />
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
        <h1 class="text-center subtitle">Don’t miss out!</h1>
        <h6 class="text-center subpara">Subscribe to our newsletter for cool tips, articles, and offers.</h6>
        <input class="form-control inputsub" type="email" placeholder="Type your email..."/>
        <button class="btn btn-primary btnsub">Subscribe</button>
    </div>
</div>

            {/* Subscribe End*/}
        </div>
    )
}

export default Herosection