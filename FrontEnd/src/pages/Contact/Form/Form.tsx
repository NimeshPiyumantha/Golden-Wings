export default function Form() {
  return (
    // <!-- Container for demo purpose -->
    <div className="container my-24 px-6 mx-auto">
      {/* <!-- Section: Design Block --> */}
      <section className="mb-32 text-gray-800">
        <div className="flex justify-center">
          <div className="text-center lg:max-w-3xl md:max-w-xl">
            <h2 className=" text-2xl font-bold mb-10 px-6 text-accent-green-200 font-Poppins">
              Contact us
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6 shadow-2xl p-3 rounded-lg">
            <form className="p-3">
              <div className="form-group mb-6 shadow-lg">
                <input
                  type="text"
                  className="form-control block
                w-full
                px-3
                py-3
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                  id="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group mb-6 shadow-lg">
                <input
                  type="email"
                  className="form-control block
                w-full
                px-3
                py-3
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                  id="email"
                  placeholder="Email address"
                  required
                />
              </div>
              <div className="form-group mb-6 shadow-lg">
                <textarea
                  className="
                form-control
                block
                w-full
                px-3
                py-7
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none
              "
                  id="massage"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="form-group form-check text-center mb-6">
                <input
                  type="checkbox"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                  id="exampleCheck87"
                />
                <label
                  className="form-check-label inline-block text-gray-800"
                  placeholder="exampleCheck87"
                >
                  Send me a copy of this message
                </label>
              </div>
              <button
                type="submit"
                className="
              w-full
              px-6
              py-2.5
              bg-accent-green-50
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-green-400 hover:shadow-lg
              focus:bg-green-400 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-accent-green-200 active:shadow-lg
              transition
              duration-150
              ease-in-out"
              >
                Send
              </button>
            </form>
          </div>
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12 p-3  mt-5">
            <div className="flex flex-wrap m-5">
              <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 md:w-6/12 lg:px-6">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="p-4  bg-accent-green-50 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        className="w-5 text-white"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                      >
                        <path
                          fill="currentColor"
                          d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">Country</p>
                    <p className="text-gray-500">Sri Lanka</p>
                  </div>
                </div>
              </div>
              <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 md:w-6/12 lg:px-6">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="p-4  bg-accent-green-50 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        className="w-5 text-white"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path
                          fill="currentColor"
                          d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">Address</p>
                    <p className="text-gray-500">235,Colombo rd,Sri Lanka</p>
                  </div>
                </div>
              </div>
              <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 md:w-6/12  px-3 lg:px-6">
                <div className="flex align-start">
                  <div className="shrink-0">
                    <div className="p-4  bg-accent-green-50 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        className="w-5 text-white"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">Contact</p>
                    <p className="text-gray-500">+94 11 234 567</p>
                    <p className="text-gray-500">+94 11 234 568</p>
                  </div>
                </div>
              </div>
              <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 md:w-6/12 px-3 lg:px-6">
                <div className="flex align-start">
                  <div className="shrink-0">
                    <div className="p-4  bg-accent-green-50 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="phone"
                        className="w-6 text-white"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M271.06,144.3l54.27,14.3a8.59,8.59,0,0,1,6.63,8.1c0,4.6-4.09,8.4-9.12,8.4h-35.6a30,30,0,0,1-11.19-2.2c-5.24-2.2-11.28-1.7-15.3,2l-19,17.5a11.68,11.68,0,0,0-2.25,2.66,11.42,11.42,0,0,0,3.88,15.74,83.77,83.77,0,0,0,34.51,11.5V240c0,8.8,7.83,16,17.37,16h17.37c9.55,0,17.38-7.2,17.38-16V222.4c32.93-3.6,57.84-31,53.5-63-3.15-23-22.46-41.3-46.56-47.7L282.68,97.4a8.59,8.59,0,0,1-6.63-8.1c0-4.6,4.09-8.4,9.12-8.4h35.6A30,30,0,0,1,332,83.1c5.23,2.2,11.28,1.7,15.3-2l19-17.5A11.31,11.31,0,0,0,368.47,61a11.43,11.43,0,0,0-3.84-15.78,83.82,83.82,0,0,0-34.52-11.5V16c0-8.8-7.82-16-17.37-16H295.37C285.82,0,278,7.2,278,16V33.6c-32.89,3.6-57.85,31-53.51,63C227.63,119.6,247,137.9,271.06,144.3ZM565.27,328.1c-11.8-10.7-30.2-10-42.6,0L430.27,402a63.64,63.64,0,0,1-40,14H272a16,16,0,0,1,0-32h78.29c15.9,0,30.71-10.9,33.25-26.6a31.2,31.2,0,0,0,.46-5.46A32,32,0,0,0,352,320H192a117.66,117.66,0,0,0-74.1,26.29L71.4,384H16A16,16,0,0,0,0,400v96a16,16,0,0,0,16,16H372.77a64,64,0,0,0,40-14L564,377a32,32,0,0,0,1.28-48.9Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">Tax ID </p>
                    <p className="text-gray-500">273 384</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
