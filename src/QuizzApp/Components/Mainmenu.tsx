import { Button, Container } from "react-bootstrap";
import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
/* 
type MainMenuProps = {
    gameState: string;
    setGameState: React.FC;
}; */

export function Mainmenu() {
    const { gameState, setGameState } = useContext(QuizContext);
    return (
        <Container className="d-flex justify-content-center items-center ">
            <Button onClick={() => setGameState("quiz")}>Start Quiz</Button>
        </Container>
    );
}
