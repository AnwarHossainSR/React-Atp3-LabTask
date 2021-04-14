import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navbars = () => {
    return (
      <div>
        <>
          <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <Link className="mr-3 text-decoration-none text-info" to="/">Home</Link>
            <Link className="mr-3 text-decoration-none text-info" to="/add">Add Data</Link>
          </Navbar.Brand>
          </Navbar>
        </>
      </div>
    );
}

export default Navbars
