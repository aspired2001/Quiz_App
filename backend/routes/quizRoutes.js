const express = require('express');
const {
    createQuiz,
    getQuizzes,
    updateQuiz,
    deleteQuiz,
} = require('../controllers/quizController');
const { auth } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, createQuiz);
router.get('/', auth, getQuizzes);
router.put('/:id', auth, updateQuiz);
router.delete('/:id', auth, deleteQuiz);

module.exports = router;
