import Image from "next/image";
import React, { useState } from "react";
import useLocation from "../hooks/useLocation";
import Location from "../components/Location";
import ResidentInfo from "../components/ResidentInfo";
import Pagination from "../components/Pagination";
import Form from "../components/Form";
type Props = {};

const Banner = (props: Props) => {
  const [searchLocation, setSearchLocation] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const user: any = useLocation(searchLocation);
  console.log(user?.residents.length);

  let arrayResidents = [];
  const residentPerPage = 6;
  if (user?.residents.length < residentPerPage) {
    arrayResidents = [...user?.residents];
  } else {
    const lastResident = currentPage * residentPerPage;
    arrayResidents = user?.residents.slice(
      lastResident - residentPerPage,
      lastResident
    );
  }

  let arrayPages = [];
  let quantityPages = Math.ceil(user?.residents.length / residentPerPage); // 11 = cantidad paginas máximas
  const pagesPerBlock = 5;
  let currentBlock = Math.ceil(currentPage / pagesPerBlock); // 2 = segundo bloque
  // Analiza si estamos en el último(true) o no(false)
  if (currentBlock * pagesPerBlock >= quantityPages) {
    // Cuando es el último bloque
    for (
      let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
      i <= quantityPages;
      i++
    ) {
      arrayPages.push(i);
    }
  } else {
    // cuando no es el último bloque
    for (
      let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
      i <= currentBlock * pagesPerBlock;
      i++
    ) {
      arrayPages.push(i);
    }
  }
  return (
    <div className="w-[90%] px-10 h-[100vh] relative justify-center">
      <div className="w-full px-10 h-[450px] relative flex justify-center">
        <Image
          src="/banner.jpg"
          alt=""
          fill
          className="rounded-xl shadow-stone-50 shadow-md"
        ></Image>
        <div className="w-[50%] items-center flex justify-center mt-[400px] absolute bg-transparent">
          <Form setSearchLocation={setSearchLocation} />
        </div>
      </div>
      <div className="mt-8 flex justify-center w-full mb-5 ">
        <div className="w-fit text-left h-full border-white border-2 text-white">
          <Location user={user} />
        </div>
      </div>
      <Pagination
        arrayPages={arrayPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        quantityPages={quantityPages}
      />
      <div className="grid grid-cols-3 gap-4 p-5 text-white">
        {arrayResidents?.map((url: any) => (
          <ResidentInfo key={url} url={url} />
        ))}
      </div>
    </div>
  );
};

export default Banner;
