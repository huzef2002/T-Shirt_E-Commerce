import { CgEyeAlt } from "react-icons/cg";
import { VscEyeClosed } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { useFirebase } from "../Context/Firebase";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function SignIn() {

  const firebase = useFirebase();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log("is Working");
    const result = await firebase.logInWithEmailAndPassword(email, password)
    if (result.success) {
      alert("LoggedIn is Successfull")
    }
    else {
      alert(result.message)
    }
  }

  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate("/")
    }
  }, [firebase, navigate]);

  const loginWithGoogle = async () => {
    const result = await firebase.signInWithGoogle()
    if (result.success) {
      alert("Registor is Successfull");
      navigate("/");
    }
    else {
      alert(result.message)
    }

  }

  return (
    <div className=" min-h-screen dark:bg-black px-4 grid grid-cols-1 md:grid-cols-2">
      <div className="p-20 px-28 dark:bg-gray-900 shadow-lg justify-center items-center">
        <form onSubmit={handelSubmit}>
          <h2 className="text-5xl font-bold text-center text-white dark:text-white mb-6">
            Login
          </h2>

          <div className="space-y-5">
            {/* Email */}
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-white/15 border-orange-700 text-white focus:ring-1 focus:ring-orange-700 focus:outline-none"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
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
            <button type="submit" className="w-full py-2  bg-orange-700 hover:bg-black hover:text-orange-700 border-orange-700 border text-white   font-medium transition duration-200">
              Login
            </button>

            <button type='button' onClick={loginWithGoogle} className="w-full py-2 flex items-center justify-center gap-2  bg-orange-700 hover:bg-black hover:text-orange-700 border-orange-700 border text-white   font-medium transition duration-200">
              <span className=''><FcGoogle size={25} /></span>Login With Google
            </button>

            {/* Create Account Button */}
            <button type="button" className="w-full py-2  bg-orange-700 hover:bg-black hover:text-orange-700 border-orange-700 border text-white   font-medium transition duration-200">
              Create Account
            </button>

          </div>
        </form>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <img className="object-cover h-screen w-full" src="https://images.pexels.com/photos/1690081/pexels-photo-1690081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      </div>
    </div>
  );
}
