import signUp_bg from "../../assets/img/signUp-bg.jpg";

export default function Register() {
  return (
    <div className="min-w-screen min-h-screen bg-accent-white-200 flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-4/5 overflow-hidden max-width:1000px">
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-indigo-500 shadow-lg">
            <img src={signUp_bg} className="w-full h-full"></img>
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
              <p className="mt-1">Enter your information to register</p>
            </div>
            <div>
              <div className="flex -mx-3 ">
                <div className="w-1/2 px-3 mb-5">
                  <label form="" className="text-xs font-semibold px-1">
                    First name <span className="text-accent-red-100">*</span>
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="John"
                      required
                    />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <label form="" className="text-xs font-semibold px-1">
                    Last name <span className="text-accent-red-100">*</span>
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Smith"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <label form="" className="text-xs font-semibold px-1">
                    Address <span className="text-accent-red-100">*</span>
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Colombo"
                      required
                    />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <label form="" className="text-xs font-semibold px-1">
                    Contact <span className="text-accent-red-100">*</span>
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      type="number"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="0777123456"
                    />
                  </div>
                </div>
              </div>
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
