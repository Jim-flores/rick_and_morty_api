import React, { useEffect, useState } from "react";
import axios from "axios";
const useInfo = (url) => {
  const [informations, setinformations] = useState();
  useEffect(() => {
    const URL = url;
    axios
      .get(URL)
      .then((res) => setinformations(res.data))
      .catch((err) => console.log(err));
  }, [url]);

  return informations;
};

export default useInfo;
