import React, { useState } from "react";
import Header from "../components/Header";

function Contact() {
  const [inputData, setInputData] = useState({
    firstName: null,
    lastName: null,
    email: null,
    message: null,
  });
  const [err, setErr] = useState({
    firstName: false,
    lastName: false,
    email: false,
    message: false,
  });
  const [haveErr, setHaveErr] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();
    let copyErr = { ...err };
    let isErr = false;
    if (!inputData.firstName) {
      copyErr.firstName = true;
      isErr = true;
    } else {
      copyErr.firstName = false;
    }

    if (!inputData.lastName) {
      copyErr.lastName = true;
      isErr = true;
    } else {
      copyErr.lastName = false;
    }

    if (!inputData.email) {
      copyErr.email = true;
      isErr = true;
    } else {
      copyErr.email = false;
    }

    if (!inputData.message) {
      copyErr.message = true;
      isErr = true;
    } else {
      copyErr.message = false;
    }
    if (isErr) {
      setHaveErr(true);
      setErr(copyErr);
    } else {
      setIsSent(true);
    }
  };

  const onInputHandler = (e) => {
    let copyInputData = { ...inputData };
    copyInputData[e.target.name] = e.target.value;
    setInputData(copyInputData);
  };

  return (
    <>
      <Header title="Contact" />
      <section className="container py-5">
        <div className="row" style={{ minHeight: "50vh" }}>
          <div className="col-md-6 mb-md-0 mb-3">
            {!isSent ? (
              <form onSubmit={sendMessage}>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="First name"
                      name="firstName"
                      onInput={onInputHandler}
                      style={
                        err.firstName ? { boxShadow: "0 0 1px 1px red" } : null
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Last name"
                      name="lastName"
                      onInput={onInputHandler}
                      style={
                        err.lastName ? { boxShadow: "0 0 1px 1px red" } : null
                      }
                    />
                  </div>
                </div>
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="E-mail"
                  name="email"
                  onInput={onInputHandler}
                  style={err.email ? { boxShadow: "0 0 1px 1px red" } : null}
                />
                <textarea
                  className="form-control mb-3"
                  placeholder="Message"
                  name="message"
                  cols="30"
                  rows="10"
                  onInput={onInputHandler}
                  style={err.message ? { boxShadow: "0 0 1px 1px red" } : null}
                ></textarea>
                <button className="form-control btn btn-primary">
                  Send message
                </button>
                {haveErr && (
                  <div class="alert alert-danger mt-2" role="alert">
                    All field are required
                  </div>
                )}
              </form>
            ) : (
              <h3>Message is sent</h3>
            )}
          </div>
          <div className="col-md-6">
            <iframe
              title="e-shop-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181139.85102770833!2d20.422596999999996!3d44.81524535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645cf2177ee4!2z0JHQtdC-0LPRgNCw0LQsINCh0YDQsdC40ZjQsA!5e0!3m2!1ssr!2s!4v1659606988173!5m2!1ssr!2s"
              width="100%"
              height="100%"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
