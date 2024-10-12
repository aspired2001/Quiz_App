import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Auth = () => {
    const { login, register } = useContext(AuthContext);
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Logging in with:', { email, password }); // Log the credentials
        try {
            if (isLogin) {
                await login(email, password);
                navigate('/quiz'); // Navigate to quiz page after successful login
            } else {
                await register(username, email, password);
            }
        } catch (error) {
            console.error('Login failed:', error); // Log the error for debugging
        }
    };


    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h2>
            {!isLogin && (
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border p-2 mb-4 w-full"
                />
            )}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 mb-4 w-full"
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 mb-4 w-full"
                required
            />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                {isLogin ? 'Login' : 'Register'}
            </button>
            <button type="button" onClick={() => setIsLogin(!isLogin)} className="mt-2 text-blue-500">
                {isLogin ? 'Switch to Register' : 'Switch to Login'}
            </button>
        </form>
    );
};

export default Auth;
