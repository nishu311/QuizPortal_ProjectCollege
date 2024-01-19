import React from "react";
import Header from "../componants/Layout/Header";
import python from "../componants/Subject/python";
import { Link } from 'react-router-dom';



const QuizPage = () => {
  return (
    <div className="relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat">
    <Header activeHeading={1} />
    <section class="bg-gray-300">
  <div class="mx-auto grid max-w-lg gap-x-8 gap-y-12 px-4 py-32 md:max-w-screen-xl md:grid-cols-2 md:px-8 lg:grid-cols-3">
    <div>
      <h2 class="text-3xl font-medium text-Black-800">
        Quiz <br />
        Subject<br />
        Choose <br />
        You Want.
      </h2>
    </div>

    <div class="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div class="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-16 w-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </div>
      <p class="mb-3 font-medium uppercase text-black">C Programming</p>
      <p class="text-blue-900">
C is an imperative procedural language, supporting structured programming, lexical variable scope, and recursion, with a static type system. It was designed to be compiled to provide low-level access to memory and language constructs that map efficiently to machine instructions, all with minimal runtime support.</p>
      <a href="/C" class="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
        <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
        <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
        <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
        <span class="relative py-6" >Button Text</span>

</a>
    </div>
    <div class="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div class="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-16 w-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </div>
      <p class="mb-3 font-medium uppercase text-black">Complier Design</p>
     <p class="text-blue-900">A compiler is a computer program that helps in translating the computer code from one programming language into another language. Basically, it translates the program written in the source language to the machine language. The compiling process contains an essential translation operation and error detection.</p>
     <a href="/Nisha" class="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
        <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
        <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
        <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
        <span class="relative py-6" >Button Text</span>

</a>
    </div>
    <div class="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div class="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-16 w-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </div>
      <p class="mb-3 font-medium uppercase text-black">TOC</p>
      <p class="text-blue-900">The Theory of Constraints (TOC) is a philosophy of management and continuous improvement originally developed by Dr. Eliyahu M. Goldratt and introduced in a book called The Goal. The book, a novel, is often used in business classes.</p>
      <a href="/Toc" class="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
        <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
        <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
        <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
        <span class="relative py-6" >Button Text</span>

</a>
    </div>
    <div class="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div class="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-16 w-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
        
      </div>
      <p class="mb-3 font-medium uppercase text-black">Computer Network</p>
      <p class="text-blue-900">A computer network is a group of interconnected nodes or computing devices that exchange data and resources with each other. A network connection between these devices can be established using cable or wireless media.</p>
      <a href="/Appitude" class="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
        <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
        <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
        <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
        <span class="relative py-6" >Button Text</span>

</a>
    </div>

    <div class="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div class="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-16 w-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </div>
      <p class="mb-3 font-medium uppercase text-black">Python</p>
      <p class="text-blue-900">Python was developed by Guido van Rossum and was released first on February 20, 1991. It is one of the most widely used and loved programming languages and is interpreted in nature thereby providing flexibility in incorporating dynamic semantics. It is also a free and open-source language with very simple and clean syntax. This makes it easy for developers to learn Python. Python also supports object-oriented programming and is most commonly used to perform general-purpose programming. 

</p>
     <a href="/python" class="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
<span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
<span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
<span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
<span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
<span class="relative">Button Text</span>

</a>
    </div>
    
    
  </div>
  
  
</section>
<section class="bg-gray-300">
  <div class="mx-auto grid max-w-lg gap-x-8 gap-y-12 px-4 py-6 md:max-w-screen-xl md:grid-cols-2 md:px-8 lg:grid-cols-3">
    <div class="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div class="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-16 w-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </div>
      <p class="mb-3 font-medium uppercase text-black">MLP</p>
      <p class="text-blue-900">Machine learning (ML) is a branch of artificial intelligence (AI) that enables computers to “self-learn” from training data and improve over time, without being explicitly programmed. Machine learning algorithms are able to detect patterns in data and learn from them, in order to make their own predictions.</p>
      <a href="/mlp" class="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
        <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
        <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
        <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
        <span class="relative py-6" >Button Text</span>

</a>
    </div>
    <div class="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div class="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-16 w-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </div>
      <p class="mb-3 font-medium uppercase text-black">Soft Computing</p>
     <p class="text-blue-900">Soft computing is based on techniques such as fuzzy logic, genetic algorithms, artificial neural networks, machine learning, and expert systems. Although soft computing theory and techniques were first introduced in 1980s, it has now become a major research and study area in automatic control engineering.</p>
     <a href="/sc" class="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
        <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
        <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
        <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
        <span class="relative py-6" >Button Text</span>

</a>
    </div>
    <div class="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div class="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-16 w-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </div>
      <p class="mb-3 font-medium uppercase text-black">Algogrithm</p>
      <p class="text-blue-900">Algorithms are used to find the best possible way to solve a problem, based on data storage, sorting and processing, and machine learning. In doing so, they improve the efficiency of a program. Algorithms are used in all areas of computing.</p>
      <a href="/Algo" class="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
        <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
        <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
        <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
        <span class="relative py-6" >Button Text</span>

</a>
    </div>
    <div class="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div class="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-16 w-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
        
      </div>
      <p class="mb-3 font-medium uppercase text-black">Dsa</p>
      <p class="text-blue-900">DSA stands for "Data Structures and Algorithms." It is a fundamental concept in computer science that focuses on organizing and manipulating data efficiently.</p>
      <a href="/dsa" class="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
        <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
        <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
        <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
        <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
        <span class="relative py-6" >Button Text</span>

</a>
    </div>

    <div class="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div class="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-16 w-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </div>
      <p class="mb-3 font-medium uppercase text-black">Coa</p>
      <p class="text-blue-900">Computer Organization and Architecture Tutorial provides in-depth knowledge of internal working, structuring, and implementation of a computer system. Whereas, Organization defines the way the system is structured so that all those catalogued tools can be used properly.. 

</p>
     <a href="/coa" class="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
<span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
<span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
<span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
<span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
<span class="relative">Button Text</span>

</a>
    </div>
    <div class="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div class="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-16 w-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </div>
      <p class="mb-3 font-medium uppercase text-black">R Programming</p>
      <p class="text-blue-900">R is a programming language and a software environment for statistical computing and graphics. Microsoft R Open is a version of R that was created by the Microsoft Corporation. Both R and Microsoft R Open are free and open-source tools for data science and analytics.

</p>
     <a href="/R" class="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
<span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
<span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
<span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
<span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
<span class="relative">Button Text</span>

</a>
    </div>
    
    
    
  </div>
  
  
  
</section>



</div>
  )
}

export default QuizPage
