import React, { useRef } from "react";

type Props = {
  arrayPages: any;
  currentPage: any;
  setCurrentPage: any;
  quantityPages: any;
};

const Pagination = ({
  arrayPages,
  currentPage,
  setCurrentPage,
  quantityPages,
}: Props) => {
  const listNumber: any = useRef();
  const prevPage = () => {
    if (currentPage - 1 === 0) {
      setCurrentPage(quantityPages);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage + 1 > quantityPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const changePageTo = (n: any) => setCurrentPage(n);
  return (
    <div className="w-full h-[50px] flex justify-center">
      <ul
        ref={listNumber}
        className="flex flex-row gap-8 list-none items-center  border-b-2 rounded-xl "
      >
        <li onClick={prevPage} className="text-4xl text-white rounded-md">
          &laquo;
        </li>
        {arrayPages?.map((num: any) => (
          <li
            onClick={() => changePageTo(num)}
            key={num}
            className={
              currentPage === num ? `page-number page-active` : `page-number`
            }
          >
            {num}
          </li>
        ))}
        <li onClick={nextPage} className="text-4xl text-white rounded-md">
          &raquo;
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
