import { motion } from "framer-motion";

const Loading = ({ loading }) => {
  return (
    loading && (
      <motion.div
        animate={{
          rotate: 360,
          transition: {
            duration: 1,
            ease: "linear",
            repeat: Infinity,
          },
        }}
        className="h-[30px] w-[30px] bg-green-500 mx-auto my-8"
      />
    )
  );
};

export default Loading;
