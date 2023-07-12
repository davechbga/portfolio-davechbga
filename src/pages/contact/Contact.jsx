import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

import { BsFillGeoAltFill } from "react-icons/bs";

import { FiSend } from "react-icons/fi";

import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__tittle">Contact me</h3>
          <p className="contact__description">
            You can find me on my social networks with @davechbga or send me a
            message in the form.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelope className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">davechbga@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <BsFillGeoAltFill className="info__icon" />
              <div>
                <span className="info__title">Ubication</span>
                <h4 className="info__desc">Quito, Ecuador</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://www.facebook.com/davechbga"
              className="contact__social-link"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/davechbga"
              className="contact__social-link"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/davechbga"
              className="contact__social-link"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/davechbga"
              className="contact__social-link"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea placeholder="Your Message" className="form__control textarea"></textarea>
            </div>

            <button className="button">
              Send Message <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
