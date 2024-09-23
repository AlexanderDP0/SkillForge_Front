import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface Lesson {
  title: string;
  questions: Question[];
}

interface Module {
  title: string;
  lessons: Lesson[];
}

const shuffleArray = (array: any[]) => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

const Course: React.FC = () => {
  const navigate = useNavigate();
  const [modules, setModules] = useState<Module[]>([
    {
      title: "MÓDULO 1",
      lessons: [
        {
          title: "Lección 1",
          questions: [
            {
              question: "¿Qué es JSX en React?",
              options: [
                "Una extensión de JavaScript",
                "Un tipo de archivo",
                "Un método de React",
                "Un hook",
              ],
              correctAnswer: 0,
            },
            {
              question: "¿Qué es el Virtual DOM en React?",
              options: [
                "Una copia ligera del DOM real",
                "Un algoritmo de estilo",
                "Una función que actualiza el estado",
                "Una herramienta de debugging",
              ],
              correctAnswer: 0,
            },
          ],
        },
      ],
    },
    {
      title: "MÓDULO 2",
      lessons: [
        {
          title: "Lección 1",
          questions: [
            {
              question:
                "¿Qué hook se usa para manejar efectos secundarios en React?",
              options: ["useEffect", "useState", "useReducer", "useContext"],
              correctAnswer: 0,
            },
            {
              question:
                "¿Cómo se actualiza el estado en un componente de React?",
              options: [
                "Usando setState",
                "Modificando directamente el estado",
                "Usando Redux",
                "Llamando a la función render",
              ],
              correctAnswer: 0,
            },
          ],
        },
      ],
    },
    {
      title: "MÓDULO 3",
      lessons: [
        {
          title: "Lección 1",
          questions: [
            {
              question:
                "¿Qué hook permite manejar el estado en componentes funcionales?",
              options: ["useState", "useEffect", "useContext", "useReducer"],
              correctAnswer: 0,
            },
            {
              question: "¿Qué es un 'prop' en React?",
              options: [
                "Una función para cambiar el estado",
                "Una propiedad para pasar datos entre componentes",
                "Un hook de estado",
                "Un tipo de evento en React",
              ],
              correctAnswer: 1,
            },
          ],
        },
      ],
    },
  ]);

  const [userAnswers, setUserAnswers] = useState<{ [key: string]: number }>({});
  const [scores, setScores] = useState<number[]>([]);
  const [shuffledModules, setShuffledModules] = useState<Module[]>([]);

  useEffect(() => {
    const shuffled = modules.map((module) => ({
      ...module,
      lessons: module.lessons.map((lesson) => ({
        ...lesson,
        questions: lesson.questions.map((question) => {
          const shuffledOptions = shuffleArray(question.options);
          const correctAnswerIndex = shuffledOptions.indexOf(
            question.options[question.correctAnswer]
          );
          return {
            ...question,
            options: shuffledOptions,
            correctAnswer: correctAnswerIndex,
          };
        }),
      })),
    }));
    setShuffledModules(shuffled);
  }, [modules]);

  const handleAnswer = (
    moduleIndex: number,
    lessonIndex: number,
    questionIndex: number,
    answerIndex: number
  ) => {
    const key = `${moduleIndex}-${lessonIndex}-${questionIndex}`;
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [key]: answerIndex,
    }));
  };

  const checkModuleAnswers = (moduleIndex: number) => {
    const module = shuffledModules[moduleIndex];
    let correctAnswers = 0;
    let totalQuestions = 0;

    module.lessons.forEach((lesson, lessonIndex) => {
      lesson.questions.forEach((question, questionIndex) => {
        totalQuestions++;
        const key = `${moduleIndex}-${lessonIndex}-${questionIndex}`;
        const userAnswer = userAnswers[key];

        if (userAnswer === question.correctAnswer) {
          correctAnswers++;
        }
      });
    });

    const score = (correctAnswers / totalQuestions) * 100;
    const newScores = [...scores];
    newScores[moduleIndex] = score;
    setScores(newScores);
  };

  const finishCourse = () => {
    const averageScore =
      scores.reduce((acc, score) => acc + score, 0) / scores.length;
    localStorage.setItem("averageScore", averageScore.toFixed(2));
    navigate("/user");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">React Curso</h1>
      {shuffledModules.map((module, moduleIndex) => (
        <div key={moduleIndex} className="mb-4">
          <details className="border rounded-lg shadow-lg">
            <summary className="bg-yellow-200 p-4 cursor-pointer text-lg font-semibold">
              {module.title} - Puntaje:{" "}
              {scores[moduleIndex] ? scores[moduleIndex].toFixed(2) : 0}%
            </summary>
            <div className="bg-white p-4">
              {module.lessons.map((lesson, lessonIndex) => (
                <div key={lessonIndex} className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
                  {lesson.questions.map((question, questionIndex) => (
                    <div key={questionIndex} className="mb-4">
                      <p className="font-medium">{question.question}</p>
                      <div className="mt-2">
                        {question.options.map((option, optionIndex) => (
                          <label key={optionIndex} className="block">
                            <input
                              type="radio"
                              name={`${moduleIndex}-${lessonIndex}-${questionIndex}`}
                              value={optionIndex}
                              checked={
                                userAnswers[
                                  `${moduleIndex}-${lessonIndex}-${questionIndex}`
                                ] === optionIndex
                              }
                              onChange={() =>
                                handleAnswer(
                                  moduleIndex,
                                  lessonIndex,
                                  questionIndex,
                                  optionIndex
                                )
                              }
                              className="mr-2"
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
              <button
                onClick={() => checkModuleAnswers(moduleIndex)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
              >
                Verificar respuestas del módulo
              </button>
            </div>
          </details>
        </div>
      ))}
      <div className="mt-6">
        <button
          onClick={finishCourse}
          className="bg-green-500 text-white px-6 py-3 rounded-lg"
        >
          Finalizar curso y guardar puntaje
        </button>
        <p className="text-lg font-bold mt-4">
          Puntaje promedio total:{" "}
          {scores.length > 0
            ? (scores.reduce((acc, score) => acc + score, 0) / 3).toFixed(2)
            : 0}
          %
        </p>
      </div>
    </div>
  );
};

export default Course;
