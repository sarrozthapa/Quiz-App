import { Question } from '@/constants/Questions'
import { Button } from './ui/button'
import {motion, useInView} from  'framer-motion'
import { useRef } from 'react'
type Props={
    question:Question,
    userAnswers:[]|string[]
    currentQuestion:number,
    setUserAnswers:(state:string[])=>void,
    setCurrentQuestion:(state:number)=>void,
    totalQuestions:number,
    submitted:boolean
}
const QuestionCard = ({question,userAnswers,currentQuestion,setUserAnswers,setCurrentQuestion,totalQuestions,submitted}:Props) => {
  
    if(currentQuestion>=userAnswers.length)
        setUserAnswers([...userAnswers,'']);
    const onClickHandler=(option:string)=>{
        if(submitted)
            return;
        const newArray=userAnswers.map((answer)=>answer);
        if(newArray.length>currentQuestion)
            newArray[currentQuestion]=option;
        else
            newArray.push(option);
        setUserAnswers(newArray);

    }
  return (
    <motion.div 
    className='bg-[#5b64d4] flex flex-col justify-between rounded-md px-8 py-10 min-h-[400px] max-w-[800px] w-[95%] sm:w-[85%] md:w-[75%] lg:w-[60%]'
     initial={{
        opacity:0,
     }}
     animate={{
        opacity:100,
     }}
     transition={{
        duration:0.5,
     }}
     >
        <h1 className='text-xl'>{currentQuestion+1}{'. '}{question.question.text}</h1>
        <div className='flex flex-col gap-4 mt-8'>         
            {
                question.options.map((option:string,index:number)=>{
                    return <Button onClick={()=>onClickHandler(option)} key={index} 
                    className={`w-full flex text-md tracking-wide justify-start px-6 bg-transparent bg-[#4950ae] border-[1px] ${userAnswers.length>currentQuestion&&option===userAnswers[currentQuestion]?'bg-orange-500':'border-white/40'}
                    ${submitted&&question.correctAnswer===option&&'bg-green-500'}
                    ${submitted&&userAnswers[currentQuestion]===option&&question.correctAnswer!==option&&'bg-red-800'}
                    
                    `}>{option}</Button>
                })
            }
        </div>
        <div className='flex mt-4 justify-between'>
            <Button disabled={currentQuestion===0} onClick={()=>setCurrentQuestion(currentQuestion-1)} className={`${currentQuestion===0&&'opacity-0'} hover:bg-slate-800`}>Prev</Button>
            <Button onClick={()=>setCurrentQuestion(currentQuestion+1)} disabled={currentQuestion===totalQuestions-1} className={`${currentQuestion===totalQuestions-1&&'opacity-0'} hover:bg-slate-800`}>Next</Button>
        </div>
    </motion.div>
  )
}

export default QuestionCard