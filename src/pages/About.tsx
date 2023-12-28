import { Container, ListGroup } from "react-bootstrap";
import AboutItem from "../Components/AboutItem";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
export function About() {
    return (
        <Container className="pt-5">
            <ListGroup as="ol" numbered>
                <AboutItem
                    Heading="Main Target"
                    Context={
                        <>
                            Every app here is built from own knowledge with best
                            practice to understand how React hooks works and
                            improve knowledge on React further.
                        </>
                    }
                />
                <AboutItem
                    Heading="Used Tech"
                    Context={
                        <>
                            <>
                                React <FaReact color="blue" size="30" /> + Vite{" "}
                                <TbBrandVite color="purple" size="30" /> <br />{" "}
                                TypeScript 
                                <BiLogoTypescript color="blue" size="30" />
                                <br />
                                Bootstrap{" "}
                                <FaBootstrap color="purple" size="28" /> <br />
                            </>
                        </>
                    }
                />
            </ListGroup>
        </Container>
    );
}
