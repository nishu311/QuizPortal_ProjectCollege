import React from 'react'
import Header from "../componants/Layout/Header";


const QuizHome = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center  sm:px-6 lg:px-8">
    <Header activeHeading={1} />

    <div className="bg-gray-800 text-white  my-6 h-screen w-1/6 p-4">
    <h2 className="text-2xl font-bold mb-4">Quiz Categories</h2>
    {/* Add your quiz categories or links here */}
    <ul className="space-y-2">
      <li><a href="/CP" className="block hover:bg-gray-700 px-2 py-1 rounded">C Programming</a></li>
      <li><a href="/DEQuiz" className="block hover:bg-gray-700 px-2 py-1 rounded">Digital Logic</a></li>
      <li><a href="/PythonQuiz" className="block hover:bg-gray-700 px-2 py-1 rounded">Python</a></li>
      <li><a href="/TocQuiz" className="block hover:bg-gray-700 px-2 py-1 rounded">Toc</a></li>
      <li><a href="/DsaQuiz" className="block hover:bg-gray-700 px-2 py-1 rounded">Dsa</a></li>
      <li><a href="/Compiler Quiz" className="block hover:bg-gray-700 px-2 py-1 rounded">Compiler design</a></li>
      <li><a href="/RQuiz" className="block hover:bg-gray-700 px-2 py-1 rounded">R Proggraming</a></li>
      <li><a href="/" className="block hover:bg-gray-700 px-2 py-1 rounded">Algorithm</a></li>
      <li><a href="/mlpQuiz" className="block hover:bg-gray-700 px-2 py-1 rounded">MLP</a></li>
      <li><a href="/Coa" className="block hover:bg-gray-700 px-2 py-1 rounded">Coa</a></li>
      <li><a href="/CNQuiz" className="block hover:bg-gray-700 px-2 py-1 rounded">Computer Network</a></li>


      
      {/* Add more categories as needed */}
    </ul>
  </div>
  </div>

  )
}

export default QuizHome
