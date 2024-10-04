import React, { useEffect, useState } from 'react'

const useDebounce = (value:any,delay=500) => {
    const [debouncedValue,setDebouncedValue]=useState(value);
    useEffect(()=>{
        const timeOut=setTimeout(()=>{
            setDebouncedValue(value);
        },delay);
        return ()=>clearTimeout(timeOut);
    },[value,delay])
  return (
    debouncedValue
  )
}

export default useDebounce