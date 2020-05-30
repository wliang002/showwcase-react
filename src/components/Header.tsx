import React from "react";
import { PageLink } from "./PageLink";
import { Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import styled from "styled-components";

const styles = {
    brand: {
        fontSize: "19px",
        fontWeight: 900,
        verticalAlign: "middle"
    },
    item: {
        fontFamily: "AvenirNext, Helvetica",
        fontSize: "16px",
        color: "#4a4a4a",
        paddingLeft: "2rem",
        paddingRight: "2rem"
    }
};

const Navbar = styled(BootstrapNavbar)`
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: #fff !important;

  @media (min-width: 992px) {
    height: 61px;
    background-color: red;
  }
`;

const Header: React.FunctionComponent = props => {
    return (
        <Navbar bg="light" expand="lg">
            <BootstrapNavbar.Brand style={styles.brand}>
                {/* <div className="d-flex flex-row">
            <img src={require("../assets/images/logoTM.svg")} height="40" />
          </div> */}
            </BootstrapNavbar.Brand>


            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

            <BootstrapNavbar.Collapse>
                { /*props.navbarOverride */ false || (
                    <>
                        <Nav className="mr-auto">
                            <PageLink to="/">Home</PageLink>
                            <PageLink to="/education">Education</PageLink>
                            <PageLink to="/about">About</PageLink>
                            <PageLink to="/contact">Contact</PageLink>

                        </Nav>
                    </>
                )}



            </BootstrapNavbar.Collapse>
        </Navbar>
    );
};

export default Header;
