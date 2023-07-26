import React from 'react'
import '../../styles/pricing.css'

import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const Pricing = () => {
  return (
    <section id='pricing'>
        <div className="container">
            <div className="pricing__top">
                <h2 className="section__title">
                    Gym <span className="highlights">Pricing</span> Plan
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit.  repellat incidunt nam natus excepturi mollitia velit labore! Veniam asperiores ipsum culpa voluptatibus?
                </p>
            </div>

            {/* pricing wrapper */}
            <div className="pricing__wrapper">
                <div className="pricing__item">
                    <div className="pricing__card-top">
                        <h2 className="section__title">Regular Member </h2>
                        <h2 className="pricing section__title">$60 <span>/Month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><RiCheckboxBlankCircleFill/></span>Unlimited access to gym</li>
                            <li><span><RiCheckboxBlankCircleFill/></span>Customer support</li>
                            <li><span><RiCheckboxBlankCircleFill/></span>Personal trainer</li>
                            <li><span><RiCheckboxBlankCircleFill/></span>Standard options</li>
                            <li><span><RiCheckboxBlankCircleFill/></span>5 classes per week</li>
                        </ul>
                        <button className="register__btn">Join Now</button>
                    </div>

                </div>

                <div className="pricing__item pricing__item-02">
                    <div className="pricing__card-top">
                        <h2 className="section__title">Premium Member </h2>
                        <h2 className="pricing section__title">$75 <span>/Month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><RiCheckboxBlankCircleFill/></span>Unlimited access to gym</li>
                            <li><span><RiCheckboxBlankCircleFill/></span>Customer support</li>
                            <li><span><RiCheckboxBlankCircleFill/></span>Personal trainer</li>
                            <li><span><RiCheckboxBlankCircleFill/></span>Standard options</li>
                            <li><span><RiCheckboxBlankCircleFill/></span>5 classes per week</li>
                        </ul>
                        <button className="register__btn">Join Now</button>
                    </div>

                </div>

                <div className="pricing__item">
                    <div className="pricing__card-top">
                        <h2 className="section__title">Standard Member </h2>
                        <h2 className="pricing section__title">$100 <span>/Month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><RiCheckboxBlankCircleFill/></span>Unlimited access to gym</li>
                            <li><span><RiCheckboxBlankCircleFill/></span>Customer support</li>
                            <li><span><RiCheckboxBlankCircleFill/></span>Personal trainer</li>
                            <li><span><RiCheckboxBlankCircleFill/></span>Standard options</li>
                            <li><span><RiCheckboxBlankCircleFill/></span>5 classes per week</li>
                        </ul>
                        <button className="register__btn">Join Now</button>
                    </div>

                </div>
            </div>

            
        </div>
    </section>
  )
}

export default Pricing