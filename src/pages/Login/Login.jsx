import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => {
        signIn(data.email, data.password);
        resolve();
      });

      const user = signIn(data.email, data.password);
      console.log(user);

      Swal.fire({
        icon: 'success',
        title: 'Login successful',
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-gray-500">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left text-white">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              For learn your personal self-defence in unique way, come to join
              us.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#242323] font-semibold">
            <div className="text-center">
              <button className="w-10 h-10 mt-4 items-center justify-center inline-flex rounded-full font-bold text-blue-700 text-lg border-2 border-blue-700">
                G
              </button>
              <p className="text-gray-100 pt-2">or use email your account</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600 py-1 ps-1 font-semibold ">
                    Wrong Email
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-bold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-600 py-1 ps-1 font-semibold ">
                    Wrong Password
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt  text-white pt-4">
                    Forgot password?
                  </a>

                  <Link
                    to="/register"
                    className="label-text-alt  text-white pt-4"
                  >
                    Register
                  </Link>
                </label>
              </div>
              <div className="form-control mt-3">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
