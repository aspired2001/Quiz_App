Install dependencies:

bash
Copy code
npm install
Create a .env file:
Create a .env file in the backend directory and add the following environment variables:

makefile
Copy code
MONGODB_URI=mongodb://<username>:<password>@localhost:27017/quiz-app
JWT_SECRET=your_jwt_secret
Replace <username> and <password> with your MongoDB credentials.

Run the backend server:

bash
Copy code
npm start
The backend server will run on http://localhost:5000.

Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd ../frontend
Install dependencies:

bash
Copy code
npm install
Run the frontend application:

bash
Copy code
npm start
The frontend application will run on http://localhost:3000.

Running the Application
Start the backend and ensure it is running on http://localhost:5000.
Start the frontend and ensure it is running on http://localhost:3000.
Open your browser and navigate to http://localhost:3000 to access the application.
Use the demo credentials to log in and explore the app.
API Endpoints
Authentication
POST /api/auth/login

Request body:
json
Copy code
{
  "email": "demo@example.com",
  "password": "Demo@123"
}
POST /api/auth/register

Request body:
json
Copy code
{
  "name": "Demo User",
  "email": "demo@example.com",
  "password": "Demo@123"
}
Quiz
GET /api/quizzes - Get all quizzes
POST /api/quizzes - Create a new quiz
GET /api/quizzes/:id - Get a quiz by ID
License
This project is licensed under the MIT License. See the LICENSE file for details.

Project Structure
lua
Copy code
quiz-app/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── quizController.js
│   ├── models/
│   │   ├── Quiz.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── quizRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── .env
│   ├── package.json
│   ├── server.js
│   └── README.md
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── Quiz.js
    │   │   ├── QuizForm.js
    │   │   ├── Result.js
    │   │   └── Auth.js
    │   ├── context/
    │   │   └── AuthContext.js
    │   ├── pages/
    │   │   ├── Home.js
    │   │   ├── QuizPage.js
    │   │   └── ResultsPage.js
    │   ├── App.js
    │   ├── index.js
    │   ├── tailwind.config.js
    │   └── package.json
    └── README.md
