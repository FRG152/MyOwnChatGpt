import Typed from "typed.js";
import { motion } from "framer-motion";
import { UilUser } from "@iconscout/react-unicons";
import { useEffect, useRef } from "react";

const UserText = ({ value }) => {
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
      transition={{ duration: 0.2 }}
      className="relative flex items-center justify-end text-justify bg-zinc-700 text-white border-zinc-500 border-l-2 border-b-2 p-2 mt-2"
    >
      {/* <p className="mr-[40px]">{value}</p> */}
      <p ref={el} className="mr-[40px]"></p>
      <div className="absolute top-0 right-0 bottom-0 w-[40px] bg-green-500 border-green-700 border-r-2 flex items-center justify-center ml-4">
        <UilUser size="30" />
      </div>
    </motion.li>
  );
};

export default UserText;
