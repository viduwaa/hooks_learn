import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export function Footer() {
    return (
        <div id="footer"
            style={{ background: "#212529", color: "#fff", height: "40px" }}
            className="d-flex align-items-center justify-content-center "
        >
            <h6>
                &copy; Created by Viduwa{" "}
                <a href="https://www.linkedin.com/in/viduladeneth/">
                    <FaLinkedin size="20" />{" "}
                </a>
                <a href="https://github.com/viduwaa">
                    <FaGithub size="20" />
                </a>
            </h6>
        </div>
    );
}
