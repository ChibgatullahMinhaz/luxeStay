import { useState } from "react";
import { toast } from "react-toastify";
import validatePassword from "../../Utilities/passVerification";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { name, email, photoURL, password, confirmPassword } =
      Object.fromEntries(formData.entries());
    setIsLoading(true);

    try {
      if (!name || !email || !password) {
        throw new Error("Please fill in all required fields");
      }

      const passwordError = validatePassword(password);
      if (passwordError) {
        toast.error(passwordError);
        return;
      }

      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }
    } catch (error) {
      alert(error.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    toast.info("Google signup feature coming soon!");
  };

  return (
    <div
      style={{ minHeight: "100vh" }}
      className="flex items-center justify-center bg-gradient-to-br  to-blue-50  p-4"
    >
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <a href="/" className="flex items-center justify-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center">
              <span>📍</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#2563EB]  dark:from-amber-50  bg-clip-text text-transparent">
              LuxeStay
            </span>{" "}
          </a>
        </div>

        <div className=" bg-gradient-to-br  to-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-2">
            Create Account
          </h2>
          <p className="text-center text-sm text-gray-600 dark:text-white mb-6">
            Join LuxeStay for exclusive benefits and personalized service
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name">Full Name *</label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400">👤</span>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full pl-10 p-2 border rounded"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email">Email Address *</label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400">📧</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 p-2 border rounded"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="photoURL">Photo URL (Optional)</label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400">📷</span>
                <input
                  id="photoURL"
                  name="photoURL"
                  type="url"
                  placeholder="Enter photo URL"
                  className="w-full pl-10 p-2 border rounded"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password">Password *</label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400">🔒</span>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="w-full pl-10 pr-10 p-2 border rounded"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Must contain uppercase, lowercase, and be at least 6 characters
              </p>
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirm Password *</label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400">🔒</span>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="w-full pl-10 pr-10 p-2 border rounded"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-gray-400"
                >
                  {showConfirmPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <div className="my-4 text-center text-gray-500 text-sm">
            Or continue with
          </div>

          <button
            type="button"
            onClick={handleGoogleSignup}
            className="w-full border border-gray-300 py-2 rounded hover:bg-gray-100 flex items-center justify-center"
          >
            <span className="mr-2">🔍</span> Continue with Google
          </button>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
