import React from "react";

type Props = {
  user: any;
};

const Location = ({ user }: Props) => {
  return (
    <div className="p-4 text-center">
      <h2 className="text-3xl">{user?.name}</h2>
      <div className="text-left">
        <h4>
          {" "}
          <b>Type: </b> {user?.type}
        </h4>
        <h4>
          {" "}
          <b>Dimension: </b> {user?.dimension}
        </h4>
        <h4>
          {" "}
          <b>Residents: </b> {user?.residents.length}
        </h4>
      </div>
    </div>
  );
};

export default Location;
