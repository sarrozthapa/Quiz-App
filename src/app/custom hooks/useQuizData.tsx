import { Question } from '@/constants/Questions';
import { useState } from 'react';

const useQuizData = () => {
const [submitted,setSubmitted]=useState<boolean>(false);
  const [currentQuestion,setCurrentQuestion]=useState<number>(0);
  const [score,setScore]=useState<number>(0);
  const [questions,setQuestions]=useState<[]|Question[]>([]);
  const [userAnswers,setUserAnswers]=useState<[]|string[]>([]);


    return {
        submitted,
        setSubmitted,
        currentQuestion,
        setCurrentQuestion,
        score:score,
        setScore,
        questions,
        setQuestions,
        userAnswers,setUserAnswers
    }
  
}

export default useQuizData