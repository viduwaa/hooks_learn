import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import { Questions } from "../Helpers/Questions";

export  function Quiz() {
  const { quizCatergory,size,difficulty } = useContext(QuizContext);
  return (
    <div>
        <Questions qCatergory={quizCatergory} qSize={size} qDifficulty={difficulty}/>
    </div>
  )
}
