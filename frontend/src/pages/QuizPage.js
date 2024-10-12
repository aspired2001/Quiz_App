import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizForm from '../components/QuizForm';
import Quiz from '../components/Quiz';

const QuizPage = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [currentQuiz, setCurrentQuiz] = useState(null);

    useEffect(() => {
        const fetchQuizzes = async () => {
            const response = await axios.get('http://localhost:5000/api/quizzes', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setQuizzes(response.data);
        };
        fetchQuizzes();
    }, []);

    const handleQuizSubmit = async (quiz) => {
        await axios.post('http://localhost:5000/api/quizzes', quiz, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        setQuizzes([...quizzes, quiz]);
    };

    const handleQuizSelect = (quiz) => {
        setCurrentQuiz(quiz);
        setQuizCompleted(false);
    };

    const handleQuizFinish = () => {
        setQuizCompleted(true);
        setCurrentQuiz(null);
    };

    return (
        <div className="p-6 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Quiz Application</h1>
            <QuizForm onSubmit={handleQuizSubmit} />
            <h2 className="text-lg font-semibold mt-4">Available Quizzes</h2>
            <div className="mt-4">
                {quizzes.map((quiz) => (
                    <Quiz key={quiz._id} quiz={quiz} onSelect={handleQuizSelect} onFinish={handleQuizFinish} />
                ))}
            </div>
            {quizCompleted && <p className="mt-4">Quiz completed! You can create or play another quiz.</p>}
        </div>
    );
};

export default QuizPage;
