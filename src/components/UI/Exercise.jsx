import React from 'react'
import '../../styles/exercise.css'
import lungs from '../../assests/lunges.png'
import yoga from '../../assests/yoga.png'
import workout from '../../assests/workout.png'
const Exercise = () => {
  return (
    <section>
        <div className="container exercise__container">
            <div className="exercise__top">
                <h2 className="section__title">
                    Benefits of <span className="highlights">
                        Exercise
                    </span>
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br/> Aliquid atque quia minus! Rem, veritatis quibusdam. 
                </p>
            </div>

            {/* exercise list */}
            <div className="exercise__wrapper">
                <div className="exercise__item">
                    <span className="exercise__icon">
                        <img src={lungs} alt='' />
                    </span>
                    <div className="exercise__content">
                        <h4>Healthy Life</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div className="exercise__item">
                    <span className="exercise__icon">
                        <img src={yoga} alt='' />
                    </span>
                    <div className="exercise__content">
                        <h4>Increase Flexibility</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div className="exercise__item">
                    <span className="exercise__icon">
                        <img src={workout} alt='' />
                    </span>
                    <div className="exercise__content">
                        <h4>Reducing Blood Pressure</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Exercise