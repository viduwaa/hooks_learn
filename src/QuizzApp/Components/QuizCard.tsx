import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { QuizContext } from "../Helpers/Context";
import Form from "react-bootstrap/esm/Form";

export function QuestionType({
    quizType,
    quizCatergory,
}: {
    quizType: string;
    quizCatergory: number;
}) {
    const { setGameState, setQuizCatergory, setSize,setDifficulty } = useContext(QuizContext);

    return (
        <Card id="qCard" className="text-center">
            <Card.Body className="d-flex flex-column w-100">
                <Card.Title>{quizType}</Card.Title>
                <Card.Text className="d-flex justify-content-center w-100 mb-2">
                    <Form.Select
                        className="me-2"
                        onChange={(event) => {
                            setSize(event.target.value);
                        }}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                    </Form.Select>{" "}
                    <Form.Select className="w-50" onChange={(event) => {
                        setDifficulty(event.target.value);
                        }}>
                            
                        <option value="easy">Easy</option>
                        <option value="medium" selected>Intermediate</option>
                        <option value="hard">Hard</option>
                    </Form.Select>{" "}
                </Card.Text>
                <span className="mb-2">Questions about {quizType}</span>
                <Button
                    className="w-75 m-auto"
                    onClick={() => {
                        setGameState("quiz");
                        setQuizCatergory(quizCatergory);
                    }}
                >
                    Start
                </Button>
            </Card.Body>
        </Card>
    );
}
