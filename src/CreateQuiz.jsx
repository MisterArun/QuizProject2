  import React, { useState, useEffect } from "react";
  import io from "socket.io-client";
  import { openTDhost } from "./constants";
  import { nanoid } from "nanoid";

  const socket = io("http://localhost:3000"); // Replace with your server URL

  const QuizForm = () => {
    const [difficulty, setDifficulty] = useState("");
    const [numberOfQuestions, setNumberOfQuestions] = useState("");
    const [categories, setCategories] = useState("");
    const [timer, setTimer] = useState("");
    const [uniqueKey, setUniqueKey] = useState("");
    const [categoryOptions, setCategoryOptions] = useState([]); // Initialize as an empty array

    const difficulties = ["Easy", "Medium", "Hard"];

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await fetch(
            "https://opentdb.com/api_category.php"
          );
          const data = await response.json();

          const categoryData = data.trivia_categories.map((category) => ({
            id: category.id,
            name: category.name,
          }));
          setCategoryOptions(categoryData);
        } catch (error) {
          console.error("Error fetching categories: ", error);
        }
      };

      fetchCategories();
    }, []); 

    const handleCreateQuiz = () => {
      const generateUniqueKey = nanoid(5);
      setUniqueKey(generateUniqueKey);

      const quizData = {
        key: generateUniqueKey,
        difficulty,
        numberOfQuestions: parseInt(numberOfQuestions, 10),
        categories,
        timer: parseInt(timer, 10),
      };

      socket.emit("createQuiz", quizData);

      socket.on("quizCreated", (roomKey) => {
        window.location.href = `/room/${roomKey}`;
      });
    };

    return (
      <div className="container mt-5">
        <div className="text-center">
          <h1>Create a Quiz</h1>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
            <div className="form-group">
              <label>Difficulty:</label>
              <select
                className="form-control"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="">Select Difficulty</option>
                {difficulties.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Number of Questions:</label>
              <input
                type="text"
                className="form-control"
                value={numberOfQuestions}
                onChange={(e) => setNumberOfQuestions(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Categories:</label>
              <select
                className="form-control"
                value={categories}
                onChange={(e) => setCategories(e.target.value)}
              >
                <option value="">Select Category</option>
                {categoryOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Timer:</label>
              <input
                type="timer"
                className="form-control"
                value={timer}
                onChange={(e) => setTimer(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button className="btn btn-primary my-3 p-3" onClick={handleCreateQuiz}>
                Create Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default QuizForm;
