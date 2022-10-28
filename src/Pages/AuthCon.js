import React from "react";

function AuthCon() {
  return (
    <>
      <section className="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark section ">
        <div className="container-fluid">
          <div className="row  justify-content-center align-items-center d-flex-row text-center h-100">
            <div className="col-10 col-md-4 col-lg-3 h-50 ">
              <div className="card shadow">
                <div className="card-body mx-auto">
                  <h4 className="card-title mt-3 text-center ">
                    Authenication Code
                  </h4>
                  <p className="text-center">
                    We just sent an email with OTP to your abc@foodcart.com{" "}
                  </p>

                  <form action="./home">
                    <div className="form-group input-group ">
                      <input
                        className="form-control m-2"
                        placeholder="Enter your code"
                        type="msg"
                      />
                    </div>
                    <span>
                      <p className="newcode">Request New code!</p>
                    </span>
                    <div className="form-group">
                      {" "}
                      <button
                        type="submit"
                        className="btn btn-success m-2 btn-block "
                      >
                        Finish
                      </button>
                      <button
                        type="submit"
                        className="btn btn-danger m-2 btn-block "
                      >
                        Cancel
                      </button>
                    </div>
                    <p className="text-center">
                      Memories are like mulligatawny soup in a cheap restaurant.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AuthCon;
