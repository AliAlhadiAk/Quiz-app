import React from 'react';
import { useRef,forwardRef,useState,useEffect } from 'react';
import axios from './axios.jsx';

const  Register = () => {
    const userRef = useRef();
    const errRef = useRef();


    const [user,setUser] = useState("");
    const [email,setEmail] =useState("");
    const [pwd,setPwd] = useState("");

    const [validName,setValidName] = useState(false);
    const [userFocus,setUserFocus] = useState(false);  


    const [errMsg,setErrMsg] = useState(''); 
    const [succes,setSucces] = useState(false);
    
    
    useEffect(()=>{
        userRef.current.focus()
    },[])
    useEffect(()=>{
        setErrMsg('')
    },[pwd,user,email])

    const handleSubmit = async (e)=>{
      e.preventDefault();
      try{
        const response = await axios.post('/Sign-Up',
          JSON.stringify({user:user,email:email,pwd:pwd}),
          {
            headers:{
              'Content-Type':'application/json'
            },
            withCredentials:true
          }
          
          
        );
        setUser('')
        setPwd(''
        )
        setSucces(true)
       
        console.log(response.data);
       
        setSucces(true)
      }catch(err){
       setSucces(false);
       console.log(err.message);
       setErrMsg(err.message)
      }


    }
       return(
        <>
        {succes ? <p>Succeded</p>
          :(
        
        
          
        
        
        <section className="vh-100" style={{background: "#eee;"}}>
            <p ref={errRef} className={errMsg?"errmsg":"offscreen" } style={{background:"red", width:"50%", margin:"auto",borderRadius:"50px"}}>{errMsg} yahala bl5aaaaal</p>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center flex-wrap  h-100" >
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{borderRadius: "25px"}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
      
                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
      
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" className="form-control" 
                            required
                            value={user}
                            onChange={(e)=> setUser(e.target.value)}
                            ref={userRef}
                            placeholder='Enter Your Name'/>
                            <label className="form-label" for="form3Example1c">Your Name</label>
                          </div>
                        </div>
      
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" className="form-control" 
                                       required
                                       value={email}
                                       onChange={(e)=> setEmail(e.target.value)
                                
                                       }
                                       placeholder='Email'
                                       />
                            <label className="form-label" for="form3Example3c">Your Email</label>
                          </div>
                        </div>
      
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" className="form-control" 
                            placeholder='Password'/>
                            <label className="form-label" for="form3Example4c">Password</label>
                          </div>
                        </div>
      
                    
      
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                          <label className="form-check-label" for="form2Example3">
                            I agree all statements in <a href="#!">Terms of service</a>
                          </label>
                        </div>
      
                        <div className="d-flex  justify-content-center mx-4 mb-3 mb-lg-4">
                          <button onClick={handleSubmit}  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Register</button>
                        </div>
      
                      </form>
      
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
      
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="Sample image"/>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       )}
       </>
  )
}
export default Register
