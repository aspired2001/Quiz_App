import React, { useState } from 'react';

const Quiz = ({ quiz, onSelect, onFinish }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectOption = (option) => {
        setSelectedOption(option);
    };

    const handleFinish = () => {
        const isCorrect = selectedOption === quiz.answer;
        alert(isCorrect ? 'Correct!' : 'Wrong Answer!');
        onFinish();
    };

    return (
        <div className="bg-white p-4 rounded shadow mb-4">
            <h3 className="text-lg font-bold">{quiz.question}</h3>
            {quiz.options.map((option, index) => (
                <div key={index} className="mb-2">
                    <input
                        type="radio"
                        name={`quiz-${quiz._id}`}
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => handleSelectOption(option)}
                    />
                    <label className="ml-2">{option}</label>
                </div>
            ))}
            <button onClick={handleFinish} className="bg-blue-500 text-white py-1 px-4 rounded">
                Finish Quiz
            </button>
        </div>
    );
};

export default Quiz;
