import { FaMinus } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="flex items-center justify-center text-white bg-royal-blue"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col gap-20 py-20 mx-5 max-w-fit lg:mx-28 lg:gap-10 2xl:mx-72">
        <div className="flex flex-col gap-20 xl:flex-row">
          <div className="flex flex-col gap-20 sm:flex-row">
            <div className="flex flex-col gap-10 mx-auto">
              <p className="text-[23px] font-extrabold">Scan.Detect.Remove.</p>
              <ul className="flex gap-10">
                <li>
                  <a href="#">
                    <img src="twitter.png" alt="Twitter logo" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="facebook.png" alt="Facebook logo" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="youtube.png" alt="YouTube logo" />
                  </a>
                </li>
              </ul>
              <div className="flex gap-5 text-[11px] underline">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
              <div className="flex flex-col gap-5 text-[11px]">
                <p>
                  Copyright © 2022 Certo Software Limited | Registered in
                  England & Wales No. 10072356
                </p>
                <p>
                  Designed & developed by{" "}
                  <a href="#" className="underline">
                    Bigger Picture
                  </a>
                </p>
              </div>
            </div>

            <div className="mx-auto ">
              <p className="mb-5 border-b-white text-[35px] font-extrabold xl:mb-14 xl:border-b xl:pb-8">
                Miro.
              </p>
              <ul
                className="flex min-w-60 flex-wrap gap-5  text-[19px] font-extrabold text-[#FFC247]
          sm:min-w-max sm:flex-col sm:pr-5"
              >
                <li>
                  <a href="#">
                    <FaMinus className="hidden mr-4 sm:inline" /> Iphone
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaMinus className="hidden mr-4 sm:inline" /> Android
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaMinus className="hidden mr-4 sm:inline" /> Help
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaMinus className="hidden mr-4 sm:inline" /> About
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaMinus className="hidden mr-4 sm:inline" /> Insights
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto max-h-fit min-w-fit max-w-[35rem] rounded-3xl bg-[#FFC247] text-royal-blue sm:min-w-[30rem] sm:rounded-[3rem] xl:max-h-[15.25rem]">
            <div className="bg-[url('certo.png')] bg-contain bg-center bg-no-repeat">
              <div className="p-10">
                <p className="pb-5 text-[23px] font-extrabold">
                  Signup to our newsletter
                </p>
                <p className="pb-7">
                  Receive the latest mobile security news, exclusive discounts &
                  offers straight to your inbox!
                </p>
                <input
                  type="text"
                  className="w-4/6 px-3 py-1 rounded-l-full sm:w-3/4"
                  placeholder="Email address"
                />
                <button className="w-2/6 px-3 py-1 font-extrabold text-white rounded-r-full bg-navy-blue sm:w-1/4 ">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="max-w-3xl text-xs">
          Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
          registered in the U.S. and other countries. App Store is a service
          mark of Apple Inc. Android, Google Play and the Google Play logo are
          trademarks of Google LLC.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
