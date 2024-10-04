'use client'
import { useEffect, useState } from "react";
import QuestionCard from "@/components/QuestionCard";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Question } from "@/constants/Questions";
import useGetFilters from "./custom hooks/useGetFilters";
import FilterPage from "@/components/Filter";
import useQuizData from "./custom hooks/useQuizData";

export type Filter={
  limit:string,
  categories:string,
  difficulties:string,
}

const URL=`https://the-trivia-api.com/v2/questions`;

export default function Home() {
  const [searchParams,filter]=useGetFilters();
  const {submitted,setSubmitted,currentQuestion,userAnswers,setUserAnswers,setCurrentQuestion,score,setScore,questions,setQuestions}=useQuizData();
  const [loading,setLoading]=useState<boolean>(true);
  
  const fetchQuestions=async()=>{
    setLoading(true);
    const data=await axios.get(`${URL}?${new URLSearchParams(filter)}`);
    const fetchedQuestions=data.data;
    const modifiedQuestions=fetchedQuestions.map((question:Question)=>{
      return {...question,options:[...question.incorrectAnswers,question.correctAnswer]};
    })
    setQuestions(modifiedQuestions);
    setLoading(false);
  }

  const onRestart=()=>{
    setUserAnswers([]);
    setScore(0);
    setCurrentQuestion(0);
    setSubmitted(false);
    fetchQuestions();
  }

  useEffect(()=>{
    onRestart();
  },[searchParams])

    
  const onSubmit=()=>{
    const score=userAnswers.reduce((total:number,currentValue,currentIndex:number)=>
      {
        return total+(questions[currentIndex].correctAnswer===currentValue?1:0);
      }
      ,0)
    setSubmitted(true);
    setScore(score);
    }
  
  return (
    <div>
      <div className="flex flex-col gap-2 items-center justify-center w-full pt-4">
        <h1 className="text-4xl tracking-wide font-bold">QUIZ APP</h1>
         <FilterPage filter={filter}/>
      </div>
      <div className="flex mt-4 flex-col gap-4 items-center min-h-screen">
      {
        loading||questions.length===0?<div className="bg-[#5b64d4] rounded-md px-8 py-10 max-w-[800px] w-[95%] sm:w-[85%] md:w-[75%] lg:w-[60%] h-[400px] flex items-center justify-center text-2xl">Loading...</div>:
        <>  
          {
            submitted&&
            <p className="text-lg tracking-wide">Congratulations! Your score is {score}</p>
          }
          <QuestionCard question={questions[currentQuestion]} userAnswers={userAnswers} submitted={submitted} currentQuestion={currentQuestion} setUserAnswers={setUserAnswers} setCurrentQuestion={setCurrentQuestion} totalQuestions={questions.length} />
          <div className="flex gap-4"> 
            <Button disabled={submitted} onClick={onSubmit} variant={"secondary"} className="bg-green-500">Submit</Button>
            <Button onClick={onRestart} variant={"secondary"} className="bg-orange-500">Restart</Button>
          </div>
      </>
      }
    </div>
  </div>
  );
}
