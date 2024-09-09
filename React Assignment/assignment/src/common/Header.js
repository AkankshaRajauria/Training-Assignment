import React from "react";
import { Navbar } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar variant="dark" className="d-flex justify-content-center bg-purple">
        <Navbar.Brand href="#home">
        Rick and Morty
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default Header;
