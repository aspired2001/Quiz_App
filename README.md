


    <h1>Quiz App</h1>

    <p>A simple quiz application built with a Node.js backend and a React frontend. This application allows users to register, log in, take quizzes, and view results.</p>

    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#demo-credentials">Demo Credentials</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
        <li><a href="#getting-started">Getting Started</a></li>
            <ul>
                <li><a href="#backend-setup">Backend Setup</a></li>
                <li><a href="#frontend-setup">Frontend Setup</a></li>
            </ul>
        <li><a href="#running-the-application">Running the Application</a></li>
        <li><a href="#api-endpoints">API Endpoints</a></li>
        <li><a href="#license">License</a></li>
    </ul>

    <h2 id="demo-credentials">Demo Credentials</h2>
    <p>You can log in using the following demo credentials:</p>
    <ul>
        <li><strong>Email:</strong> <code>demo@example.com</code></li>
        <li><strong>Password:</strong> <code>Demo@123</code></li>
    </ul>

    <h2 id="features">Features</h2>
    <ul>
        <li>User authentication (login, register)</li>
        <li>Take quizzes and view results</li>
        <li>Admin functionality to manage quizzes</li>
        <li>Responsive design using Tailwind CSS</li>
    </ul>

    <h2 id="tech-stack">Tech Stack</h2>
    <ul>
        <li><strong>Backend:</strong> Node.js, Express, MongoDB</li>
        <li><strong>Frontend:</strong> React, Tailwind CSS, Axios</li>
        <li><strong>Database:</strong> MongoDB</li>
        <li><strong>Authentication:</strong> JSON Web Tokens (JWT)</li>
    </ul>

    <h2 id="getting-started">Getting Started</h2>

    <h3 id="backend-setup">Backend Setup</h3>
    <ol>
        <li>
            <strong>Clone the repository:</strong>
            <pre><code>git clone https://github.com/yourusername/quiz-app.git
cd quiz-app/backend</code></pre>
        </li>
        <li>
            <strong>Install dependencies:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li>
            <strong>Create a .env file:</strong>
            <p>Create a <code>.env</code> file in the <code>backend</code> directory and add the following environment variables:</p>
            <pre><code>MONGODB_URI=mongodb://&lt;username&gt;:&lt;password&gt;@localhost:27017/quiz-app
JWT_SECRET=your_jwt_secret</code></pre>
            <p>Replace <code>&lt;username&gt;</code> and <code>&lt;password&gt;</code> with your MongoDB credentials.</p>
        </li>
        <li>
            <strong>Run the backend server:</strong>
            <pre><code>npm start</code></pre>
            <p>The backend server will run on <code>http://localhost:5000</code>.</p>
        </li>
    </ol>

    <h3 id="frontend-setup">Frontend Setup</h3>
    <ol>
        <li>
            <strong>Navigate to the frontend directory:</strong>
            <pre><code>cd ../frontend</code></pre>
        </li>
        <li>
            <strong>Install dependencies:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li>
            <strong>Run the frontend application:</strong>
            <pre><code>npm start</code></pre>
            <p>The frontend application will run on <code>http://localhost:3000</code>.</p>
        </li>
    </ol>

    <h2 id="running-the-application">Running the Application</h2>
    <ol>
        <li><strong>Start the backend</strong> and ensure it is running on <code>http://localhost:5000</code>.</li>
        <li><strong>Start the frontend</strong> and ensure it is running on <code>http://localhost:3000</code>.</li>
        <li>Open your browser and navigate to <code>http://localhost:3000</code> to access the application.</li>
        <li>Use the demo credentials to log in and explore the app.</li>
    </ol>

    <h2 id="api-endpoints">API Endpoints</h2>

    <h3>Authentication</h3>
    <ul>
        <li>
            <strong>POST</strong> <code>/api/auth/login</code>
            <p>Request body:</p>
            <pre><code>{
  "email": "demo@example.com",
  "password": "Demo@123"
}</code></pre>
        </li>
        <li>
            <strong>POST</strong> <code>/api/auth/register</code>
            <p>Request body:</p>
            <pre><code>{
  "name": "Demo User",
  "email": "demo@example.com",
  "password": "Demo@123"
}</code></pre>
        </li>
    </ul>

    <h3>Quiz</h3>
    <ul>
        <li><strong>GET</strong> <code>/api/quizzes</code> - Get all quizzes</li>
        <li><strong>POST</strong> <code>/api/quizzes</code> - Create a new quiz</li>
        <li><strong>GET</strong> <code>/api/quizzes/:id</code> - Get a quiz by ID</li>
    </ul>

    <h2 id="license">License</h2>
    <p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>


