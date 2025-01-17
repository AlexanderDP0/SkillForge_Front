import React, { useState } from "react";

import { DragAndDrop } from "../components/d&d/DragAndDrop";

const Course: React.FC = () => {
  const [modules, setModules] = useState([
    {
      lessons: [
        {
          title: "Lección 1",
          questions: [
            {
              type: "multiple-choice",
              question: "¿Qué es JSX en React?",
              options: [
                "Una extensión de JavaScript",
                "Un tipo de archivo",
                "Un método de React",
                "Un hook",
              ],
              correctAnswer: 0,
            },
          ],
        },
      ],
    },
    {
      lessons: [
        {
          title: "Lección 2",
          questions: [
            {
              type: "multiple-choice",
              question:
                "¿Cuál de las siguientes afirmaciones sobre React es correcta?",
              options: [
                "React es un marco de trabajo (framework) completo",
                "React utiliza un DOM virtual para mejorar el rendimiento",
                "React obliga a usar Redux para el manejo del estado",
                "React solo funciona en el navegador",
              ],
              correctAnswer: 1,
            },
          ],
        },
      ],
    },
    {
      lessons: [
        {
          title: "Lección 3",
          questions: [
            {
              type: "multiple-choice",
              question:
                "¿Cuál de los siguientes métodos del ciclo de vida de un componente ya no se usa con frecuencia en versiones modernas de React?",
              options: [
                "componentWillMount",
                "componentDidMount",
                "getDerivedStateFromProps",
                "shouldComponentUpdate",
              ],
              correctAnswer: 0,
            },
          ],
        },
      ],
    },
    {
      lessons: [
        {
          title: "Lección 4",
          questions: [
            {
              type: "drag-and-drop",
              question: "Ordena estos pasos del ciclo de vida de React.",
              options: ["Render", "ComponentDidMount", "Update", "Unmount"],
              correctAnswer: [
                "Render",
                "ComponentDidMount",
                "Update",
                "Unmount",
              ],
            },
          ],
        },
      ],
    },
    {
      lessons: [
        {
          title: "Lección 5",
          questions: [
            {
              type: "multiple-choice",
              question: "¿Cómo se enlazan correctamente los eventos en React?",
              options: [
                "Mediante addEventListener.",
                "Usando una función directamente dentro de onClick.",
                "Pasando una referencia de función como {this.handleClick}.",
                "Todas las anteriores",
              ],
              correctAnswer: 2,
            },
          ],
        },
      ],
    },
    {
      lessons: [
        {
          title: "Lección 6",
          questions: [
            {
              type: "multiple-choice",
              question:
                "El hook useEffect puede ejecutarse después de cada renderizado.",
              options: ["Verdadero", "Falso"],
              correctAnswer: 0,
            },
          ],
        },
      ],
    },
  ]);

  const [userAnswers, setUserAnswers] = useState<{ [key: string]: any }>({});
  const [scores, setScores] = useState<number[]>([]);

  // Handle multiple-choice answers
  const handleAnswer = (questionKey: string, answerIndex: number) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionKey]: answerIndex,
    }));
  };

  // Calculate module scores
  const calculateScores = () => {
    const newScores = modules.map((module, moduleIndex) => {
      let correctAnswers = 0;
      let totalQuestions = 0;

      module.lessons.forEach((lesson) => {
        lesson.questions.forEach((question, questionIndex) => {
          totalQuestions++;
          const questionKey = `${moduleIndex}-${questionIndex}`;
          const userAnswer = userAnswers[questionKey];

          if (question.type === "multiple-choice") {
            if (userAnswer === question.correctAnswer) {
              correctAnswers++;
            }
          } else if (question.type === "drag-and-drop") {
            if (
              JSON.stringify(userAnswer) ===
              JSON.stringify(question.correctAnswer)
            ) {
              correctAnswers++;
            }
          }
        });
      });

      return (correctAnswers / totalQuestions) * 100;
    });

    setScores(newScores);

    // Calculate and save average to localStorage
    const average =
      newScores.reduce((total, score) => total + score, 0) / newScores.length;
    localStorage.setItem("puntaje", average.toFixed(2));
  };

  const handleNavigation = (path: string) => {
    window.location.pathname = path;
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-yellow-600 mb-8">
        React Cuestionario
      </h1>
      {modules.map((module, moduleIndex) => (
        <div
          key={moduleIndex}
          className="bg-white shadow-md rounded-lg mb-8 p-6"
        >
          {module.lessons.map((lesson, lessonIndex) => (
            <div
              key={lessonIndex}
              className="bg-yellow-50 rounded-lg p-4 mb-4 shadow-sm"
            >
              <h3 className="text-xl font-medium text-yellow-600 mb-4">
                {lesson.title}
              </h3>
              {lesson.questions.map((question, questionIndex) => {
                const questionKey = `${moduleIndex}-${questionIndex}`;

                if (question.type === "multiple-choice") {
                  return (
                    <div key={questionIndex} className="mb-4">
                      <p className="font-medium text-gray-700 mb-2">
                        {question.question}
                      </p>
                      {question.options.map((option, optionIndex) => (
                        <label
                          key={optionIndex}
                          className="flex items-center mb-2"
                        >
                          <input
                            type="radio"
                            name={questionKey}
                            value={optionIndex}
                            checked={userAnswers[questionKey] === optionIndex}
                            onChange={() =>
                              handleAnswer(questionKey, optionIndex)
                            }
                            className="mr-3 accent-yellow-500"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  );
                }

                if (question.type === "drag-and-drop") {
                  return (
                    <div key={questionIndex} className="mb-4">
                      <p className="font-medium text-gray-700 mb-2">
                        {question.question}
                      </p>
                      <DragAndDrop />
                    </div>
                  );
                }

                return null;
              })}
            </div>
          ))}
        </div>
      ))}
      <button
        onClick={calculateScores}
        className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-200"
      >
        Calcular Puntajes
      </button>
      <div className="mt-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Puntajes por módulo:
        </h2>
        {scores.map((score, index) => (
          <p key={index} className="text-gray-700">
            Módulo {index + 1}:{" "}
            <span className="font-bold">{score.toFixed(2)}%</span>
          </p>
        ))}
      </div>
      <button
        onClick={() => handleNavigation("user")}
        className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-200"
      >
        Terminar
      </button>
    </div>
  );
};

export default Course;
