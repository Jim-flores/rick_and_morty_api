import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const useLocation = (searchLocation) => {
  const [user, setUser] = useState();
  useEffect(() => {
    let locationNumber;
    if (searchLocation) {
      locationNumber = searchLocation;
    } else {
      locationNumber = Math.ceil(Math.random() * 126);
    }

    const URL = `https://rickandmortyapi.com/api/location/${locationNumber}`;
    axios
      .get(URL)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, [searchLocation]);
  return user;
};

export default useLocation;
