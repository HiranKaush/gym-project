import React from "react";
import { BsPlayFill } from "react-icons/bs";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import WorkingCouple from "../../assests/couple.png";
import dumbleICon from "../../assests/dumble.png";
import "../../styles/hero.css";
const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="hero__wrapper">
          {/* hero content */}
          <div className="hero__content">
            <h2
              className="section__title"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Exercise is the key of <span className="highlights">Healthy</span>{" "}
              Lifestyle
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              <br /> Neque sit dicta quas, amet doloribus alias enim accusamus,
              accusantium illo aspernatur unde nobis ullam labore eius
              reprehenderit necessitatibus at. Rem, facilis!
            </p>

            <div
              className="hero__btns"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="2000"
            >
              <button className="register__btn">Get Started</button>
              <button className="watch__btn">
                <span>
                  <BsPlayFill />
                </span>
                Watch Video
              </button>
            </div>
          </div>

          {/* hero img */}
          <div className="hero__img">
            <div className="hero__img-wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box__img">
                      <img src={WorkingCouple} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="heart__rate" data-aos="fade-right"
              data-aos-duration="1500">
                <h5>Heart Rate</h5>
                <span>
                  <BsFillHeartPulseFill />
                </span>
                <h6>2567 BPM</h6>
              </div>

              <div className="gym__location" data-aos="fade-left"
              data-aos-duration="1500">
                <h5>Location</h5>
                <span>
                  <ImLocation2 />
                </span>
                <h5>
                  Find a new <br />
                  Gym near you
                </h5>
              </div>

              <div className="dumble_icon" data-aos="fade-down"
              data-aos-duration="1500">
                <img src={dumbleICon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
