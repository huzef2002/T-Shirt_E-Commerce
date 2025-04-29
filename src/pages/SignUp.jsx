import React, { useState } from 'react';
import { CgEyeAlt } from "react-icons/cg";
import { VscEyeClosed } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";
import { useFirebase } from '../Context/Firebase';
import { useNavigate } from "react-router-dom";

function SignUp() {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await firebase.registerWithEmailAndPassword(email, password);
    if (result?.user) {
      await result.user.updateProfile({ displayName: username });
    }

    setLoading(false);
    navigate("/signIn");
  };

  const loginWithGoogle = async () => {
    const result = await firebase.signInWithGoogle();
    if (result.success) {
      navigate("/signIn");
    }
  };

  return (
    <div className="min-h-screen dark:bg-black px-4 grid grid-cols-1 md:grid-cols-2">
      <div className="p-20 px-28 dark:bg-gray-900 shadow-lg justify-center items-center">
        <form onSubmit={handleSubmit}>
          <h2 className="text-5xl font-bold text-center text-white dark:text-white mb-6">
            Register
          </h2>

          <div className="space-y-5">
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

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-orange-700 hover:bg-black hover:text-orange-700 border-orange-700 border text-white font-medium transition duration-200 disabled:opacity-50"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>

            <button
              type="button"
              onClick={loginWithGoogle}
              className="w-full py-2 flex items-center justify-center gap-4 bg-orange-700 hover:bg-black hover:text-orange-700 border-orange-700 border text-white font-medium transition duration-200"
            >
              <span><FcGoogle /></span>Sign Up With Google
            </button>

            <div className="text-center text-white mt-4">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/signIn")}
                className="text-orange-500 hover:underline cursor-pointer"
              >
                Log In
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;