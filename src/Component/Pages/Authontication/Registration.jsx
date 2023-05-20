import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import HelloRegAni from "../../../../src/assets/87845-hello.json";
import { Link } from "react-router-dom";
import { FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/Authprovider';
import { GithubAuthProvider, GoogleAuthProvider, updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from "react-toastify";
import usetitle from '../../DaynamicTitle/usetitle';



const Registration = () => { 
    usetitle('Registration')
    const googleProvider=new GoogleAuthProvider; 
    const githubProvider=new GithubAuthProvider;
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState("");
    const { registration,loginWithGoogle,loginWithGithub } = useContext(AuthContext); 
    // useTitle('Registration')
  
    const handelregistration = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      const name = form.name.value;
      const photo = form.photo.value; 
  
      if(password.length<6)
      {
          alert('Error :Your Password must be 6+ character')
          return;
      }
  
      registration(email, password)
        .then((result) => {
          const loggeduser = result.user;
          toast("Successfully Registered !!");
          event.target.reset();
          setError("");
          updateprofiledata(loggeduser, name, photo); 
          console.log(loggeduser);
        })
        .catch((error) => {
          setError(error.message);
        });
    };
  
    const updateprofiledata = (user, name, photo) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        .then()
        .catch()
    };

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
    
  
    const acceptTrams = (event) => {
      setAccepted(event.target.checked);
    };

    return (
        <div className="hero w-full min-h-screen rounded-lg bg-base-200">
      <div className="hero-content flex-col py-4  lg:flex-row">
        <div className="text-center md:w-1/2 lg:text-left">
          <Lottie animationData={HelloRegAni} loop={true} />
        </div>

        <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelregistration} className="card-body">
            <h1 className="text-3xl font-bold text-center">SignUp</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Photo Url</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="photo url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered" 
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                name="password"
                type="text"
                placeholder="password"
                className="input input-bordered" 
                required
              />
              
            </div>
            <div class="mb-3 form-check">
          <input
            onClick={acceptTrams}
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          />
          <label class="form-check-label" for="exampleCheck1">
            <span className='ps-2'>  Accept </span>
            <Link to="/trams" className="text-decoration-none text-blue-500">
              Trams & Condition
            </Link>
          </label>
        </div>
            <div className="form-control mt-2">
              <button 
               disabled={!accepted}
               type="submit"
              className="btn bg-[#050931] border-none">Registration</button>
            </div>
          <p className="text-center pb-2 text-red-600">
            {error}
          </p>
            <p className="text-center">Or Sign-in with</p>
            <div className="flex text-center gap-8 py-2 justify-center">
                <Link onClick={handleSigninGithub}>
                  <FaGithub className="h-6 w-6"></FaGithub>
                </Link>
                <Link onClick={handlesigninGoogle}>
                  <FaGoogle className="h-6 w-6"></FaGoogle>
                </Link>

            </div>
          </form>
          <p className="text-center pb-2">
            Already have an account ?
            <Link className="text-blue-600 ps-2" to="/login">
              LogIn
            </Link>
          </p>
        </div>
      </div> 
      <ToastContainer></ToastContainer>
    </div>
    );
};

export default Registration;