import { BSNavbar } from "./Components/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {AllApps} from "./pages/AllApps";
import {About} from "./pages/About";
import QuizApp from "./QuizzApp/QuizApp";
import { ToDoList } from "./TodoList/ToDoList";
import { Footer } from "./Components/Footer";

export default function App() {
    return (
        <>
            <Router>
                <BSNavbar />
                <div id="wrapper" style={{minHeight:"90dvh"}}>
                <Routes>
                    <Route path="/" element={<AllApps/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/quizzapp" element={<QuizApp />}></Route>
                    <Route path="/todolist" element={<ToDoList />}></Route>
                </Routes>
                </div>
                <Footer/>
            </Router>
        </>
    );
}
