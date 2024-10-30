import { useState } from "react";
import { BiShow, BiSolidHide } from "react-icons/bi";
import { Link } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);

  return (
    <section>
      <div className="container mx-auto">
        {/* <div className="flex gap-x-10 justify-evenly items-center md:min-h-[100vh]"> */}

        <div className="">
          {/* <div className="login hidden md:flex flex-col bg-cover bg-no-repeat bg-center h-[80vh] w-[70vh] xl:w-[85vh] relative">
            rea list
          </div>
          <div className="flex flex-col gap-y-2">
            <h1 className="font-Archivo text-xl">log in</h1>
            <p className="font-semibold text-lightBlack">
              Welcome; we Give You Buildings Which Are Home, Lifestyle And
              Aspirations.
            </p> */}

          {/* FORM DIV */}

          <div className="p-[40px] grid gap-6 text-center">
            <h1 className="text-[28px] font-[700] font-roboto">
              Login to <span className="text-[#37BBCA]">Peerwize</span>
            </h1>

            <div className="text-[16px flex items-center gap-[8px] justify-center">
              <span className="signup_span" />
              <p>
                Don’t have an account?{" "}
                <Link to="/" className="text-[#37BBCA]">
                  Sign up
                </Link>
              </p>
              <span className="signup_span" />
            </div>

            <form action="" className="py-4 flex flex-col gap-y-6">
              <input
                type="text"
                id="email-no"
                name="email-number"
                placeholder="Email/Phone number"
                className="login_input"
              />

              <div className="relative">
                <input
                  type={!show ? "password" : "text"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="login_input"
                />

                <div className="absolute top-[10px] text-[#848484] cursor-pointer right-3 text-3xl">
                  <BiShow
                    className={show ? "hidden" : "block"}
                    onClick={() => setShow(true)}
                  />
                  <BiSolidHide
                    className={!show ? "hidden" : "block"}
                    onClick={() => setShow(false)}
                  />
                </div>

                <p className="text-[#37BBCA] text-left">Forgot password?</p>
              </div>

              <button
                type="submit"
                className="bg-[#37BBCA] text-[#FFFFFF] px-[12px] py-[11px] h-[46px] rounded-[4px]"
              >
                Login
              </button>
            </form>

            <p className="font-roboto font-400">
              By continuing, you agree to our{" "}
              <Link to="/" className="text-[#37BBCA]">
                Terms of service
              </Link>{" "}
              and{" "}
              <Link to="/" className="text-[#37BBCA]">
                Privacy policy
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>

      {/*  */}
    </section>
  );
};

export default Login;
