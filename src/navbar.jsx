import React, { useState } from "react";
import { Navbar, Nav, FormControl, Button } from "react-bootstrap";
import mylogo from "./img/bookstoreicon.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  //here we used state to save the search phrase by the user
  const [searchPhrase, setSearchPhrase] = useState("");

  return (
    <Navbar bg="light" expand="lg" className="d-flex justify-content-between">
      <Nav
        className="mr-auto my-2 my-lg-0"
        style={{ maxHeight: "100px" }}
        navbarScroll
      >
        {/*We need Link for React router. however here we have "NavLink". To convert it to Link component we have user "as" keyword here. */}
        {/*here is the links the left side of the header*/}
        <Nav.Link as={Link} to="/bookcardview/all">
          All
        </Nav.Link>
        <Nav.Link as={Link} to="/bookcardview/news">
          New Releases
        </Nav.Link>
        <Nav.Link as={Link} to="/bookcardview/bestsellers">
          Best Sellers
        </Nav.Link>
        <Nav.Link as={Link} to="/bookcardview/audiobook">
          Audio Book
        </Nav.Link>
      </Nav>
      {/*here is the title on the header*/}
      <div className="d-flex justify-content-between">
        <img src={mylogo} style={{ height: "64px" }}></img>
        <h1>My Bookstore</h1>
      </div>
      {/*here is the search box and the search button*/}
      <div className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
          value={searchPhrase}
          onChange={(e) => setSearchPhrase(e.target.value)}
        />
        {/*We have placed button insde a Link component to enable "Route" here.*/}
        <Link to={"/bookcardview/all/" + searchPhrase}>
          <Button variant="outline-success">Search</Button>
        </Link>
      </div>
    </Navbar>
  );
};
