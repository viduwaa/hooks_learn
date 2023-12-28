import { Container, ListGroup } from "react-bootstrap";
import AboutItem from "../Components/AboutItem";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";

export function About() {
    return (
        <Container className="mt-5">
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
                                Bootstrap{" "}
                                <FaBootstrap color="purple" size="30" /> <br />
                            </>
                        </>
                    }
                />
            </ListGroup>
        </Container>
    );
}
