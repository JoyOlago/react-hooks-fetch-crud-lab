import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
const [questions, setQuestions] =useState([])

useEffect(()=> {
  const BASE_URL= "http://localhost:4000/questions"
  fetch (BASE_URL)
  .then (response => response.json)
  .then(data => setQuestions(data))
  .catch(error => console.error('Error fetching questions:', error));
},[])
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList />}
    </main>
  );
}

export default App;
