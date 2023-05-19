import Typed from "typed.js";
import { motion } from "framer-motion";
import { UilRobot } from "@iconscout/react-unicons";
import { useEffect, useRef } from "react";

const RobotText = ({ value }) => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [`${value}`],
      typeSpeed: 10,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <motion.li
      initial={{ opacity: 0, translateY: 100 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3 }}
      className="relative flex items-center justify-start text-justify bg-zinc-700 text-white border-zinc-500 border-r-2 border-b-2 p-2 mt-2"
    >
      <div className="absolute top-0 left-0 bottom-0 w-[40px] bg-green-500 border-green-700 border-l-2 flex items-center justify-center mr-4">
        <UilRobot size="30" />
      </div>
      {/* <p className="ml-[40px]">{value}</p> */}
      <p ref={el} className="ml-[40px]"></p>
    </motion.li>
  );
};

export default RobotText;
