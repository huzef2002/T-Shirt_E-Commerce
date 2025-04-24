import React, { useEffect, useState } from 'react';
import { CgEyeAlt } from "react-icons/cg";
import { VscEyeClosed } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";
import { useFirebase } from '../Context/Firebase';
import { useNavigate } from "react-router-dom";


function SignUp() {

  const firebase = useFirebase();
  const navigate = useNavigate();

  // console.log(firebase);

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log("Handel submit is working");
    const result = await firebase.registerWithEmailAndPassword(email, password)
    console.log("acount created", result.user);
    if(result.success){
      alert("Registor is Successfull");
      navigate("/signin");
    }
      else{
        alert(result.message)        
      }
  }

  const loginWithGoogle = async () =>{
    const  result = await firebase.signInWithGoogle()
    if(result.success){
      alert("Registor is Successfull");
      navigate("/signin");
    }
      else{
        alert(result.message)        
      }
  
  }

  return (
    <div className=" min-h-screen dark:bg-black px-4 grid grid-cols-1 md:grid-cols-2">
      <div  className="p-20 px-28 dark:bg-gray-900 shadow-lg justify-center items-center">
        <form onSubmit={handelSubmit}>
          <h2 className="text-5xl font-bold text-center text-white dark:text-white mb-6">
            SignUp
          </h2>

          <div className="space-y-5">
            {/* Username */}
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 bg-white/15 border-orange-700 text-white focus:ring-1 focus:ring-orange-700 focus:outline-none"
            />

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-white/15 border-orange-700 text-white focus:ring-1 focus:ring-orange-700 focus:outline-none"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 bg-white/15 border-orange-700 text-white focus:ring-1 focus:ring-orange-700 focus:outline-none"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white"
              >
                {showPassword ? <VscEyeClosed size={20} /> : <CgEyeAlt size={20} />}
              </button>
            </div>

            {/* Login Button */}
            <button type='submit' className="w-full py-2  bg-orange-700 hover:bg-black hover:text-orange-700 border-orange-700 border text-white   font-medium transition duration-200">
              Sign Up
            </button>

            {/* Create Account Button */}
            <button type='button' onClick={loginWithGoogle} className="w-full py-2 flex items-center justify-center gap-4  bg-orange-700 hover:bg-black hover:text-orange-700 border-orange-700 border text-white   font-medium transition duration-200">
              <span className=''><FcGoogle /></span>Sign Up With Google
            </button>
          </div>
        </form>
      </div>

      {/* <div className="relative hidden md:block">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <img className="object-cover h-screen w-full" src="https://i.pinimg.com/736x/e8/3c/7e/e83c7e9d00d0e0893d8b6f65f003aa2d.jpg" />
      </div> */}
    </div>
  );
}

export default SignUp;

