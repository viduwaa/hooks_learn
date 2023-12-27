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
    const { setGameState, setQuizCatergory, setSize } =
        useContext(QuizContext);

    return (
        <Card className="text-center" style={{ minWidth: "40%",maxWidth:"450px" }}>
            <Card.Body>
                <Card.Title>{quizType}</Card.Title>
                <Card.Text className="d-flex flex-wrap justify-content-center">
                    <Form.Select
                        onChange={(event) => {
                            setSize(event.target.value);
                        }}
                        aria-label="Default select example"
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                    </Form.Select>{" "}
                    <span className="my-auto ms-2">
                        Intermediate Questions about {quizType}
                    </span>
                </Card.Text>

                <Button
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
