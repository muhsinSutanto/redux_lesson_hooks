import React from "react";
import NavbarName from "./NavbaName";
import NavbarImage from "./NavbarImage";
import { useState } from "react";

const Navbar = () => {
  const [data, setData] = useState({
    name: "muhsin",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  });

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <NavbarName data={data} />
      <NavbarImage data={data} />
    </div>
  );
};

export default Navbar;
