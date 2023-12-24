import { useEffect,  useState } from "react";
import he from "he";
import { Button } from "react-bootstrap";
import { ResultScreen } from "../Components/ResultScreen";

export function Questions({qCatergory}:{qCatergory:string}) {
    const [resultScreen, setResultScreen] = useState(false);
    const [stored, setStored] = useState(false);
    const [button, setButton] = useState(false);
    const [questions, setQuestions] = useState<string[]>([]);
    const [answers, setAnswers] = useState<string[][]>([]);
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
    const [correct_answers, setCorrect_answers] = useState<string[]>([]);

    const controller = new AbortController();

    const questionList: string[] = [];
    const incorrectAnswers: string[][] = [];
    const correctAnswers: string[] = [];

    function shuffleArray(arrayOfArray: string[][]) {
        arrayOfArray.map((subArray) => {
            let currentIndex = subArray.length,
                temporaryvalue: string,
                randomIndex: number;

            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryvalue = subArray[currentIndex];
                subArray[currentIndex] = subArray[randomIndex];
                subArray[randomIndex] = temporaryvalue;
            }

            return subArray;
        });

        return arrayOfArray;
    }

    function handleButton() {
        setButton(true);
        const check = [...selectedAnswers];
        const correctedcheck =
            check.length !== correct_answers.length ||
            check.some((item) => item === undefined);

        while (correctedcheck) {
            return;
        }
        setResultScreen(!resultScreen);
    }

    function FinalResult(): string {
        const finalAnswerList = [...selectedAnswers];
        let finalMarks = 0;

        correct_answers.map((item) => {
            finalAnswerList.map((itemCheck) => {
                item === itemCheck ? (finalMarks += 1) : null;
            });
        });
        return `Your Score is ${finalMarks} /` + " " + correct_answers.length;
    }

   

    useEffect(() => {
        fetch(
            //catergory 15=games 18=it
            `https://opentdb.com/api.php?amount=10&category=${qCatergory}&difficulty=medium&type=multiple`
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error("error");
                }
                return response.json();
            })

            .then((data) => {
                if (data && data.results) {
                    //questions

                    data.results.forEach(
                        (result: {
                            question: string;
                            incorrect_answers: string[];
                            correct_answer: string;
                        }) => {
                            questionList.push(result.question);
                            incorrectAnswers.push(result.incorrect_answers);
                            correctAnswers.push(result.correct_answer);
                        }
                    );

                    setQuestions(questionList);

                    const answerList: string[][] = incorrectAnswers.map(
                        (_, index) => [
                            ...incorrectAnswers[index],
                            correctAnswers[index],
                        ]
                    );

                    setAnswers(shuffleArray(answerList));
                    setCorrect_answers(correctAnswers);
                    setStored(true);
                }
            })
            .catch((_) => {
                return;
            });

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <>
            {stored ? (
                <div className="d-flex flex-md-nowrap flex-wrap mt-md-5 mt-2 mb-5">
                    <form
                        action=""
                        className="border-right border rounded p-4 m-md-auto"
                    >
                        {questions.map((question, index1) => (
                            
                            <fieldset key={index1} className="mb-3">
                                <p className="fs-5 fs-md-1 fw-bold">
                                    {index1 + 1},{he.decode(question)}
                                </p>
                                <div className="list-group">
                                    {answers[index1].map(
                                        (answerlist, subindex) => (
                                            <div
                                                key={`ans${subindex}`}
                                                className="list-group-item d-flex gap-2"
                                                style={{
                                                    background:
                                                        resultScreen &&
                                                        correct_answers.includes(
                                                            answerlist
                                                        )
                                                            ? "green"
                                                            : undefined,
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    id={`option${index1}_${subindex}`}
                                                    name={`ansgroup${index1}`}
                                                    value={answerlist}
                                                    onChange={(event) => {
                                                        const updatedAnswers = [
                                                            ...selectedAnswers,
                                                        ];
                                                        updatedAnswers[index1] =
                                                            event.target.value;
                                                        setSelectedAnswers(
                                                            updatedAnswers
                                                        );
                                                    }}
                                                />

                                                <label
                                                    htmlFor={`option${index1}_${subindex}`}
                                                    className="w-100"
                                                >
                                                    {he.decode(answerlist)}
                                                </label>
                                            </div>
                                        )
                                    )}
                                </div>
                            </fieldset>
                        ))}
                        <div className="d-flex gap-3">
                            {!resultScreen ? (
                                <><a href="#resultscreen">
                                    <Button id="submit" onClick={
                                        handleButton
                                        }>
                                        Submit
                                    </Button></a>
                                    <label
                                        className={
                                            button
                                                ? "d-block text-danger my-auto"
                                                : "d-none"
                                        }
                                    >
                                        Please answer all questions
                                    </label>
                                </>
                            ) : null}
                        </div>
                    </form>
                    {resultScreen ? (
                        <ResultScreen Marks={FinalResult()}  />
                    ) : null}
                    
                </div>
                
            ) : (
                <div id="loader" className="d-flex align-items-center justify-content-center loader m-auto"></div>
            )}{" "}
        </>
    );
}
