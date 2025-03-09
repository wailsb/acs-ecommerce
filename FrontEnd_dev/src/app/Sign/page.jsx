"use client";
import React, { useState } from 'react';
// No need to import CSS as we are using Tailwind CSS for styling
const Sign = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(true);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        // Handle sign up logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[var(--bg)]">
            {isSignUp ? (
                <div className="w-full max-w-md p-8 space-y-6 bg-[var(--bg2)] rounded-lg shadow-md">
                    <h2 className="text-[var(--text)] text-2xl font-bold text-center">Sign Up</h2>
                    <form className="space-y-6" onSubmit={handleSignUpSubmit}>
                        <div className="form-group">
                            <label htmlFor="signUpEmail" className="text-[var(--text)] block text-sm font-medium">Email:</label>
                            <input
                                type="email"
                                id="signUpEmail"
                                value={signUpEmail}
                                onChange={(e) => setSignUpEmail(e.target.value)}
                                required
                                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="signUpPassword" className="text-[var(--text)] block text-sm font-medium">Password:</label>
                            <input
                                type="password"
                                id="signUpPassword"
                                value={signUpPassword}
                                onChange={(e) => setSignUpPassword(e.target.value)}
                                required
                                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword" className="text-[var(--text)] block text-sm font-medium">Confirm Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign Up
                        </button>
                    </form>
                    <p className="text-[var(--text)] text-sm text-center">
                        Already have an account?{' '}
                        <button
                            onClick={() => setIsSignUp(false)}
                            className="text-indigo-600 hover:underline focus:outline-none"
                        >
                            Login
                        </button>
                    </p>
                </div>
            ) : (
                <div className="w-full max-w-md p-8 space-y-6 bg-[var(--bg2)] rounded-lg shadow-md">
                    <h2 className="text-[var(--text)] text-2xl font-bold text-center">Login</h2>
                    <form className="space-y-6" onSubmit={handleLoginSubmit}>
                        <div className="form-group">
                            <label htmlFor="email" className="text-[var(--text)] block text-sm font-medium">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="text-[var(--text)] block text-sm font-medium">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Login
                        </button>
                    </form>
                    <p className="text-[var(--text)] text-sm text-center">
                        Don't have an account?{' '}
                        <button
                            onClick={() => setIsSignUp(true)}
                            className="text-indigo-600 hover:underline focus:outline-none"
                        >
                            Sign Up
                        </button>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Sign;