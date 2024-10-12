import React, { useState } from 'react';

const QuizForm = ({ onSubmit }) => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [answer, setAnswer] = useState('');

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ question, options, answer });
        setQuestion('');
        setOptions(['', '', '', '']);
        setAnswer('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md mb-4">
            <h2 className="text-lg font-bold mb-4">Create Quiz</h2>
            <input
                type="text"
                placeholder="Question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="border p-2 mb-4 w-full"
                required
            />
            {options.map((option, index) => (
                <div key={index} className="mb-4">
                    <input
                        type="text"
                        placeholder={`Option ${index + 1}`}
                        value={option}
                        onChange={(e) => handleOptionChange(index, e.target.value)}
                        className="border p-2 w-full"
                        required
                    />
                </div>
            ))}
            <input
                type="text"
                placeholder="Correct Answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="border p-2 mb-4 w-full"
                required
            />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                Create Quiz
            </button>
        </form>
    );
};

export default QuizForm;
