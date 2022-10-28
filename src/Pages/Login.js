import React, { useState } from "react";
import Auth from "./Auth";
import "./login.css";

function Login() {
  const [show, setShow] = useState(false);
  const authHandler = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <>
      {!show && (
        <section className="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark section">
          <div className="container-fluid">
            <div className="row  justify-content-center align-items-center d-flex-row text-center h-100">
              <div className="col-10 col-md-4 col-lg-3 h-50 ">
                <div className="card shadow">
                  <div className="card-body mx-auto">
                    <h4 className="card-title mt-3 text-center ">
                      Welcome to Food Cart
                    </h4>
                    <p className="text-center">
                      Login with your account to buy the delicious food
                    </p>

                    <form onSubmit={authHandler}>
                      <div className="form-group input-group ">
                        <input
                          name=""
                          className="form-control m-2"
                          placeholder="Email address"
                          type="email"
                        />
                      </div>
                      <div className="form-group input-group">
                        <input
                          className="form-control m-2"
                          placeholder="Create password"
                          type="password"
                        />
                      </div>

                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary m-2 btn-block"
                        >
                          Log In
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
      {show && <Auth />}
    </>
  );
}

export default Login;
