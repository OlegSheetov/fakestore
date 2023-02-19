import React from "react";
import "./RegistrationScreen.css";
export default function RegistrationScreen() {
    return (
        <section className="RegistrationScreen">
            <div className="RegistrationWindow">
                <p>Registration</p>
                <div className="Registration">
                    <input type="text" placeholder="email" />
                    <input type="text" placeholder="username" />
                    <div className="Name">
                        <p>Name</p>
                        <input type="text" placeholder="first name" />
                        <input type="text" placeholder="last name" />
                    </div>
                    <div className="Address">
                        <p>Address</p>
                        <input type="text" placeholder="city" />
                        <input type="text" placeholder="street" />
                        <input type="text" placeholder="number" />
                        <input type="text" placeholder="zipcode" />
                        <input type="text" placeholder="geolocation" />
                    </div>
                    <div className="Phone">
                        <p>Phone</p>
                        <input type="phone" placeholder="phone" />
                    </div>
                    <input
                        type="button"
                        value="Registration"
                        className="RegistrationWindowbutton"
                    />
                </div>
            </div>
        </section>
    );
}
