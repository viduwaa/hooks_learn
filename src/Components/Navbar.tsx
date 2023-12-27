import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

export function BSNavbar() {
    return (
        <>
            <Navbar id="nav" bg="dark" data-bs-theme="dark" style={{ height: "50px" }}>
                <Container className="d-flex gap-3 ">
                    <NavLink
                        id="navlinks"
                        to="/"
                        className={({ isActive }) => ( isActive ? "active" : "")}
                    >
                        All Apps
                    </NavLink>
                    <NavLink id="navlinks" to="/about">
                        About
                    </NavLink>
                    <Nav className="ms-auto gap-3">
                        <NavLink
                            id="navlinks"
                            to="https://viduwaa.github.io/#sec3"
                            target="_blank"
                        >
                            More Projects <FaGithub />
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
