import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import AuthCon from "./AuthCon";

function Auth() {
  const [show, setShow] = useState(false);
  const authHandler = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <>
      {!show && (
        <section className="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark section ">
          <div className="container-fluid">
            <div className="row  justify-content-center align-items-center d-flex-row text-center h-100">
              <div className="col-10 col-md-4 col-lg-3 h-50 ">
                <div className="card shadow">
                  <div className="card-body mx-auto">
                    <h4 className="card-title mt-3 text-center ">
                      Authenticate your account
                    </h4>
                    <p className="text-center fs-6">
                      To verify your identity, we need to send a authentication
                      code to the email address or phone number linked to your
                      account
                    </p>

                    <form onSubmit={authHandler}>
                      <div className="form-group input-group ">
                        <InputGroup className="mb-3">
                          <InputGroup.Checkbox
                            required="required"
                            aria-label="Checkbox for following text input"
                          />
                          <Form.Control
                            aria-label="Text input with checkbox"
                            value="Send Email to abc@foodcart.com"
                          />
                        </InputGroup>
                      </div>
                      <div className="form-group input-group ">
                        <InputGroup className="mb-3">
                          <InputGroup.Checkbox
                            required="required"
                            aria-label="Checkbox for following text input"
                          />
                          <Form.Control
                            aria-label="Text input with checkbox"
                            value="Send Text to 00000000"
                          />
                        </InputGroup>
                      </div>

                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary m-2 btn-block required"
                        >
                          Send Authenication code
                        </button>
                      </div>
                      <p className="text-center">
                        Memories are like mulligatawny soup in a cheap
                        restaurant.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {show && <AuthCon />}
    </>
  );
}

export default Auth;
