import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from './axios';
import { TbReceiptYen } from 'react-icons/tb';
import AuthContext from './Context';

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const {setAuth} = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/Login', JSON.stringify({ email:user, password:pwd }), {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response.data);
      setSuccess(true);
      setUser('');
      setPwd('');
      const accesToken = response.data.token
      setAuth({user,pwd,})
    } catch (err) {
      console.log(err.message);
      setErrMsg(err.message);
    }
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  return (
    <>
      {success ? (
        <section>
          <p>Welcome Back!</p>
        </section>
      ) : (
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form onSubmit={handleSubmit}>
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                    <button type="button" className="btn btn-primary btn-floating mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button type="button" className="btn btn-primary btn-floating mx-1">
                      <i className="fab fa-twitter"></i>
                    </button>
                    <button type="button" className="btn btn-primary btn-floating mx-1">
                      <i className="fab fa-linkedin-in"></i>
                    </button>
                  </div>

                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      placeholder="Enter a valid email address"
                      required
                      value={user}
                      onChange={(e) => setUser(e.target.value)}
                      ref={userRef}
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      required
                      value={pwd}
                      onChange={(e) => setPwd(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        id="form2Example3"
                      />
                      <label className="form-check-label" htmlFor="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-body">Forgot password?</a>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                      onClick={handleSubmit}
                    >
                      Login
                    </button>
                    <Link to="/register">
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Don't have an account? <span className="link-danger">Register</span>
                      </p>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
            <div className="text-white mb-3 mb-md-0" style={{bottom:"100px"}}>
              Copyright © 2020. All rights reserved.
            </div>
            <div>
              <a href="#!" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#!" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#!" className="text-white me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="#!" className="text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;
