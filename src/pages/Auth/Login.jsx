import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, MapPin } from "lucide-react";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  const { login, loginWithGoogle } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData.entries());

    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    try {
      setIsLoading(true);
      const res = await login(email, password);
      if (res) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged In!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
        e.target.reset();
      }
    } catch (err) {
      toast.error(err.message || "Login failed. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    await loginWithGoogle();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Login Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>Login - LuxeStay Hotel</title>
        <meta
          name="description"
          content="Login to your LuxeStay Hotel account"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br  to-blue-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white dark:text-amber-50" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#2563EB]  dark:from-amber-50  bg-clip-text text-transparent">
                LuxeStay
              </span>
            </Link>
          </div>

          <div className="rounded-lg border   bg-gradient-to-br  to-blue-50  text-black shadow-xl">
            <div className="text-center p-6 flex flex-col space-y-1.5">
              <h3 className="text-2xl font-bold">Welcome Back</h3>
              <p className="text-sm text-muted-foreground">
                Sign in to your account to access exclusive features
              </p>
            </div>

            <div className="p-6 pt-0 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3B82F6] focus:border-[#3B82F6] sm:text-sm"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute cursor-pointer right-3 top-3 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[var(--primary)] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[var(--primary)]  text-white font-medium py-2 px-4 rounded transition-all duration-200 cursor-pointer"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="w-full cursor-pointer border border-gray-300 py-2 px-4 rounded text-sm flex items-center justify-center hover:bg-gray-50"
                onClick={handleGoogleLogin}
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </button>

              <div className="text-center text-sm">
                <span className="text-gray-600">Don't have an account? </span>
                <Link
                  to="/register"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Sign up here
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Login;
