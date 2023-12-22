import { useEffect, useState } from "react";
import he from "he";
import { Button } from "react-bootstrap";
import { ResultScreen } from "../Components/EndScreen";

export function Questions() {
    const [resultScreen, setResultScreen] = useState(false);
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
        
        correct_answers.map((item ) => {
            finalAnswerList.map((itemCheck ) => {
                item === itemCheck ? (finalMarks += 1) : null;
            });
        });
        return `Your Score is ${finalMarks} /` + " " + correct_answers.length;
    }

    
    useEffect(() => {
        fetch(
            "https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple"
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
            <div>
                <form action="">
                    {questions.map((question, index1) => (
                        <fieldset key={index1}>
                            <h2>{he.decode(question)}</h2>

                            {answers[index1].map((answerlist, subindex) => (
                                <div key={`ans${subindex}`} >
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
                                            setSelectedAnswers(updatedAnswers);
                                        }}
                                    />

                                    <label
                                        htmlFor={`option${index1}_${subindex}`} style={{background: resultScreen && correct_answers.includes(answerlist) ? "green" : "inherit"  }}
                                    >
                                        {he.decode(answerlist)}
                                    </label>
                                </div>
                            ))}
                        </fieldset>
                    ))}

                    {!resultScreen ? (
                        <Button onClick={handleButton}>Submit</Button>
                    ) : null}
                </form>
                {resultScreen ? <ResultScreen Marks={FinalResult()} /> : null}
            </div>
        </>
    );
}
