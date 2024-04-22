import React from "react";
import "../CSS/Store.css"


function Storecomp() {

    return (
        <div>

            <h1 className="mt-5 mb-5 text-center">Store</h1>
            <p className="text-center">Inspired collections that complement your space and style.</p>
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="product-card">
                        <img src="../Images/ribbeddinnerplate.jpg" alt="" />
                        <h4>Ribbed dinner plate</h4>
                        <div>
                            <h6 className="text-center">$20.00 USD</h6>
                            {/* <button>+</button> */}
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="product-card">
                        <img src="../Images/cermaicvaseset.jpg" alt="" />
                        <h4>Ceramic vase set</h4>
                        <div>
                            <h6 className="text-center">$45.00 USD</h6>
                            {/* <button>+</button> */}
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="product-card">
                        <img src="../Images/roundglassvase.jpg" alt="" />
                        <h4>Round glass vase</h4>
                        <div>
                            <h6 className="text-center">$18.00 USD</h6>
                            {/* <button>+</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="product-card">
                        <img src="../Images/houseplant.jpg" alt="" />
                        <h4>House plant</h4>
                        <div>
                            <h6 className="text-center">$18.00 USD</h6>
                            {/* <button>+</button> */}
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="product-card">
                        <img src="../Images/candleholder.jpg" alt="" />
                        <h4>Parrot statue</h4>
                        <div>
                            <h6 className="text-center">$39.00 USD</h6>
                            {/* <button>+</button> */}
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4">
                    <div className="product-card">
                        <img src="../Images/parrotstatue.jpg" alt="" />
                        <h4>Taper candle holder</h4>
                        <div>
                            <h6 className="text-center">$22.00 USD</h6>
                            {/* <button>+</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Storecomp