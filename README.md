# Quiz App

Quiz App is a simple quiz application built with a Node.js backend and a React frontend. This application allows users to register, log in, take quizzes, and view results.

## Demo Credentials

You can log in using the following demo credentials:

- **Email:** demo@example.com
- **Password:** Demo@123

## Features

- User authentication (login, register)
- Take quizzes and view results
- Admin functionality to manage quizzes
- Responsive design using Tailwind CSS

## Tech Stack

- **Backend:** Node.js, Express, MongoDB
- **Frontend:** React, Tailwind CSS, Axios
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)

## Getting Started

### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/quiz-app.git
    cd quiz-app/backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file:

    Create a `.env` file in the backend directory and add the following environment variables:

    ```plaintext
    MONGODB_URI=mongodb://<username>:<password>@localhost:27017/quiz-app
    JWT_SECRET=your_jwt_secret
    ```

    Replace `<username>` and `<password>` with your MongoDB credentials.

4. Run the backend server:

    ```bash
    npm start
    ```

    The backend server will run on [http://localhost:5000](http://localhost:5000).

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd ../frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the frontend application:

    ```bash
    npm start
    ```

    The frontend application will run on [http://localhost:3000](http://localhost:3000).

## Running the Application

1. Start the backend and ensure it is running on [http://localhost:5000](http://localhost:5000).
2. Start the frontend and ensure it is running on [http://localhost:3000](http://localhost:3000).
3. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the application.
4. Use the demo credentials to log in and explore the app.

## API Endpoints

### Authentication

- **POST** `/api/auth/login`

    **Request body:**

    ```json
    {
      "email": "demo@example.com",
      "password": "Demo@123"
    }
    ```

- **POST** `/api/auth/register`

    **Request body:**

    ```json
    {
      "name": "Demo User",
      "email": "demo@example.com",
      "password": "Demo@123"
    }
    ```

### Quiz

- **GET** `/api/quizzes` - Get all quizzes
- **POST** `/api/quizzes` - Create a new quiz
- **GET** `/api/quizzes/:id` - Get a quiz by ID

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/). See the LICENSE file for details.
