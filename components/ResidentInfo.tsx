import React from "react";
import useInfo from "../hooks/useInfo";
import { motion } from "framer-motion";
type Props = {
  url: any;
};

const ResidentInfo = ({ url }: Props) => {
  const informations: any = useInfo(url);

  return (
    <motion.div
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.2 },
      }}
      className={
        informations?.status == "Alive"
          ? `s-green`
          : informations?.status == "Dead"
          ? `s-red`
          : `s-white`
      }
    >
      <div className="col-4">
        <img src={informations?.image} alt="" />
      </div>
      <div className="col-8">
        <h5 className="font-mono text-2xl flex justify-center">
          {informations?.name}
        </h5>
        <h5
          className={
            informations?.status == "Alive"
              ? `text-lime-500 shadow-lg`
              : informations?.status == "Dead"
              ? `text-red-600 shadow-lg`
              : `text-slate-50 shadow-lg`
          }
        >
          {" "}
          <b>Status: </b>
          {informations?.status}
        </h5>
        <h5 className="italic">
          {" "}
          <b>Origin: </b>
          {informations?.origin.name}
        </h5>
        <h5 className="italic">
          {" "}
          <b>Episodes where appear: </b>
          {informations?.episode.length}
        </h5>
      </div>
    </motion.div>
  );
};

export default ResidentInfo;
