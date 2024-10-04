import React, { useState } from 'react'

type Props={
    setQuestions:
}

const useFetchQuestions = ({}:Props) => {
    const [loading,setLoading]=useState<boolean>(true);
  return (
    {
        loading,
        setLoading,
    }
  )
}

export default useFetchQuestions