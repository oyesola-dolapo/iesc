import { useContext } from "react";
import { AuthContext } from "../../Admin/AdminAuth/Auth";

function Login() {
  const { handleEmail, handlePassword, handleSignIn, loginErr, loggedIn } =
    useContext(AuthContext);
  


  return (
    <div className="pt-[4rem] w-[100vw] flex flex-col-reverse lg:flex-row">
      <div className="w-full lg:w-1/2 flex flex-col items-center my-auto px-[1rem]">
        <h1 className="mt-[1rem] lg:my-[0] hidden lg:flex uppercase font-medium text-[1.5rem]">
          Welcome back, <span className="text-webColor">Admin</span>
        </h1>
        <h1 className="text-[1.5rem] lg:text-[2rem] uppercase font-bold">
          Login to your account
        </h1>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            handleSignIn();
          }}
          className="my-[1rem] lg:my-[2rem] w-full lg:w-max">
          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleEmail}
              required
              placeholder="Enter Password"
              className="lg:w-[30rem] h-[3rem] border-2 border-solid border-webColor rounded-lg px-4"
            />
          </div>
          <div className="flex flex-col mt-[1rem]">
            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handlePassword}
              required
              placeholder="Enter Password"
              className="lg:w-[30rem] h-[3rem] border-2 border-solid border-webColor rounded-lg px-4"
            />
            {loginErr && (
              <p className="text-[#d32f2f] tracking-wider text-[12px] mt-[.4rem] mb-[1rem] shake">
                Invalid email or password
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full h-[3rem] bg-webColor rounded-lg mt-[2rem] font-medium tracking-wide">
            LOGIN
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 bg-black relative">
        <img
          src="/images/personal/IMG_5149.webp"
          alt=""
          className="opacity-[.6]"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tracking-wider text-white lg:hidden uppercase w-max font-medium text-[1.5rem]">
          Welcome back, <span className="text-webColor">Admin</span>
        </h1>
      </div>
    </div>
  );
}


export default Login;
