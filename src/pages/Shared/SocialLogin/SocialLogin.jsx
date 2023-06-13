import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathnam || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div>
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="w-10 h-10 mt-4 items-center justify-center inline-flex rounded-full font-bold text-blue-700 text-lg border-2 border-blue-700"
        >
          G
        </button>
        <p className="text-gray-100 pt-2">
          <div className="divider">OR</div> use email your account
        </p>
      </div>
    </div>
  );
};

export default SocialLogin;
