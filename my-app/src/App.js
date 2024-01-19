import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProfilePage,
  QuizPage,
  PythonPage,
  CNPage,
  CPage,
  CdPage,
  TocPage,
  MlpPage,
  NishaPage,
  QuizHome,
  DEQuiz,
  CProgramming,
  PythonQuiz,

  
} from "./Routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/action/user";


import axios from "axios";



const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/python" element={<PythonPage />} />
          <Route path="/Appitude" element={<CNPage/>} />
          <Route path="/c" element={<CPage/>} />
          <Route path="/Nisha" element={<CdPage/>} />
          <Route path="/Toc" element={<TocPage/>} />
          <Route path="/mlp" element={<MlpPage/>} />
          <Route path="/Arun" element={<NishaPage/>} />
          <Route path="/QuizHome" element={<QuizHome/>} />
          <Route path="/DeQuiz" element={<DEQuiz/>} />
          <Route path="/CP" element={<CProgramming/>} />
          <Route path="/PythonQuiz" element={<PythonQuiz/>} />






        
            
  








          



          


          <Route
            path="/activation/:activation_token"
            element={<ActivationPage />}
          />
          
        </Routes>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </>
  );
};

export default App;
