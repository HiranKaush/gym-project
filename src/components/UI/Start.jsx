import React from 'react'
import '../../styles/start.css'
import StartImg from '../../assests/start.png'
const Start = () => {
  return (
    <section>
        <div className="container">
            <div className="start__wrapper">
                <div className="start__img">
                    <img src={StartImg} alt="" />
                </div>

                <div className="start__content">
                    <h2 className="section__title">
                        Ready to make a <span className="highlights">
                        change ?
                        </span>
                    </h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis nam atque fuga? Porro optio alias placeat unde dolores doloribus quae aspernatur voluptas quas, velit, blanditiis rem officiis consectetur consequatur nam?
                    </p>

                    <button className="register__btn">Get Started</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Start