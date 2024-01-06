import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Appcontext } from "../MyContext";

const SignUp = () => {
  const {
    fname,
    handleFname,
    lname,
    handleLname,
    email,
    handleEmail,
    show,
    handleShow,
    show2,
    handleShow2,
    kla,
    kla2,
  } = useContext(Appcontext);
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="bg-primary-subtle flexme mt-4 text-primary">
              <h2 onClick={handleShow} className={kla}>
                Register
              </h2>
              <h2 onClick={handleShow2} className={kla2}>
                Login
              </h2>
            </div>

            <form>
              {show && (
                <div className="col-12" id="register">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Ibrahim"
                      value={fname}
                      onChange={handleFname}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Khawthar"
                      value={lname}
                      onChange={handleLname}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                      value={email}
                      onChange={handleEmail}
                    />
                  </div>
                  <button type="button" className="btn btn-primary" id="btn">
                    Submit
                  </button>
                </div>
              )}
            </form>
            {show2 && (
              <div id="login">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>

                  <button type="submit" id="btn" className="btn btn-primary">
                    Submit
                  </button>
                </form>
                <Link className="nav-link" to="/ForgotPassword">
                  Forgot Password
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
