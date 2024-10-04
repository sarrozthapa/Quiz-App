
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group'
import { Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Checkbox } from './ui/checkbox'


type Props={
    title:string,
    value:string,
    options:any,
    filter:any
}
const FilterComponent = ({title,value,options,filter}:Props) => {
  const router=useRouter();
    const onCheckedChange=(chosenValue)=>{
        router.push(`?${new URLSearchParams({
            ...filter,[value]:chosenValue
        })}`)
  }
  

    return (
    <div className=''>
        <h1>{title}</h1>
        <div className='pl-5 flex flex-col gap-1'>

        {
            options.map((option,index)=>{
                return <div key={index} onClick={()=>onCheckedChange(option.value)} className='cursor-pointer flex gap-2 items-center'>
                    <Checkbox className='border-white' checked={option.value===filter[value]}/>
                    <h2 className=''>{option.key}</h2>
                </div>
            })
        }
        </div>
    </div>
  )
}

export default FilterComponent