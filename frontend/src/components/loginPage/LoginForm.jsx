import { useState } from "react";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import { loginUser } from "../../services/authService";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isShowPassword, setIsShowPassword] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handaleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validation = () => {
    const email = formData?.email?.trim().length > 0;
    const password = formData?.password?.trim().length >= 6;

    if (!email || !password) {
      toast.error("All field are required");
      return;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validation();
    if (!isValid) return;

    const response = await loginUser(formData);

    localStorage.setItem("user", JSON.stringify(response.user));
    setUser(response.user); // AuthProvider state update
    navigate("/setting");

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center mt-5 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
        <svg
          width="16"
          height="11"
          viewBox="0 0 16 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
            fill="#6B7280"
          />
        </svg>
        <input
          type="email"
          name="email"
          placeholder="Email id"
          value={formData?.email}
          onChange={handaleChange}
          className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
          //   required
        />
      </div>

      <div className="flex relative items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
        <svg
          width="13"
          height="17"
          viewBox="0 0 13 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
            fill="#6B7280"
          />
        </svg>
        <input
          name="password"
          value={formData?.password}
          type={isShowPassword ? "text" : "password"}
          onChange={handaleChange}
          placeholder="Password"
          className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
          //   required
        />
        {formData.password.length > 0 && (
          <button
            type="button"
            className="absolute z-10 right-3"
            onClick={() => setIsShowPassword(!isShowPassword)}
          >
            {isShowPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        )}
      </div>

      <button
        type="submit"
        className="mt-8 w-full h-11 rounded-full text-white bg-green-500 hover:opacity-90 transition-opacity"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
