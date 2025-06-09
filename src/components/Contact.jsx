import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    // Full screen flex container to center horizontally and vertically
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col xl:flex-row gap-10 w-full max-w-6xl">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-[#100d25] p-8 rounded-2xl max-w-md w-full mx-auto"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <div className="mt-12 flex flex-col gap-8 text-white">
            <div>
              <h4 className="text-[#915eff] text-[14px] font-semibold mb-1">Email</h4>
              <a
                href="mailto:kjahnavi1204@gmail.com"
                className="text-[16px] hover:underline"
              >
                kjahnavi1204@gmail.com
              </a>
            </div>
            <div>
              <h4 className="text-[#915eff] text-[14px] font-semibold mb-1">GitHub</h4>
              <a
                href="https://github.com/JahnaviKhattar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] hover:underline"
              >
                github.com/JahnaviKhattar
              </a>
            </div>
            <div>
              <h4 className="text-[#915eff] text-[14px] font-semibold mb-1">LinkedIn</h4>
              <a
                href="https://linkedin.com/in/jahnavikhattar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] hover:underline"
              >
                linkedin.com/in/jahnavikhattar
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side - EarthCanvas 3D */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
