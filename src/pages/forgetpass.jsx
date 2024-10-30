import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <section>
      <div className="container mx-auto lg:w-[100%] lg:p-0 lg:m-0 lg:max-w-full">
        <div className="font-roboto lg:flex gap-[28px] justify-between ">
          {/* IMAGE DIV */}

          <div className="relative hidden lg:block bg-frame_img bg-cover bg-no-repeat bg-center h-[100vh] w-[604px]">
            <div className="bg-[#088395CC] absolute w-full h-full blur-1">
              <div className="flex flex-col min-h-screen justify-center items-center">
                <img
                  src="/Peerwize Logo.png"
                  alt="logo"
                  height="127.08px"
                  width="127.09px"
                />

                <p className="text-[#FBA04B] font-[700] text-[16px">
                  connecting skills, creating futures...
                </p>
              </div>
            </div>
          </div>

          {/* FORM DIV */}

          <div className="px-[10px] py-[40px] mt-[150px] text-center mx-auto">
            <div className=" grid gap-4 lg:gap-8">
              <h1 className="text-[28px] font-[700]">Forgot Password?</h1>
              <p className="text-[16px] font-[400]">
                Kindly enter your email address to reset your password
              </p>
            </div>

            <form action="" className="py-4 pt-8 flex flex-col gap-y-6">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="login_input"
              />

              <button
                type="submit"
                className="bg-[#CECECE] text-[16px] text-[#FFFFFF] px-[12px] py-[11px] h-[46px] rounded-[4px]"
              >
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
