import React, { useState } from "react";
import { Fade, Slide } from "react-reveal";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_S58C3SUCPhkEg9HGdFeVK");

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      // TODO - send mail
      // service id: service_9uqvaoh
      // template id: template_9luy6df
      // user id: user_S58C3SUCPhkEg9HGdFeVK
      const serviceId = "service_9uqvaoh";
      const templateId = "template_9luy6df";
      const userId = "user_S58C3SUCPhkEg9HGdFeVK";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  return (
    <section id="contact">
      <Fade bottom duration={1000}>
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            {/* <p className="lead">{message}</p> */}
          </div>
        </div>
      </Fade>

      <div className="row">
        <Slide left duration={1000}>
          <div className="eight columns">
            <div id="contact-form">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button onClick={submit}>Send Message</button>
              {/* <span className={emailSent ? "visible" : null}>
                Thank you for your message, we will be in touch in no time!
              </span> */}
            </div>

            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
            </div>
          </div>
        </Slide>

        <Slide right duration={1000}>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              {/* <h4>Phone</h4>
              <p className="address">
                {name}
                <br />
                {street} <br />
              {city}, {state} {zip}
              <br />
                <span>
                  <a href="tel:8586034860">8586034860</a>
                </span>
              </p> */}
            </div>

            {/* <div className="widget widget_tweets">
            <h4 className="widget-title">Latest Tweets</h4>
            <ul id="twitter">
              <li>
                <span>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida
                  nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                  quis bibendum auctor, nisi elit consequat ipsum
                  <a href="./">http://t.co/CGIrdxIlI3</a>
                </span>
                <b>
                  <a href="./">2 Days Ago</a>
                </b>
              </li>
              <li>
                <span>
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et
                  quasi
                  <a href="./">http://t.co/CGIrdxIlI3</a>
                </span>
                <b>
                  <a href="./">3 Days Ago</a>
                </b>
              </li>
            </ul>
          </div> */}

            {/* Discord Iframe */}
            {/* <h4>Discord</h4> */}
            {/* <p>emericas#8902</p> */}
            <iframe
              title="William's Discord"
              src="https://discord.com/widget?id=255494643121127426&theme=dark"
              width="350"
              height="500"
              allowtransparency="true"
              frameborder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </aside>
        </Slide>
      </div>
    </section>
  );
};

// render() {
//   if (!this.props.data) return null;
//   return (

export default Contact;
