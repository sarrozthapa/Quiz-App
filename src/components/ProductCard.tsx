'use client'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from './ui/input';
import useDebounce from '@/hooks/useDebounce';

const SIZES=['sm','md','lg','xl'];
const COLORS=['Red','Blue','Yellow','Orange'];
const ProductCard = () => {
    const searchParams=useSearchParams();
    const filter={
        color:searchParams.get('color')||'Red',
        size:searchParams.get('size')||'md',
        search:searchParams.get('search')||'',
        
    }
    const router=useRouter();
    const [search,setSearch]=useState<string>('');
    const debouncedValue=useDebounce(search);
    useEffect(()=>{
        router.push(`?${new URLSearchParams({
            ...filter,search:debouncedValue
        })}`)
    },[debouncedValue])
  return (
    <div className='flex flex-col gap-4'>
        <Input onChange={(e)=>setSearch(e.target.value)}/>
        <div className='flex gap-4'>
            {SIZES.map((size,index)=>{
                return <Button onClick={()=>{
                    router.push(`?${new URLSearchParams({
                        ...filter,size:size
                    })}`)
                }} className={`${filter.size===size&&'border-2 border-blue-500'}`} key={index}>
                    {size.toUpperCase()}
                </Button>
            })}
        </div>

        {/*Colors*/}
        <div className='flex gap-4'>
            {COLORS.map((color,index)=>{
                return <Button onClick={()=>{
                    router.push(`?${new URLSearchParams({
                        ...filter,color:color
                    })}`)
                }}  className={`${filter.color===color&&'border-2 border-blue-500'}`} key={index}>
                    {color}
                </Button>
            })}
        </div>
    </div>
  )
}

export default ProductCard