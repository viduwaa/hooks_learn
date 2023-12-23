import { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import { Questions } from "../Helpers/Questions";

export  function Quiz() {
  const { quizCatergory } = useContext(QuizContext);
  return (
    <div>
        <Questions qCatergory={quizCatergory}/>
    </div>
  )
}
