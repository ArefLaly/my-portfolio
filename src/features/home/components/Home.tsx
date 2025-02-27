import me from "../../../assets/images/me-1.png";
import { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import About from "./About";
const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
// import MyExperience from "./MyExperience";
const professions = ["Laravel", "React", "Vue"];
const Home = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <>
      <main className="min-h-screen  flex items-center md:mt-[-136px]">
        <div className="grid grid-cols-2 gap-4 container mx-auto px-4">
          <div className="col-span-2 md:col-span-1 relative z-50">
            <Reveal
              keyframes={customAnimation}
              // childClassName="opacity-0"
              className="relative"
              cascade
            >
              <h3 className="text-xl  2xl:text-3xl">Hello, I'm</h3>
              <h1 className="text-3xl 2xl:text-7xl">Mohammad Arif</h1>
              <h1 className="text-3xl 2xl:text-7xl text-brand-color">Laly</h1>
              <h6 className="text-xl 2xl:text-3xl my-3">
                I am passionate{" "}
                <strong className="text-brand-color">
                  Full Stack Developer
                </strong>{" "}
                with <strong className="text-brand-color">3 Year's </strong>
                experience!
              </h6>
              <h6 className="text-xl 2xl:text-3xl my-2">
                I Develop Website Using
                <strong className="text-brand-color px-4">
                  <TextTransition springConfig={presets.wobbly} inline>
                    {professions[index % professions.length]}
                  </TextTransition>
                </strong>
              </h6>

              <div className="mt-8">
                <button className="btn text-xs 2xl:text-3xl mx-auto relative p-1 border-brand-color border-4 bg-brand-color after:transition-all text-white rounded-2xl px-8 hover:text-brand-color hover:after:w-full after:bg-white after:absolute after:left-0 after:top-0 after:bottom-0  after:rounded-2xl after:w-0 after:visible after:block overflow-hidden">
                  <span className="z-10 relative "> Contact Me</span>
                </button>
                <div>
                  <a href=""></a>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal
            keyframes={customAnimation}
            duration={2000}
            className="col-span-2 md:col-span-1 relative z-10"
          >
            <div className="relative w-fit mx-auto cursor-pointer">
              <div className="absolute w-full h-full rounded-3xl animate-spin bg-brand-color  z-0 custom-rotate "></div>
              <div className=" max-w-[200px] lg:w-[300px] 2xl:min-w-[400px] rounded-3xl overflow-hidden relative z-20 ">
                <img className="w-full " src={me} alt="" />
              </div>
              <div className="p-3 rounded-2xl bg-[#f55247] absolute -right-7  top-7 z-40 rotate-12">
                {/* <svg
                  className="w-16 h-16 fill-white"
                  viewBox="0 -.11376601 49.74245785 51.31690859"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fil"
                    d="m49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1 -.402.694l-9.209 5.302v10.509c0 .286-.152.55-.4.694l-19.223 11.066c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1 -.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054l-19.219-11.066a.801.801 0 0 1 -.402-.694v-32.916c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216zm-36.84-31.068v31.068l17.618 10.143v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-21.483l-4.645-2.676-3.363-1.934zm8.81-5.994-8.007 4.609 8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764 4.645-2.674v-20.096l-3.363 1.936-4.646 2.675v20.096zm24.667-23.325-8.006 4.609 8.006 4.609 8.005-4.61zm-.801 10.605-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937zm-18.422 20.561 11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833z"
                  />
                </svg> */}
              </div>

              <div className="p-3 rounded-2xl bg-[#ffd600] absolute -left-28  -top-28 z-40 -rotate-12">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-16 h-16"
                >
                  <path fill="#ffd600" d="M6,42V6h36v36H6z" />
                  <path
                    fill="#000001"
                    d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                  />
                </svg> */}
              </div>
              <div className="p-3 rounded-2xl bg-brand-color absolute -left-[85px]  top-[60%] z-40 -rotate-12">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 fill-white"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                    fill="#53C1DE"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                  />
                </svg> */}
              </div>
              <div className="p-3 rounded-2xl bg-white absolute -right-7  -bottom-[50px] z-40 rotate-12">
                {/* <svg
                  className="w-16 h-16"
                  viewBox="0 -17.5 256 256"
                  version="1.1"
                  preserveAspectRatio="xMidYMid"
                >
                  <g>
                    <path
                      d="M204.8,0 L256,0 L128,220.8 L0,0 L50.56,0 L97.92,0 L128,51.2 L157.44,0 L204.8,0 Z"
                      fill="#41B883"
                    ></path>
                    <path
                      d="M0,0 L128,220.8 L256,0 L204.8,0 L128,132.48 L50.56,0 L0,0 Z"
                      fill="#41B883"
                    ></path>
                    <path
                      d="M50.56,0 L128,133.12 L204.8,0 L157.44,0 L128,51.2 L97.92,0 L50.56,0 Z"
                      fill="#35495E"
                    ></path>
                  </g>
                </svg> */}
              </div>
            </div>
          </Reveal>
        </div>
        <div className="absolute left-10 top-1/2 moving-element w-48 h-48  rounded-full bg-brand-color bg-opacity-15"></div>
        <div className="absolute -right-8 top-16 moving-element w-20 h-20 rounded-full bg-yellow-100 "></div>
        <div className="absolute right-16 bottom-16 moving-element animate-delay-500 w-48 h-48 rounded-full bg-orange-100 "></div>
      </main>
      <About />
    </>
  );
};

export default Home;
