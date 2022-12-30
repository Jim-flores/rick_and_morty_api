import { motion } from "framer-motion";
import React from "react";

type Props = { setSearchLocation: any };

const Form = ({ setSearchLocation }: Props) => {
  const searchLocation = (e: any) => {
    e.preventDefault();
    setSearchLocation(e.target.children[0].value);
  };
  return (
    <form
      onSubmit={searchLocation}
      action=""
      className="flex w-full bg-transparent mt-2"
    >
      <input
        className="text-center w-[80%] h-[50px] bg-[#0f0f0f]/90 text-white rounded-lg border-2 text-xl"
        type="text"
        placeholder="Insert a number"
      />
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="ml-3 bg-[#0f0f0f]/90 p-2 h-[50px] text-white rounded-lg border-2 text-xl"
      >
        Search
      </motion.button>
    </form>
  );
};

export default Form;
