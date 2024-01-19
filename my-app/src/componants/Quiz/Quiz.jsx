import React from 'react';
import { Link } from 'react-router-dom';



const QuizPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to the Quiz Website</h1>
        <p className="text-gray-600 mb-8">Choose a quiz to get started!</p>
        <Link to="/CNPage" className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-600">
          computer network
        </Link>
        <Link to="/quiz/2" className="bg-green-500 text-white py-2 px-7 rounded-md hover:bg-green-600">
          Appitude
        </Link>
        <Link to="/quiz/2" className="bg-pink-500 text-white py-2 px-8 rounded-md hover:bg-pink-600">
          Math
        </Link>
        <Link to="/quiz/2" className="bg-yellow-500 text-white py-2 px-10 rounded-md hover:bg-yellow-600">
          Operating System
        </Link>
        <Link to="/quiz/2" className="bg-red-500 text-white py-2 px-12 rounded-md hover:bg-red-600">
          python
        </Link>
        {/* Add more links for other quizzes as needed */}
      </div>
    </div>
  );
};

export default QuizPage;
