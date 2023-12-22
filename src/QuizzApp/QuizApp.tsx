import { useState } from "react";
import { Container } from "react-bootstrap";
import {Mainmenu} from "./Components/Mainmenu";
import { Quiz } from "./Components/Quiz";
import { EndScreen } from "./Components/EndScreen";
import { QuizContext } from "./Helpers/Context";

export default function QuizApp() {
    const [gameState, setGameState] = useState("menu");

    return (
        <Container>
            <QuizContext.Provider value={{ gameState, setGameState }}>
                <h1 className="text-center">Quizz App</h1>
                {gameState === "menu" && <Mainmenu />}
                {gameState === "quiz" && <Quiz />}
                {gameState === "endScreen" && <EndScreen />}
            </QuizContext.Provider>
        </Container>
    );
}
