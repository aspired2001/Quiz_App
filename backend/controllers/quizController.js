const Quiz = require('../models/Quiz');

exports.createQuiz = async (req, res) => {
    const { question, options, answer } = req.body;
    const quiz = new Quiz({ question, options, answer, user: req.user.id });
    await quiz.save();
    res.status(201).json(quiz);
};

exports.getQuizzes = async (req, res) => {
    const quizzes = await Quiz.find({ user: req.user.id });
    res.json(quizzes);
};

exports.updateQuiz = async (req, res) => {
    const { id } = req.params;
    const updatedQuiz = await Quiz.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedQuiz);
};

exports.deleteQuiz = async (req, res) => {
    const { id } = req.params;
    await Quiz.findByIdAndDelete(id);
    res.json({ message: 'Quiz deleted' });
};
