import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom"; 
import Lottie from "lottie-react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import loginAnimation from "../../../assets/login.json";
import "react-toastify/dist/ReactToastify.css";
import { BiError } from "react-icons/bi";
import { GithubAuthProvider, GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import { AuthContext } from "../../AuthProvider/Authprovider";
import usetitle from "../../DaynamicTitle/usetitle";

const Login = () => { 
    usetitle('Login')
    const [error, setError] = useState(""); 
    // useTitle('Login');
    // const location=useLocation(); 
    // const navigate=useNavigate()
    // const from=location.state?.from?.pathname || '/'
    const {Loginprocess,passwordreset,loginWithGoogle,loginWithGithub}=useContext(AuthContext)
    const emailRef=useRef() 
    const googleProvider=new GoogleAuthProvider(); 
    const githubProvider=new GithubAuthProvider();
  
    const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      setError("");
  
      Loginprocess(email, password)
        .then((result) => {
          const loggeduser = result.user;
          console.log(loggeduser);
          toast("Login Successfully !!");
          setError("");
        //   navigate(from,{replace:true})
        })
        .catch((error) => {
          setError(error.message);
        });
    }; 
  
    const handelResetPassword=()=>{
      const email=emailRef.current.value; 
      if(!email)
      {
          alert('Enter your Email')
      } 
      passwordreset(email)
      .then(()=>{
          alert('Check your E-mail')
      })
      .catch(error=>{
          console.log(error);
      })
    } 
  
     const handlesigninGoogle=()=>{
      loginWithGoogle(googleProvider)
      .then((result)=>{ 
          const loggeduser=result.user;
          toast('Login Successfully with Google') 
          setError('')
      }) 
      .catch(error=>{ 
          setError(error.message)
      })
     }
  
    const handleSigninGithub=()=>{ 
      loginWithGithub(githubProvider)
      .then((result)=>{ 
          const loggeduser=result.user;
          toast('Login Successfully with GitHub') 
          setError('')
      }) 
      .catch(error=>{ 
          setError(error.message)
      })
  
    }
  
  
  return (
    <div>
      <div className="hero w-full min-h-screen rounded-lg bg-base-200">
      <div className="hero-content flex-col py-4  lg:flex-row">
        <div className="text-center md:w-1/2 lg:text-left">
          <Lottie animationData={loginAnimation} loop={true} />
        </div>
        
        <div className="card flex-shrink-0 md:w-1/2 md:max-w-sm shadow-2xl bg-base-100">
          
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl font-bold text-center">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input 
              ref={emailRef}
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link onClick={handelResetPassword}><p className="text-blue-600"> Forgot password?</p></Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#050931] border-none">Login</button>
            </div>  
            <p className="text-center text-red-600">{error}</p>
            <p className="text-center">Or Sign-in with</p>
            <div className="flex text-center gap-8 py-4 justify-center">
                <Link onClick={handleSigninGithub}><FaGithub  className="h-6 w-6"></FaGithub></Link> 
                <Link onClick={handlesigninGoogle}><FaGoogle  className="h-6 w-6"></FaGoogle></Link> 
                
            </div>
          </form>
            <p className="text-center pb-6">Are you New?<Link className="text-blue-600 ps-2" to='/registration'>Registration</Link></p>
        </div>
      </div>
    </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
