import React, { useState } from "react";

function Contactcomp(){


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

    return(
        <div>
            <section className="contact-form mt-5 mb-5 bg-danger">
            <h2>Contact Us</h2>
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

        </div>
    )
}


export default Contactcomp