import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[800px] 800px:min-h-[500px] w-full bg-no-repeat bg-cover ${styles.noramlFlex }`}
      style={{  
        backgroundImage:
          "url(https://img.freepik.com/premium-photo/back-school-pile-books_23-2148224246.jpg)",
      }}
      
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
           quick  <br />and informal assessment of student knowledge.
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Take The attitude of a Student Never Be tO big Too ask question Never Know Too much Learn Somthing New
          <br /> 
        </p>
        <Link to="/QuizHome" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Start Study 
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
 